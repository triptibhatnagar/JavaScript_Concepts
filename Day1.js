// VARIABLES - containers used to store data
// "use strict" -> treat all JS code acc to newer JS standards
// var - can be changed, redeclared
var fullName = "Virat Kohli"
var fullName = "KL Rahul"
fullName = "Abhishek Malhan"
console.log(fullName) //Abhishek
var a;
console.log(a)

//ES-6 features -let,const
//let - can be changed, but not redeclared
let lang = "JavaScript"
lang = "Python"
console.log(lang)
let b;
console.log(b)

//const - can't be changed, redeclared or left undefined
const PI = 3.142;
console.log(PI)
// const e; //SyntaxError - Missing initialiser

console.table([fullName,a,lang,b,PI])

//Without any keyword
state = "Ambala" //It implies that JS is dynamically typed lang
console.log(state)


// DATATYPES - primitive and non-primitive
// Primitive - 7 types 
let district = "Haryana" //string
console.log(district,typeof(district))

let income = 12034 //number -> range -[(2^53)-1] to [(2^53)-1]
console.log(income,typeof(income))

let isLoggedIn = false //boolean
console.log(isLoggedIn,typeof(isLoggedIn))

let score = BigInt("122111") //bigint
console.log(score,typeof score)

let input;//undefined
console.log(input,typeof(input))

let output = null;//null -> empty
console.log(output,typeof(output))

let uniqueVal = Symbol('a');//symbol -> expressing uniqueness
console.log(uniqueVal,typeof uniqueVal)