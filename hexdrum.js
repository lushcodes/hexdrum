//REMOVES PLAYING CLASS
function removeTransition(e) {
  console.log(e.propertyName);
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
  e.target.parentElement.classList.remove("changeColor");
}

// PLAYS SOUND
function playSound(e) {
  console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  key.parentElement.classList.add("changeColor");
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

/////////////////////////////////////////////////////////////////////

function playClicked(e) {
  console.log(this);
  const audio = document.querySelector("audio");
  this.firstElementChild.classList.add("playing");
  this.classList.add("changeColor");
  audio.currentTime = 0;
  audio.play();
}

const clicky = Array.from(document.querySelectorAll("audio"));
clicky.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);

keys.forEach((key) => key.parentElement.addEventListener("click", playClicked));
