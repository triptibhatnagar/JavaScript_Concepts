let allBtns = document.querySelectorAll('.button')
const body = document.querySelector('body')

allBtns.forEach((btn) => {
    console.log(btn);
    btn.addEventListener('click', (event) => {
        console.log(event);
        console.log(event.target);
        if (event.target.id === 'deeppink') {
            body.style.backgroundColor = event.target.id;
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
