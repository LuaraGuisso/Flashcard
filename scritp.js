function mudarCor(card) {

    if (card.classList.contains("clicado")) {
        card.classList.remove("clicado");
    } else {
        card.classList.add("clicado");
    }

}
