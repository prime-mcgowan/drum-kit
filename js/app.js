function playSound(e) {
  //uses an element (audio) & attribute selector [data-key = ${}] bc there isn't a class for it in the HTML
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   console.log(audio);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //   console.log(key);
  if (!audio) return; // stops the function from running if a non-represented key is pressed

  audio.currentTime = 0; // will rewind sound to the start so it can be clicked/played in quick succession

  audio.play();
  key.classList.add("playing"); //applies the playing styles to the keys
}

function removeTransition(e) {
  // console.log(e);
  if (e.propertyName !== "transform") return; // skip if it's not a transform
  // console.log(e.propertyName);
  // not sure what 'this' is equal to? = console.log(this);
  this.classList.remove("playing"); //this relates to key (bc it's attached the addEventListener)
}

const keys = document.querySelectorAll(".key");
// this loops over the keys and adds an event listener to each
// when the transition ends...the removeTransition function will run
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
