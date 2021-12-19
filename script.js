// SLIDER DO CABEÇALHO 
// Biblioteca GLIDER.JS

const slider = document.querySelector(".js-slider");

new Glider(slider, {
    slidesToShow: 1,
    dots: '#dots',
    draggable: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
})
