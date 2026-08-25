const dbName = "FlashcardsDB";
const storeName = "perguntas";

const dadosIniciais = [
    // --- ÓPTICA / PROPRIEDADES DA LUZ ---
    {
        id: 1,
        categoria: "Óptica / Propriedades da Luz",
        pergunta: "O que é a luz?",
        resposta: "A luz é uma forma de <strong>radiação eletromagnética</strong> capaz de sensibilizar nossos olhos e permitir a visão dos objetos."
    },
    {
        id: 2,
        categoria: "Óptica / Propriedades da Luz",
        pergunta: "Qual é a velocidade aproximada da luz no vácuo?",
        resposta: "A velocidade da luz no vácuo é aproximadamente <strong>3 × 10⁸ m/s</strong>, ou cerca de 300.000 km/s."
    },
    {
        id: 3,
        categoria: "Óptica / Propriedades da Luz",
        pergunta: "O que significa dizer que a luz se propaga em linha reta?",
        resposta: "Significa que, em um <strong>meio homogêneo e transparente</strong>, a luz se desloca seguindo trajetórias retilíneas."
    },
    {
        id: 4,
        categoria: "Óptica / Propriedades da Luz",
        pergunta: "O que são fontes primárias de luz?",
        resposta: "São corpos que <strong>produzem a própria luz</strong>, como o Sol, uma lâmpada acesa e uma chama."
    },
    {
        id: 5,
        categoria: "Óptica / Propriedades da Luz",
        pergunta: "O que são fontes secundárias de luz?",
        resposta: "São corpos que <strong>não produzem sua própria luz</strong>, mas podem ser vistos porque refletem a luz recebida de uma fonte."
    },
    {
        id: 6,
        categoria: "Óptica / Propriedades da Luz",
        pergunta: "Qual é a diferença entre um meio transparente, translúcido e opaco?",
        resposta: "O meio <strong>transparente</strong> permite a passagem da luz com pouca dispersão; o <strong>translúcido</strong> permite a passagem parcial da luz; e o <strong>opaco</strong> impede sua passagem."
    },
    {
        id: 7,
        categoria: "Óptica / Propriedades da Luz",
        pergunta: "O que é a decomposição da luz branca?",
        resposta: "É a separação da luz branca em diferentes cores, como acontece quando a luz atravessa um <strong>prisma</strong> ou forma um arco-íris."
    },

    // --- ÓPTICA / REFLEXÃO ---
    {
        id: 8,
        categoria: "Óptica / Reflexão",
        pergunta: "O que é a reflexão da luz?",
        resposta: "É o fenômeno em que a luz <strong>atinge uma superfície e retorna ao meio de origem</strong>, podendo mudar sua direção."
    },
    {
        id: 9,
        categoria: "Óptica / Reflexão",
        pergunta: "O que diz a Lei da Reflexão?",
        resposta: "A Lei da Reflexão estabelece que o <strong>ângulo de incidência é igual ao ângulo de reflexão</strong>, e os raios envolvidos estão no mesmo plano."
    },
    {
        id: 10,
        categoria: "Óptica / Reflexão",
        pergunta: "O que é reflexão regular?",
        resposta: "É a reflexão que ocorre em uma <strong>superfície lisa e polida</strong>, fazendo com que os raios refletidos mantenham uma direção organizada."
    },
    {
        id: 11,
        categoria: "Óptica / Reflexão",
        pergunta: "O que é reflexão difusa?",
        resposta: "É a reflexão que ocorre em <strong>superfícies irregulares</strong>, fazendo com que a luz seja refletida em várias direções."
    },
    {
        id: 12,
        categoria: "Óptica / Reflexão",
        pergunta: "Como a reflexão difusa nos ajuda no dia a dia?",
        resposta: "Ela espalha a luz em todas as direções, permitindo que consigamos <strong>enxergar os objetos ao nosso redor</strong> de qualquer ângulo."
    },
    {
        id: 13,
        categoria: "Óptica / Reflexão",
        pergunta: "O que acontece quando a luz é totalmente absorvida por um corpo?",
        resposta: "A energia luminosa é convertida em <strong>energia térmica</strong>, fazendo com que a temperatura do objeto aumente."
    },

    // --- ÓPTICA / ESPELHOS ---
    {
        id: 14,
        categoria: "Óptica / Espelhos",
        pergunta: "O que é um espelho plano?",
        resposta: "É uma superfície plana e refletora que produz uma imagem <strong>virtual, direita e de mesmo tamanho</strong> que o objeto."
    },
    {
        id: 15,
        categoria: "Óptica / Espelhos",
        pergunta: "Como é a imagem formada por um espelho plano?",
        resposta: "A imagem é <strong>virtual, direita, do mesmo tamanho do objeto e está à mesma distância atrás do espelho</strong> que o objeto está à frente."
    },
    {
        id: 16,
        categoria: "Óptica / Espelhos",
        pergunta: "O que acontece com a imagem quando uma pessoa se aproxima de um espelho plano?",
        resposta: "A imagem também parece se aproximar do espelho, mantendo sempre a <strong>mesma distância do espelho que o objeto</strong>."
    },
    {
        id: 17,
        categoria: "Óptica / Espelhos",
        pergunta: "O que é um espelho côncavo?",
        resposta: "É um espelho esférico cuja superfície refletora está voltada para o <strong>interior da esfera</strong>. Ele pode formar imagens maiores, menores, reais ou virtuais."
    },
    {
        id: 18,
        categoria: "Óptica / Espelhos",
        pergunta: "O que é um espelho convexo?",
        resposta: "É um espelho esférico cuja superfície refletora está voltada para o <strong>lado externo da esfera</strong>. Ele sempre forma uma imagem virtual, direita e menor."
    },
    {
        id: 19,
        categoria: "Óptica / Espelhos",
        pergunta: "Onde os espelhos convexos são utilizados no dia a dia?",
        resposta: "São utilizados, por exemplo, em <strong>retrovisores de veículos e sistemas de segurança</strong>, pois proporcionam um campo de visão maior."
    },

    // --- ÓPTICA / FENÔMENOS DA LUZ ---
    {
        id: 20,
        categoria: "Óptica / Fenômenos da Luz",
        pergunta: "O que é a refração da luz?",
        resposta: "É a mudança na <strong>velocidade e, geralmente, na direção da luz</strong> quando ela passa de um meio transparente para outro."
    },
    {
        id: 21,
        categoria: "Óptica / Fenômenos da Luz",
        pergunta: "Por que um lápis dentro de um copo com água parece estar quebrado?",
        resposta: "Isso acontece devido à <strong>refração da luz</strong> quando ela passa da água para o ar, alterando sua direção antes de chegar aos nossos olhos."
    },
    {
        id: 22,
        categoria: "Óptica / Fenômenos da Luz",
        pergunta: "O que é a dispersão da luz?",
        resposta: "É o fenômeno em que a luz branca é <strong>separada em diferentes cores</strong> devido às diferentes velocidades de propagação de cada cor no meio."
    },
    {
        id: 23,
        categoria: "Óptica / Fenômenos da Luz",
        pergunta: "Como se forma um arco-íris?",
        resposta: "O arco-íris ocorre principalmente devido à <strong>refração, reflexão interna e dispersão da luz solar</strong> nas gotas de água na atmosfera."
    },
    {
        id: 24,
        categoria: "Óptica / Fenômenos da Luz",
        pergunta: "O que é a difração da luz?",
        resposta: "É o fenômeno em que a luz pode <strong>contornar obstáculos ou se espalhar ao passar por pequenas aberturas</strong> de tamanho microscópico."
    },
    {
        id: 25,
        categoria: "Óptica / Fenômenos da Luz",
        pergunta: "O que é a interferência da luz?",
        resposta: "É o fenômeno resultante da <strong>superposição de duas ou mais ondas luminosas</strong>, gerando franjas claras ou escuras."
    },
    {
        id: 26,
        categoria: "Óptica / Fenômenos da Luz",
        pergunta: "O que é a polarização da luz?",
        resposta: "É o processo de filtrar a onda luminosa para que ela passe a vibrar em apenas uma <strong>única direção ou plano espacial</strong>."
    },

    // --- ÓPTICA / LENTES ---
    {
        id: 27,
        categoria: "Óptica / Lentes",
        pergunta: "O que é uma lente convergente?",
        resposta: "É uma lente que faz os raios de luz paralelos ao eixo principal <strong>convergirem para uma região chamada foco real</strong>."
    },
    {
        id: 28,
        categoria: "Óptica / Lentes",
        pergunta: "O que é uma lente divergente?",
        resposta: "É uma lente que faz os raios de luz paralelos <strong>se afastarem uns dos outros</strong> a partir de um ponto chamado foco virtual."
    },
    {
        id: 29,
        categoria: "Óptica / Lentes",
        pergunta: "Qual é a principal diferença entre lentes convergentes e divergentes?",
        resposta: "A lente <strong>convergente aproxima os raios de luz</strong>, enquanto a lente <strong>divergente afasta os raios</strong>."
    },
    {
        id: 30,
        categoria: "Óptica / Lentes",
        pergunta: "O que é o foco de uma lente?",
        resposta: "É o ponto geométrico onde os raios convergem ou de onde parecem divergir após <strong>atravessarem o corpo transparente da lente</strong>."
    },
    {
        id: 31,
        categoria: "Óptica / Lentes",
        pergunta: "Para que servem as lentes corretivas dos óculos?",
        resposta: "Elas modificam a trajetória da luz para que a imagem seja focada <strong>corretamente sobre a região anatômica da retina</strong>."
    },

    // --- ÓPTICA / CORPO HUMANO ---
    {
        id: 32,
        categoria: "Óptica / Corpo Humano",
        pergunta: "Qual é a função principal do olho humano na visão?",
        resposta: "O olho recebe a luz dos objetos e a direciona para a <strong>retina</strong>, onde células especializadas transformam os raios em impulsos elétricos nervosos."
    },
    {
        id: 33,
        categoria: "Óptica / Corpo Humano",
        pergunta: "O que causa a Miopia e como corrigi-la?",
        resposta: "A miopia faz a imagem focar antes da retina devido ao olho longo. Ela dificulta a visão de longe e é corrigida com lentes divergentes."
    },
    {
        id: 34,
        categoria: "Óptica / Corpo Humano",
        pergunta: "O que causa a Hipermetropia e como corrigi-la?",
        resposta: "A hipermetropia faz a imagem focar atrás da retina devido ao olho curto. Ela dificulta a visão de perto e é corrigida com lentes convergentes."
    },
    {
        id: 35,
        categoria: "Óptica / Corpo Humano",
        pergunta: "O que é a Presbiopia ou 'vista cansada'?",
        resposta: "É a perda de elasticidade do cristalino decorrente da idade. Dificulta o foco de objetos próximos e é corrigida com lentes convergentes."        
    }
];
let db;
let flashcards = [];
let indiceAtual = 0;

// Seletores das estruturas do Card
const card = document.getElementById("flashcard");
const cardInterno = document.getElementById("card-interno");

// Seletores de texto internos do Card (Adaptados ao novo formato)
const tituloFrente = document.getElementById("titulo-frente"); // Exibe a categoria na frente
const textoFrente = document.getElementById("texto-frente");   // Exibe a pergunta na frente
const tituloVerso = document.getElementById("titulo-verso");   // Exibe a categoria no verso
const imgVerso = document.getElementById("img-verso");         // Mantido para manter o modelo visual

// Seletor para injetar a resposta formatada com HTML
const textoVerso = document.createElement("p"); // Cria um parágrafo para a resposta dinamicamente
textoVerso.id = "texto-verso";
textoVerso.style.fontSize = "17px";
textoVerso.style.lineHeight = "1.6";
textoVerso.style.padding = "0 10px";

// Garante que o elemento da resposta seja inserido no verso do HTML após o carregamento
document.addEventListener("DOMContentLoaded", () => {
    const faceVerso = document.querySelector(".verso");
    if (faceVerso) faceVerso.appendChild(textoVerso);
});

// Seletores do sistema inferior de paginação
const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");
const indicadorPagina = document.getElementById("indicador-pagina");
function inicializarBanco() {
    // Atualizado para a versão 3 para limpar dados estruturais antigos da memória do navegador
    const request = indexedDB.open(dbName, 3);

    request.onupgradeneeded = function(event) {
        db = event.target.result;
        
        if (db.objectStoreNames.contains(storeName)) {
            db.deleteObjectStore(storeName);
        }
        
        const objectStore = db.createObjectStore(storeName, { keyPath: "id" });
        dadosIniciais.forEach(item => objectStore.add(item));
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        buscarCardsDoBanco();
    };

    request.onerror = function() {
        console.error("Executando em Modo de Segurança local.");
        flashcards = dadosIniciais;
        renderizarCard();
    };
}

function buscarCardsDoBanco() {
    const transaction = db.transaction([storeName], "readonly");
    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.getAll();

    request.onsuccess = function(event) {
        flashcards = event.target.result;
        
        if (flashcards.length === 0) {
            const transacaoEscrita = db.transaction([storeName], "readwrite");
            const tabelaEscrita = transacaoEscrita.objectStore(storeName);
            dadosIniciais.forEach(item => tabelaEscrita.add(item));
            flashcards = dadosIniciais;
        }
        
        renderizarCard();
    };
}
function renderizarCard() {
    if (flashcards.length === 0) return;

    // Recupera o bloco JSON correspondente ao novo formato
    const dadosDoCard = flashcards[indiceAtual];

    // Injeta as informações mapeadas nas novas propriedades recebidas do exemplo
    tituloFrente.textContent = dadosDoCard.categoria;
    textoFrente.textContent = dadosDoCard.pergunta;
    tituloVerso.textContent = dadosDoCard.categoria;
    
    // O uso de innerHTML permite renderizar as tags <strong> enviadas na resposta
    textoVerso.innerHTML = dadosDoCard.resposta; 
    
    // Oculta o bloco de imagem original se não houver arquivo configurado
    if (imgVerso) {
        imgVerso.style.display = "none";
        const containerImagem = document.querySelector(".imagem");
        if (containerImagem) containerImagem.style.display = "none";
    }

    // Atualiza a numeração do display inferior (ex: "1 / 35")
    indicadorPagina.textContent = `${indiceAtual + 1} / ${flashcards.length}`;

    // Desativa os controles se o usuário chegar nos limites da lista
    btnVoltar.disabled = (indiceAtual === 0);
    btnAvancar.disabled = (indiceAtual === flashcards.length - 1);
}
// Detecta o clique no Card para alternar a classe de rotação 3D
card.addEventListener("click", () => {
    cardInterno.classList.toggle("girado");
});

// Avança de página tratando o fluxo da animação
btnAvancar.addEventListener("click", (evento) => {
    evento.stopPropagation(); // Impede o card de girar de forma errada ao clicar no botão
    
    if (indiceAtual < flashcards.length - 1) {
        cardInterno.classList.remove("girado"); // Coloca o card de frente antes de passar
        
        setTimeout(() => {
            indiceAtual++;
            renderizarCard();
        }, 150); // Aguarda o início da rotação visual para mudar os textos
    }
});

// Retorna uma página tratando o fluxo da animação
btnVoltar.addEventListener("click", (evento) => {
    evento.stopPropagation(); // Impede o card de girar de forma errada ao clicar no botão
    
    if (indiceAtual > 0) {
        cardInterno.classList.remove("girado"); // Coloca o card de frente antes de passar
        
        setTimeout(() => {
            indiceAtual--;
            renderizarCard();
        }, 150);
    }
});

// Aciona o gatilho inicial ao carregar a página no navegador
inicializarBanco();