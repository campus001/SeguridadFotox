
document.addEventListener("DOMContentLoaded", ()=>{
    const elementosCarousel = document.querySelectorAll(".carousel");
    M.carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: true,
        noWrap: false

    });
});
// const slides = document.querySelectorAll('.slide');
//let currentSlide = 0;

//function nextSlide() {
 // slides[currentSlide].style.marginLeft = '-100%';
  //currentSlide = (currentSlide + 1) % slides.length;
 // slides[currentSlide].style.marginLeft = '0';
//}Llama a nextSlide() para avanzar a la siguiente diapositiva
