// Add a click listener to the toggle #nav-toggle

toggle = document.querySelector(".navbar-burger");

if (toggle) {
  toggle.addEventListener("click", function() {
    document.querySelector("#navbar-items").classList.toggle("is-active");
    document.querySelector("#nav-menu-icon").classList.toggle("is-active");    
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