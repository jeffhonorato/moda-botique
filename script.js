// SLIDER DO CABEÇALHO 
// Biblioteca GLIDER.JS

const slider = document.querySelector(".slider-glider");

new Glider(slider, {
    slidesToShow: 1,
    slidesToScroll: 1, 
    dots: '#dots',
    draggable: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
})
