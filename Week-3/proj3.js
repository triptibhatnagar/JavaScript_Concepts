const time = document.querySelector('#time')

/*The setInterval() method calls a function at specified intervals (in milliseconds).
The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.4
*/

setInterval(function () {
  let date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);