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
        // if statements
        if (event.target.id === 'deeppink') {
            body.style.backgroundColor = event.target.id;//bg-color of body will be changed on mouseclick to a button
          }
        if (event.target.id === 'white') {
            body.style.backgroundColor = event.target.id;
          }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id;
          }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id;
        }
    })
})
