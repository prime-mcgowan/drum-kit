function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stops the function from running if a non-represented key is pressed

  audio.currentTime = 0; // will rewind sound to the start so it can be clicked/played in quick succession

  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it it's not a transform
  // console.log(e.propertyName);
  this.classList.remove("playing"); //this relates to key (bc it's attached the addEventListener)
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
