// Add a click listener to the toggle #nav-toggle

toggle = document.querySelector("#nav-toggle");

if (toggle) {
  toggle.addEventListener("click", function() {
    // document.querySelector("#nav-list").classList.toggle("hidden");
    document.querySelector("#nav-list").classList.toggle("hidden");
    document.querySelector("#nav-list").classList.toggle("fixed");
    document.querySelector("#nav-list").classList.toggle("top-0");
    document.querySelector("#nav-list").classList.toggle("left-0");
    document.querySelector("#nav-list").classList.toggle("h-screen");
    document.querySelector("#nav-list").classList.toggle("w-full");
    document.querySelector("#nav-list").classList.toggle("p-8");
    document.querySelector("#nav-list").classList.toggle("text-white");
    document.querySelector("#nav-list").classList.toggle("gap-y-4");
    // document.querySelector("#nav-list").classList.toggle("text-center");
    // document.querySelector("#nav-list").classList.toggle("text-white");
    document.querySelector("#nav-list").classList.toggle("transition-top");
    document.querySelector("#nav-list").classList.toggle("duration-400");
    document.querySelector("#nav-list").classList.toggle("flex");
    document.querySelector("#nav-list").classList.toggle("flex-col");
    document.querySelector("#nav-list").classList.toggle("z-10");
    document.querySelector("#nav-list").classList.toggle("bg-black");
    document.querySelector("#nav-list").classList.toggle("bg-opacity-75");
    document.querySelector("#nav-list").classList.toggle("backdrop-blur");

    document.querySelector("#nav-menu-icon").classList.toggle("hidden");
    document.querySelector("#nav-close-icon").classList.toggle("hidden");
    document.querySelector("#nav-close-icon").classList.toggle("text-white");
    
    document.querySelector("#nav-toggle").classList.toggle("bg-black");
    document.querySelector("#nav-toggle").classList.toggle("z-10");
    document.querySelector("#nav-toggle").classList.toggle("text-white");  
    document.querySelector("#nav-toggle").classList.toggle("text-black");    
  });
}

const navLanguage = document.getElementById('nav-language');
if(navLanguage) {
const navLanguageText = document.getElementById('nav-langauge-text');
const navLanguageIcon = document.getElementById('nav-language-icon');
const navLanguageArrow = document.getElementById('nav-langauge-icon-down');
const navLanguageList = document.getElementById('nav-language-list');
const navLanguageItems = document.querySelectorAll('.nav-language-item');
const navLanguageItemText = document.querySelectorAll('.nav-language-item span');

navLanguage.addEventListener('click', () => {
  navLanguageList.classList.toggle('top-14');
  navLanguageList.classList.toggle('flex');
  navLanguageList.classList.toggle('hidden');
  navLanguageArrow.classList.toggle('rotate-180');

});
navLanguageItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    navLanguageText.textContent = navLanguageItemText[index].textContent;
    navLanguageList.classList.remove('hidden');
    navLanguageArrow.classList.remove('rotate');
  });
});
}

let audioEl = document.getElementById("help-audio");

let playAudioEl = document.getElementById("play-audio");

let playAudioIcon = document.getElementById("play-audio-icon");

playAudioEl.addEventListener("click", function() {
  if (playAudioIcon.classList.contains("ri-play-line")) {
    playAudioIcon.classList.remove("ri-play-line");
    playAudioIcon.classList.add("ri-pause-line");
    audioEl.play();
  } else {
    playAudioIcon.classList.remove("ri-pause-line");
    playAudioIcon.classList.add("ri-play-line");
    audioEl.pause();
  }
});

audioEl.addEventListener("ended", function() {
  playAudioIcon.classList.remove("ri-pause-line");
  playAudioIcon.classList.add("ri-play-line");
});