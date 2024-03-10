// FUNCTIONS

function sayHi() {
    console.log("Hi")
}
sayHi//reference
sayHi()//execution


function getSum(a,b) {
    console.log(a+b)
}
getSum(1,2) //3
getSum(1,"2") //12
getSum(1,"a") //1a
getSum(1,null) //1
getSum() //NaN


//way1
function getProd1(num1,num2) {
    let result = num1*num2
    console.log(result)
}
let result = getProd1(2,4)
console.log(result)//undefined because console.log do not return any value 


//way2
function getProd2(num1,num2) {
    console.log(num1*num2)
}
getProd2(2,4)

//way3
function getProd(num1,num2) {
    let result = num1*num2
    return result
}
console.log(getProd(2,4))

//way4
function getProd(num1,num2) {
    return num1*num2
    console.log("Hello") //statements below return are never executed
}
console.log(getProd(2,4))


function printMsg(username) {
    return `${username} logged in`
}
console.log(printMsg("Tripti"))
console.log(printMsg())

//using conditional statements inside a function
function printMsg_(username) {
    if(username === undefined) {
        console.log("Please enter your username")
        return
    }
    return `${username} logged in`
}
console.log(printMsg_())

function printMsg__(username) {
    if(!username) {
        console.log("Please enter your username")
        return
    }
    return `${username} logged in`
}
console.log(printMsg__())

//to give a default value if the user enters no argument
function printMsg___(username = "GuestUser") {
    return `${username} logged in`
}
console.log(printMsg___())


// FUNCTIONS PART-2
function calcPrice(price) {
    return price
}
console.log(calcPrice(200))
console.log(calcPrice(200,300,500))//200

//What if there are unknown number of arguments
//-> we will use rest operator ...
function calcPrice_(...price) {
    return price
}
console.log(calcPrice_(200,300,500)) //[ 200, 300, 500 ] array form

function val(val1,val2,val3,...valn) {
    return valn
}
console.log(val(1,2,3,4,5,6,6,7))//[ 4, 5, 6, 6, 7 ]


//object passed in the function
const pen = {
    color : "blue",
    price : 10
}
function handleObj(objName) {
    return `The color of pen is ${objName.color} and its price is Rs.${objName.price}`
}
console.log(handleObj(pen))

//object directly passed as argument
console.log(handleObj(
    {
        color : "red",
        price : 20
    }
))


//array passed in the function
const arr = [9,8,7,6]

//to return array's second term
function handleArr(arrName) {
    return arrName[1]
}
console.log(handleArr(arr))

//array directly passed as argument
console.log(handleArr([11,12,13,14,15]))


// SCOPE
/*
var -> global scope variable
let -> block scope variable
const -> block scope variable

block scope variable means they are defined inside the block{} only and not outside of it.
global scope variable means they are defined globally inside the program i.e. inside and outside of the block.
*/

var a = 1
if(true) {
    var a = 2
    console.log("Inside block:",a)//2
}
console.log("Outside block:",a)//2

let b = -1
if(true) {
    let b = -2
    console.log("Inside block:",b)//-2
}
console.log("Outside block:",b)//-1