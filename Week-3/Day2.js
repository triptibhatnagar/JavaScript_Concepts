//querySelectorAll
const allLi = document.querySelectorAll('li')
console.log(allLi) //output in the form of NodeList
/*
forEach found in NodeList prototype, so is it an array ???
NodeList has forEach but not map, as array contains them both which implies that nodelist is not an array.
But it can be converted to array.
*/

// allLi.style.backgroundColor = "red" //Error
allLi[2].style.backgroundColor = "red"
allLi[2].style.color = "yellow"
allLi[2].style.display = 'inline'
allLi[2].style.padding = '1px'

const allH1 = document.querySelectorAll('h1')
console.log(allH1) //output in the form of NodeList
allH1[0].style.color = "aqua"
allH1[0].style.backgroundColor = 'darkviolet'

allLi.forEach((item)=>{
    item.style.backgroundColor = 'lightgreen'
    item.style.display = 'inline'
    item.style.margin = '5px'
    item.style.color = 'black'
})

let allLiByClass = document.getElementsByClassName("list-item")
console.log(allLiByClass) //output in the form of HTMLCollection

//converting HTMLCollection into array
let HTMLColToArr = Array.from(allLiByClass)
HTMLColToArr.forEach((item) => {
    item.style.color = 'blue'
})