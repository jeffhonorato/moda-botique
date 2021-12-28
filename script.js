// Biblioteca GLIDER.JS
// SLIDER DO CABEÇALHO 
const slider = document.querySelector(".js-slider");

new Glider(slider, {
    slidesToShow: 1,
    slidesToScroll: 1, 
    dots: '.dots',
    draggable: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      scrollLock: true,
})

// PROMOÇÔES 
const miniaturaPequena = document.querySelectorAll(".js-lista-img img");
const miniaturaGrande = document.querySelectorAll(".js-lista-conteudo div");

miniaturaGrande[0].classList.add("ativo");

if(miniaturaPequena.length && miniaturaGrande.length) {
    const tabImagens = (index) => {
        miniaturaGrande.forEach((imagem) => {
            imagem.classList.remove("ativo");
        })
    
        miniaturaGrande[index].classList.add("ativo");
    }
    
    miniaturaPequena.forEach((item, index) => {
        item.addEventListener("click", () => {
            tabImagens(index)
        })
    })
}




// const marcas = document.querySelector("")