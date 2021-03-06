// play audio
function playSound(e) {
  var audio = document.querySelector(`audio[data-key="${e.keyCode || e.path[1].getAttribute('data-key')}"]`); // selects audio element with specific data-key
  var key = document.querySelector(`.key[data-key="${e.keyCode || e.path[1].getAttribute('data-key')}"]`); // selects key with specific data-key
  if (!audio) {
    return;
  } // stop the function from running altogether
  audio.currentTime = 0; // rewind to the start
  audio.play(); // plays audio element
  key.classList.add('playing'); // adds 'playing' class to key when pressed
}

// remove css transition from key
function removeTransition(e) {
  if (e.propertyName !== 'transform') {
    return;
  } // skip it if its not a transform
  this.classList.remove('playing'); // remove 'playing' class from key
}
var keys = document.querySelectorAll('.key'); // select all elements with class of 'key'
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // call removeTransition when css transition ends

// event listeners to trigger audio
window.addEventListener('keydown', playSound); // play sound when key is pressed
keys.forEach(key => key.addEventListener('click', playSound)); // bind click handler to each element
