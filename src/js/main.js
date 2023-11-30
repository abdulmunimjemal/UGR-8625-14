// Add a click listener to the toggle #nav-toggle

toggle = document.querySelector("#nav-toggle");

if (toggle) {
  toggle.addEventListener("click", function() {
    document.querySelector("#nav-list").classList.toggle("nav__list--show");
    document.querySelector("#nav-menu-icon").classList.toggle("hidden");
    document.querySelector("#nav-close-icon").classList.toggle("hidden");
    document.querySelector("#nav-toggle").classList.toggle("nav__toggle--close");
    
  });
}

const navLanguage = document.querySelector('.nav__language');
if(navLanguage) {
const navLanguageText = document.querySelector('.nav__language--text');
const navLanguageIcon = document.querySelector('.nav__language--icon');
const navLanguageArrow = document.querySelector('.nav__language--text i');
const navLanguageList = document.querySelector('.nav__language--list');
const navLanguageItems = document.querySelectorAll('.nav__language--item');
const navLanguageItemText = document.querySelectorAll('.nav__language--item span');
navLanguage.addEventListener('click', () => {
  navLanguageList.classList.toggle('nav__language--list--show');
  navLanguageArrow.classList.toggle('rotate');
});
navLanguageItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    navLanguageText.textContent = navLanguageItemText[index].textContent;
    navLanguageList.classList.remove('nav__language--list--show');
    navLanguageArrow.classList.remove('rotate');
  });
});
}

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