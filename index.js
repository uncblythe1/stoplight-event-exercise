document.addEventListener('DOMContentLoaded', function () {
//get the stop button(id avail) and set to const var
//get the slow button and set to const var
//get the go button and set to const var
//identify attribute to be toggled
//find a method to toggle light color
//apply a click listener to each button
//use listener to apply toggle method when clicked

const stopButton = document.getElementById('stopButton');
const slowButton = document.getElementById('slowButton');
const goButton = document.getElementById('goButton');

const stopColor = document.getElementById('stopLight');
const slowColor = document.getElementById('slowLight');
const goColor = document.getElementById('goLight');

//stopColor.style.backgroundColor = 'red';
// slowColor.style.backgroundColor = 'yellow';
// goColor.style.backgroundColor = 'green';


stopButton.addEventListener('click', (ev) => {
  stopColor.classList.toggle('stop');
})

slowButton.addEventListener('click', (ev) => {
  slowColor.classList.toggle('slow');
})

goButton.addEventListener('click', (ev) => {
  goColor.classList.toggle('go');
})

const allButtons = document.getElementsByClassName('button');


  // (function() {
//   'use strict';

// })();

})
