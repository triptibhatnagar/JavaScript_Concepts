// select all buttons
let allBtns = document.querySelectorAll('.button')
// select the body
const body = document.querySelector('body')

// allBtns is a nodeList, so we apply forEach to access each button
allBtns.forEach((btn) => {
    console.log(btn);
    // event listener added for 'click' event and a callback function is passed to execute some work on mouseclick
    btn.addEventListener('click', (event) => {
        console.log(event);
        console.log(event.target);// tells about who occured the event

        switch(event.target.id) {
          case 'deeppink' : 
          body.style.backgroundColor = event.target.id;
          break;
          case 'white' : 
          body.style.backgroundColor = event.target.id;
          break;
          case 'yellow' : 
          body.style.backgroundColor = event.target.id;
          break;
          case 'blue' : 
          body.style.backgroundColor = event.target.id;
          break;
        }
    })
})
