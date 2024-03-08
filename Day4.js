// DATE AND TIME IN JS 
let date1 = new Date()
console.log(date1)//yy,mm,dd 

console.log(date1.toISOString())//yy,mm,dd
console.log(date1.toJSON())//yy,mm,dd

//to make the above date understand, we use various conversions
console.log(date1.toString())//mm,dd,yy -> string representation of date
console.log(date1.toDateString())//mm,dd,yy -> string representation of date excluding time specifications

console.log(date1.toLocaleDateString())//dd,mm,yy
console.log(date1.toLocaleString())//dd,mm,yy

console.log(typeof date1)

//to declare a specific date
let date2 = new Date(2000,0,26)//year,month,date
console.log(date2.toLocaleString()) //0 -> January

let date3 = new Date(2000,0,26,6,4)//year,month,date,hr,min
console.log(date3.toLocaleString())

let date4 = new Date("01-14-2023")//mm-dd-yy
console.log(date4.toLocaleString())

//milliseconfds counted from 1stJan1970 till the specified date
let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(date4.getTime())

//to convert milliseconds into seconds - w/o decimal
console.log(Math.floor(Date.now()/1000))

console.log(date1.getFullYear())
console.log(date1.getMonth()+1)
console.log(date1.getDate())
console.log(date1.getDay())//5 -> friday


// INTRO TO ARRAYS 
/*
store multiple items under a single variable name; can conatin any datatype; resizeable; not associative; zero-indexed, JS array copy operation create shallow copies(a copy whose properties share the same reference point), rather than deep copies(a copy whose properties do not share the same reference point)
*/
const arr1 = ["blue",5,null,true]
console.log(arr1)
arr1[4] = "hello"
console.log(arr1)
//it shows that js arrays are resizeable
console.log(arr1[0])
// console.log(arr1["zero"])//we can't write like this, hence these are not associative arrays


//declaring an array
const arr2 = ["a","b","c"]
const arr3 = new Array("a","b","c")

console.log(arr2)
console.log(arr3)

//array methods
const arr4 = [1,2,3,4]
arr4.push(10,5)//add value at last
console.log(arr4)
arr4.pop()//remove last value
console.log(arr4)
arr4.unshift(9)//add value at start
console.log(arr4)
arr4.shift()
console.log(arr4)

console.log(arr4.includes(9))
console.log(arr4.includes(10))
console.log(arr4.indexOf(9))//-1 -> not present
console.log(arr4.indexOf(10))

const arr5 = arr4.join()//array to string
console.log(arr5,typeof arr5)

//slice and splice
/*Difference b/w slice and splice:-
Slice do not manipulate original array but splice manipulate the original array
*/
console.log(arr4)
console.log("slice:",arr4.slice(1,3))
console.log("array after slice:",arr4)
console.log("splice:",arr4.splice(1,3))
console.log("array after splice",arr4)


//ARRAYS PART-02

const disneyCartoon = ["doaremon","mickeyMouse","cindrella"]
const hungamaCartoon = ["shinchan","ninjaHattori"]
// disneyCartoon.push(hungamaCartoon)
console.log(disneyCartoon)//-> an array can take array as its element
// console.log(disneyCartoon[3][1])//ninjaHattori

//concatenation using .concat
console.log(disneyCartoon.concat(hungamaCartoon))
//concatenation using spread operator
const allCartoons = [...disneyCartoon,...hungamaCartoon]
console.log(allCartoons)

const arrOfArr = [1,2,[3,[4,5]],[6,[7]],8,9,[10,11]]
const arr = arrOfArr.flat(Infinity)//returns a single array concatenating its elements,here Infinity is depth upto which concatenation is done
console.log(arr)
const arr_ = arrOfArr.flat(1)
console.log(arr_)

console.log(Array.isArray(arr))//to ask if it is array or not
console.log(Array.from("tripti"))//to convert into array

console.log(Array.from({name:"Tripti"}))
//return empty array because we have not specified that either keys or values should convert to array

let num1 = 100
let num2 = 200
let num3 = 300
console.log(Array.of(num1,num2,num3))//returns a new array from a set of elements