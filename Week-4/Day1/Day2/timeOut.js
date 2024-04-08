// setTimeout() a method as well as a call on API too
// setTimeOut() -> sets a timer which executes a function or specified piece of code once the timer expires, execute one time

// Way-1
// setTimeout(()=>{
//     console.log('Hi')
// },2000)

// Way-2
const sayHi = function() {
    console.log('Hi')
}
setTimeout(sayHi, 3000)

const changeHeading = function () {
    document.querySelector('h1').innerHTML = 'Welcome Techies'
}
// setTimeout(changeHeading,2000)

//HOW TO STOP IT?
// clearTimeout() -> it stops setTimeout, it needs a reference of timeout to stop it 

const changeMe = setTimeout(changeHeading,2000)
// clearTimeout(changeMe)

//Let's do it on an event
document.querySelector('#stop'),addEventListener('click',() => {
    clearTimeout(changeMe)
    console.log("STOPPED !!")
})