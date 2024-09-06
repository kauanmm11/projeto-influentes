const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideWidth = slides[0].clientWidth;
const sliderWidth = document.querySelector('.slider').clientWidth;

function positionSlides() {
  slides.forEach((slide, index) => {
    const offset = (index - currentSlide) * slideWidth;
    slide.style.left = `${50 + offset}%`;
  });
}

// Função para mostrar o próximo slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  positionSlides();
}

// Chamar as funções para iniciar o slider
positionSlides();
setInterval(nextSlide, 3000);