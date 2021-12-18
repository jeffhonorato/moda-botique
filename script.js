// Função Para mudar as Imagens no Modal

function mudarImagem(imgPequena) {
    let imagemGrande = document.querySelector(".container__masc__img")
    imagemGrande.getAttribute("src") = imgPequena.getAttribute("src");
}

addEventListener("click", mudarImagem);