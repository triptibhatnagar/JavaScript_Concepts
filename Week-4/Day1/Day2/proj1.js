//generate a random color
const randomColor = function() {
    //hex value range
    const hex = "0123456789ABCDEF"
    // color - #FFFFFF 6places
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]//to get random values from 0 to 16
    }
    return color;
};

let intervalId;

document.querySelector('#start').addEventListener('click', function () {
    if(!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()    
    }
})
document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(intervalId)
    intervalId = null; //flush out intervalId
})