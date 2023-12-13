/* Slide, Slide Show, Animation */

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

let currentSlideIndex = 0;
let slideInterval = 3000; // 3 seconds

function showSlide(index) {
  slides.forEach(
    (slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
}

showSlide(currentSlideIndex);

prev.addEventListener('click', () => {
  currentSlideIndex = currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
  showSlide(currentSlideIndex);
});

next.addEventListener(
  'click', () => {
    currentSlideIndex = currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1;
    showSlide(currentSlideIndex);
  });

setInterval(() => {
  next.click();
}, slideInterval);