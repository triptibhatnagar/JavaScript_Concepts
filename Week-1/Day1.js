// VARIABLES - containers used to store data
// "use strict" -> // treat all JS code acc to newer JS standards
// var - can be reassigned & redeclared & left undefined, global scope
var fullName = "Virat Kohli"
var fullName = "KL Rahul"
fullName = "Abhishek Malhan"
console.log(fullName) //Abhishek Malhan
var a;
console.log(a)

//ES-6 features - let,const
//let - can be reassigned & left undefined, but not redeclared, block scope
let lang = "JavaScript"
lang = "Python"
console.log(lang)
let b;
console.log(b)

//const - can't be changed, redeclared or left undefined, block scope
{const PI = 3.142;
console.log(PI)
console.log(fullName)}

const PI = 314*0.01;
console.log(PI)
// const e; //SyntaxError - Missing initialiser

console.table([fullName,a,lang,b,PI])

//Without any keyword
state = "Ambala" //It implies that JS is dynamically typed lang
console.log(state)


// DATATYPES - refers to the type of value a variable
// primitive and non-primitive
// Primitive - 7 types
let district = "Haryana" //string
console.log(district,typeof(district))

let income = 12034 //number -> range -[(2^53)-1] to [(2^53)-1]
console.log(income,typeof(income))

let isLoggedIn = false //boolean
console.log(isLoggedIn,typeof(isLoggedIn))

let score = BigInt("122111") //bigint - used when integer values are larger than the range supported by the 'number' data type
console.log(score,typeof score)

let input;//undefined
console.log(input,typeof(input))

let output = null;//null -> empty
console.log(output,typeof(output))

/*
differnce b/w null and undefined :-
undefined means a variable has been declared but has not yet been assigned a value
null is an assignment value, meaning that a variable has been declared and given the value of null
*/

let uniqueVal = Symbol('a');//symbol -> used to make a variable unique
console.log(uniqueVal,typeof uniqueVal)