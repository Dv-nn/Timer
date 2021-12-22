const counterEl = document.querySelector('#counter');
const btnStart = document.querySelector('#start');
const btnPause = document.querySelector('#pause');
const btnReset = document.querySelector('#reset');

//counter
let counter = 0;
let timerID;

//Start
btnStart.onclick = function () {
   timerID = setInterval(function () {
      counter++;
      counterEl.innerText = counter;
   }, 1000);
}

//Pause
btnPause.onclick = function () {
   clearInterval(timerID);
}

//Reset
btnReset.onclick = function () {
   counter = 0;
   counterEl.innerText = counter;
   clearInterval(timerID);
}
