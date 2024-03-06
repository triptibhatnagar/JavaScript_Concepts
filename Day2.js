// DATATYPE CONVERSION 
// -> to number 

console.log("To Number Conversions :-")

let str1 = "27"
console.log(str1,typeof str1)
let str1ToNum = Number(str1)
console.log(str1ToNum, typeof str1ToNum)
str2 = "27xyz"
let str2ToNum = Number(str2)
console.log(str2ToNum, typeof str2ToNum)
let str1ToBool = Boolean(str1)
console.log(str1ToBool, typeof str1ToBool)

val1 = null
numVal1 = Number(val1)
console.log(numVal1, typeof numVal1)

val2 = undefined
numVal2 = Number(val2)
console.log(numVal2, typeof numVal2)

//using + operator
console.log(+true, typeof(+true))
console.log(+false, typeof(+false))
console.log(+" ", typeof(+" "))
console.log(+"abc", typeof(+"abc"))


//to boolean
console.log("\nTo Boolean Conversions :-")
let score1 = 271613
console.log(score1,typeof score1)
let score1ToBool = Boolean(score1)
console.log(score1ToBool,typeof score1ToBool)

let score2 = 0
let score2ToBool = Boolean(score2)
console.log(score2ToBool,typeof score2ToBool)

let score3 = -1
let score3ToBool = Boolean(score3)
console.log(score3ToBool,typeof score3ToBool)

let str3 = "hello"
let str3ToBool = Boolean(str3) 
console.log(str3ToBool,typeof str3ToBool)

let str4 = ""
let str4ToBool = Boolean(str4) 
console.log(str4ToBool,typeof str4ToBool)

let str5 = " "
let str5ToBool = Boolean(str5) 
console.log(str5ToBool,typeof str5ToBool)


//to string
console.log("\nTo String Conversions :-")
let num1 = 88
console.log(num1,typeof num1)
num1ToStr = String(num1)
console.log(num1ToStr,typeof num1ToStr)

let boolVal = true
boolToStr = String(boolVal)
console.log(boolToStr, typeof boolToStr)

console.log(3+"1") //31
console.log(3+3+"1") //61
console.log("3"+3+1)  //331

x = "b"+"a"+ +"a"+"a"
console.log(x.toLowerCase())