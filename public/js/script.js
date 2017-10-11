// play audio
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode || e.path[1].getAttribute('data-key')}"]`); // selects audio element with specific data-key
  const key = document.querySelector(`.key[data-key="${e.keyCode || e.path[1].getAttribute('data-key')}"]`); // selects key with specific data-key
  if (!audio) return; // stop the function from running altogether
  audio.currentTime = 0; // rewind to the start
  audio.play(); // plays audio element
  key.classList.add('playing'); // adds 'playing' class to key when pressed
}

// remove css transition from key
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip it if its not a transform
  this.classList.remove('playing'); // remove 'playing' class from key
}
const keys = document.querySelectorAll('.key'); // select all elements with class of 'key'
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // call removeTransition when css transition ends

// event listeners to trigger audio
window.addEventListener('keydown', playSound); // play sound when key is pressed
window.addEventListener('click', playSound); // play sound when key is clicked
