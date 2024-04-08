//Way-1
// setInterval(() => {
//     console.log('Hello Ji')
//     console.log(Date.now());
// },2000)

//Way-2
// const printDate = function() {
//     console.log('Hello Ji')
//     console.log(Date.now());
// }
// setInterval(printDate,2000)

//more parameters can be passed
const printStr = function(str) {
    console.log(str, Date.now());
}
// setInterval(printStr, 1000, 'learnJs')

//HOW TO STOP IT
//clearInterval()

// const intervalId = setInterval(printStr, 1000, 'learnJs')
// clearInterval(intervalId)

//START , STOP
let intervalId;
document.querySelector('#start').addEventListener('click',function() {
    intervalId = setInterval(printStr, 1000, 'learnJs')
})
document.querySelector('#stop').addEventListener('click',function() {
    clearInterval(intervalId)
})