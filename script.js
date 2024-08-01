alert("¡El JavaScript está funcionando!");

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].style.marginLeft = '-100%';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.marginLeft = '0';
}

// Llama a nextSlide() para avanzar a la siguiente diapositiva
