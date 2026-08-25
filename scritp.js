// Configurações do Banco de Dados nativo do navegador (IndexedDB)
const dbName = "FlashcardsDB";
const storeName = "perguntas";

// Dados iniciais que serão inseridos no banco de dados automaticamente na primeira execução
const dadosIniciais = [
    { id: 1, titulo: "Lentes", texto: "As lentes alteram a direção da luz por refração para ajustar imagens. As convergentes aproximam os raios para ampliar a visão, enquanto as divergentes os afastam. São a base de óculos, câmeras e microscópios.", imagem: "imagem1.jpg" },
    { id: 2, titulo: "Segunda Pergunta", texto: "Esta é a resposta da pergunta 2 carregada diretamente da tabela do banco de dados.", imagem: "imagem2.jpg" },
    { id: 3, titulo: "Terceira Pergunta", texto: "Esta é a resposta da pergunta 3 armazenada localmente com persistência.", imagem: "imagem3.jpg" },
    { id: 4, titulo: "Quarta Pergunta", texto: "Texto explicativo configurado dinamicamente para a quarta pergunta.", imagem: "imagem4.jpg" },
    { id: 5, titulo: "Quinta Pergunta", texto: "Parabéns! Você chegou ao fim dos cards salvos na memória do navegador.", imagem: "imagem5.jpg" }
];

let db;
let flashcards = [];
let indiceAtual = 0;

// Seletores do HTML
const card = document.getElementById("flashcard");
const cardInterno = document.getElementById("card-interno");
const tituloFrente = document.getElementById("titulo-frente");
const textoFrente = document.getElementById("texto-frente");
const tituloVerso = document.getElementById("titulo-verso");
const imgVerso = document.getElementById("img-verso");

const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");
const indicadorPagina = document.getElementById("indicador-pagina");

// Passo 1: Abre a conexão e monta a estrutura do Banco de Dados
function inicializarBanco() {
    const request = indexedDB.open(dbName, 1);

    // Roda apenas na primeira vez para criar as tabelas
    request.onupgradeneeded = function(event) {
        db = event.target.result;
        const objectStore = db.createObjectStore(storeName, { keyPath: "id" });
        
        // Alimenta o banco de dados com a lista inicial
        dadosIniciais.forEach(item => objectStore.add(item));
    };

    // Executado quando a conexão com o banco é bem-sucedida
    request.onsuccess = function(event) {
        db = event.target.result;
        buscarCardsDoBanco();
    };

    request.onerror = function() {
        console.error("Falha ao acessar o IndexedDB. Executando em modo de segurança com dados locais.");
        flashcards = dadosIniciais;
        renderizarCard();
    };
}

// Passo 2: Faz um comando de "SELECT *" buscando todos os cards do banco
function buscarCardsDoBanco() {
    const transaction = db.transaction([storeName], "readonly");
    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.getAll();

    request.onsuccess = function(event) {
        flashcards = event.target.result;
        renderizarCard();
    };
}

// Passo 3: Distribui as informações no HTML de acordo com o índice ativo
function renderizarCard() {
    if (flashcards.length === 0) return;

    const dadosDoCard = flashcards[indiceAtual];

    // Modifica o texto e elementos visuais
    tituloFrente.textContent = dadosDoCard.titulo;
    textoFrente.textContent = dadosDoCard.texto;
    tituloVerso.textContent = dadosDoCard.titulo;
    imgVerso.src = dadosDoCard.imagem;

    // Atualiza a numeração (ex: 1 / 5)
    indicadorPagina.textContent = `${indiceAtual + 1} / ${flashcards.length}`;

    // Gerencia o estado de ativação dos botões para evitar erros
    btnVoltar.disabled = indiceAtual === 0;
    btnAvancar.disabled = indiceAtual === flashcards.length - 1;
}

// Evento: Girar o card ao clicar nele
card.addEventListener("click", () => {
    cardInterno.classList.toggle("girado");
});

// Evento: Ir para a próxima pergunta
btnAvancar.addEventListener("click", (evento) => {
    evento.stopPropagation(); // IMPORTANTE: Impede o clique de disparar o giro do card
    
    if (indiceAtual < flashcards.length - 1) {
        cardInterno.classList.remove("girado"); // Desvira o card atual para o próximo começar de frente
        
        // Aguarda uma fração de segundo para o card desvirar antes de trocar o texto
        setTimeout(() => {
            indiceAtual++;
            renderizarCard();
        }, 150);
    }
});

// Evento: Voltar para a pergunta anterior
btnVoltar.addEventListener("click", (evento) => {
    evento.stopPropagation(); // IMPORTANTE: Impede o clique de disparar o giro do card
    
    if (indiceAtual > 0) {
        cardInterno.classList.remove("girado");
        
        setTimeout(() => {
            indiceAtual--;
            renderizarCard();
        }, 150);
    }
});

// Disparar o fluxo ao abrir a aplicação
inicializarBanco();
