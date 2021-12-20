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

// SLIDER MARCAS

// const marcas = document.querySelector("")