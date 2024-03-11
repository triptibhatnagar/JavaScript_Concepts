// TYPE CONVERSIONS 
// Q1 - Convert "123" into a number 
console.log(+"123",typeof +"123")

// Q-2 - Convert 5 into a string 
let num5ToStr = String(5)
console.log(num5ToStr, typeof num5ToStr)

// Q3 - Convert a boolean into a number
console.log(+true,typeof +true)
console.log(+false,typeof +false)

// STRING MANIPULATION 
// Q1 - Concatenate 2 strings "hello" and "world" together into a single string 
console.log("hello"+" world")

// Q2 - Find the length of string "Javascript"
let word = "Javascript"
console.log(word.length)

// Q3 - Extract a string "world" from "hello world"
let str = "hello world"
console.log(str.substring(6))

// DATA TYPES 
// Q1 - Determine the datatype of the variable x = 10
let x = 10
console.log(typeof x)

// Q2 - Determine the datatype of the variable y = "hello"
let y = "hello"
console.log(typeof y)

// TYPE CHECKING 
// Q1 - Check if the variable a ="123" is a string 
let a = "123"
if(typeof a === "string") {
    console.log(`a = \"${a}\" is a string`)
}

// Q2 - Check if the variable b = 10 is a number
let b = 10
if(typeof b === "number") {
    console.log(`b = ${b} is a number`)
}

// Q3 - Check if the variable c = true is a boolean
c = true
if(typeof c === "boolean") {
    console.log(`c = ${c} is a boolean`)
}

// TYPE COERCION - Type coercion refers to the automatic conversion of values from one data type to another
// Q1 - Explain what happens when you add a string "5" and a number 5
console.log("5"+5)

// Q2 - Explain what happens when you compare a string "10" and a number 10 using == operator.
console.log("10" == 10) //true

//Difference b/w == and === operator
/*
== only checks for the value
=== checks for datatype first and then the value, it is a stricter version of comparing
*/