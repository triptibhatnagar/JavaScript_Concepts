// CONTROL FLOW/ LOGIC FLOW

//if statement is executed, when the condition is true
//Basic syntax :-
/*
if (condition) {
    
}
if (true) {
    console.log("tripti")
}
*/

//example
const score = 1000
if (score > 100) {
    const powerup = "Jump"
    console.log(`User powerup : ${powerup}`);
}
//console.log(powerup) //ReferenceError: powerup is not defined because const has block scope

//Short hand notation
const balance = 200
//for single statement
if(balance < 500) console.log("Balance is less than 500");
//for multiple statements
if(balance > 100) console.log(`Balance : ${balance}`),console.log("Balance is more than 100")
//but this type of code written in a single line is not readable


//Mutliple conditions check - else if
if(balance < 1000) {
    console.log(`${balance} is less than 1000`);
}else if(balance <700) {
    console.log(`${balance} is less than 700`);
}else if(balance <400) {
    console.log(`${balance} is less than 400`);
}else if(balance <0){
    console.log(`${balance} is there`);
}else {
    console.log("No balance");
}

//Using logical operators in conditions
const userLoggedIn = true
const debitCard = true
const logInViaGoogle = false
const logInViaEmail = true

if((userLoggedIn && debitCard)&&(logInViaGoogle || logInViaEmail)) {
    console.log("User allowed to purchase course");
}else {
    console.log("User not allowed to purchase course");
}

//Switch
const month = 9
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    default:
        console.log("Default Case matched");
        break;
}

//We can also take string values as key in switch case, generally number values are taken.

/*
Falsy values - assumed to be false
Examples: false, 0, -0, BigInt 0n, "", null, undefined, NaN
Truthy values - assumed to be true
Examples: "0", 'false', " ", [], {}, function() {} etc..
*/

//Checking for empty array
let myArr = []
if(myArr.length == 0) {
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}

//Checking for empty object
const myObj = {}
if(Object.keys(myObj).length === 0) {
    console.log("Object is empty");
}

// console.log(Object.keys(myObj)); //access keys


console.log(false == 0); //true
console.log(false == ''); //true
console.log(0 == ""); //true

//Nullish Coalescing Operator(??)
let num
num = 5 ?? 10
console.log(num); 

num = null ?? 15
console.log(num);

num = undefined ?? 23
console.log(num);

//Ternary Operator - condition ? true : false
const price = 100

price < 100 ? console.log("Purchase item") : console.log("Don't purchase item");



// FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log(`Number : ${i}`);
}

for (let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log(`Your lucky number is : ${i}`);
    }
}

//break and continue in for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
    if(i == 4) 
        continue;//skip one iteration
    if(i == 7)
        break;//breaks entire loop
}


//WHILE LOOP
let i = 0;
while(i<=10) {
    console.log(`Even Number: ${i}`);
    i = i+2;
}

//while loop on array
let arr = ["a","b","c"]
let j = 0
while(j < arr.length) {
    console.log(arr[j]);
    j++;
}

//DO WHILE LOOP - execute at least 1 time even if the condition is false
let points = 4500
do {
    console.log(`Your score is : ${points}`);
}while(points > 10000);