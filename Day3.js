// COMPARISON OF DATATYPES

//Comparison Operators
console.log(2 == 7) //f
console.log(2 >= 7) //f
console.log(2 <= 7) //t
console.log(2 > 7)  //f
console.log(2 < 7)  //t
console.log(2 != 7) //t

//Datatypes - Primitive and Non-Primitive
/*
Primitive datatypes are call by value and non-primitive datatypes are call by reference.
Call By Value means when they are called, a copy of it is given, not their original memory refernce.
Call By Reference means when they are called, their original memory reference is directly given. 
*/


// SOME OTHER DATATYPES IN JS
//symbol , bigint
const id1 = Symbol('abc')
const id2 = Symbol('abc')
console.log(id1 == id2)

const bigNum = 123n
console.log(bigNum,typeof bigNum)

//Non - Primitive datatypes:-  1)Array 2)Objects 3)Functions

//array
const frontEnd = ["html","css","javascript"]
console.log(frontEnd, typeof frontEnd)

//object
const pen = {
    color : "blue",
    type : "ball",
    price : 20,
    rating : 4,
    brand : "renolds"
}
console.log(pen, typeof pen)

//function
function sayHello() {
    console.log("Hello Guest User")
}
sayHello()
console.log(sayHello,typeof sayHello)

// STACK AND HEAP MEMORY
// Primitive datatypes are stored in stack memory and non-primitve datatypes are stored in heap memory.
let msg1 = "hello"
let msg2 = msg1
console.log(msg2)
msg2 = "hi"
console.log(msg1, msg2)
//Here on changing msg2, msg1 is not changed, yet they were declared as equal initially.

let student1 = {
    name : "Rahul",
    age : 19,
    cgpa : 10
}

let student2 = student1
student2.cgpa = 9
console.log(student1, student2)
//Here on chaging student2.cgpa , student1.cgpa also changes, hence they are printed as same.


// STRING IN JS 
//string declaration
const cartoon = "doraemon"
const cartoon2 = new String("shinchan")
const episode = 500
console.log("The name of the cartoon is",cartoon,"and the number of episodes are",episode)

//concatenation
console.log(cartoon+episode)

//string interpolation
console.log(`The name of the cartoon is ${cartoon} and the number of episodes are ${episode}`)

console.log(cartoon2)
console.log(`The character at index 5 is ${cartoon2[5]}`)

//length property
console.log(`The length of ${cartoon2} is ${cartoon2.length}`)

//methods
console.log(cartoon.toUpperCase())
console.log(cartoon.charAt(4))
console.log(cartoon.indexOf('m'))
console.log(cartoon.substring(0,4))
console.log(cartoon.substring(-4,7))//negative values are traeted as 0 in substring
console.log(cartoon.slice(-4,7))

let cartoon3 = "           ben    10      "
console.log(cartoon3.trim())//remove initial and end whitespaces

const url = "https://google-tripti-27%09%05-bhatnagar"
console.log(url.replace('%05','abc'))
console.log(url.includes('Tripti'))
console.log(url.includes('tripti'))

const str = "Tripti Bhatnagar is a name"
console.log(str.split(" "))//string to array


// NUMBER AND MATHS IN JS
//number declaration
let profit = 400.987
let loss = new Number(100)
console.log(profit,typeof profit)//number
console.log(loss,typeof loss)//object

//methods
console.log(loss.toString())
console.log(loss.toString().length)
console.log(loss.toFixed(2))
console.log(profit.toPrecision(3))

let num = 1000000
console.log(num.toLocaleString())

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.EPSILON)

//maths
//maths libraries come under JS  by default
console.log(Math)
console.log(Math.abs(-1))//abs convert negative to positive

console.log(Math.round(4.6))
console.log(Math.round(4.1))

console.log(Math.ceil(4.3))
console.log(Math.floor(4.8))

console.log(Math.min(2,9,4.6,10.1,-3))
console.log(Math.max(2,9,4.6,10.1,-3))

console.log(Math.random())//return a different no. everytime executed, its value is b/w 0 to 1 
console.log(Math.random()*10)//but what if Math.random() gives 0.031
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10)+1))

const max = 20
const min = 10
console.log(Math.floor(Math.random()*(max-min+1))+min)// return any value from 10 to 20