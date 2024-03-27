// FILTER, MAP, REDUCE
const lang = ['js','python','cpp','c','java']

//assigning forEach to a variable
let elements = lang.forEach((item) => {
    console.log(item);
})

console.log(elements) //undefined 
// => i.e. nothing is returned

elements = lang.forEach((item) => {
    console.log(item);
    return item
})
console.log(elements) //undefined
// => forEach do not return any value


//FILTER - Returns the elements of an array that meet the condition specified in a callback function.

const nums = [1,2,3,4,5,6,7,8,9,10]
// elements = nums.filter((item) => item > 4) // [ 5, 6, 7, 8, 9, 10 ]

// elements = nums.filter((item) => (item > 4)) // [ 5, 6, 7, 8, 9, 10 ]

// elements = nums.filter((item) => {item > 4}) //[]

elements = nums.filter((item) =>
    {return item > 4}
) // [ 5, 6, 7, 8, 9, 10 ]
console.log(elements)

//same work by forEach as done by filter
const newArr = []
nums.forEach((item) => {
    if(item > 4) {
        newArr.push(item)
    }
})
console.log(newArr);

//MAP - Calls a defined callback function on each element of an array, and returns an array that contains the results.
let result_Map = nums.map((item) => ((item*10)+1))
console.log(result_Map);

//chaining
let op1 = nums
        .map((item) => (item*5))
        .map((item) => (item-10))
console.log(op1);

let op2 = nums
        .map((item) => (item*10))
        .map((item) => (item+1))
        .filter((item) => (item>=40))
console.log(op2);


//REDUCE - The reduce method calls the callbackfn function one time for each element in the array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
const numArr = [1,2,3,4,5]

//accumulator -> an empty variable
//initialVal -> first value in accumulator
//currVal -> each value of array

let initialVal = 0
let sumOfArrElem = numArr.reduce((acc, currVal) => {
    return acc+currVal
},initialVal)
console.log(`Sum of array elements : ${sumOfArrElem}`);


let total = numArr.reduce(function (acc,currVal) {
    console.log(`Accumulator : ${acc} & Current Value : ${currVal}`);
    return acc+currVal
},0)
console.log(`Sum of array elements : ${total}`);


let prodOfArrElem = numArr.reduce((acc,currVal) => {
    return acc*currVal
},1)
console.log(`Product of array elements : ${prodOfArrElem}`);

const outfits = [
    {
        color : "red",
        price : 1999
    },
    {
        color : "yellow",
        price : 2999
    },
    {
        color : "green",
        price : 3999
    },
    {
        color : "blue",
        price : 4999
    }
]

let priceToPay = outfits.reduce((acc,currVal) => {//currVal refers to each object here
    return acc+currVal.price
},0)
console.log(`Total price : ${priceToPay}`);