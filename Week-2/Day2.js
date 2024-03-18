// ARROW FUNCTIONS
/*
a feature of ES6
THIS - refers the current context
*/

const user = {
    username : "ABC",
    price : 10,
    wlcmMsg : function() {
        console.log(`Hello ${this.username}, Welcome to the website`);
        console.log(this)
    }
}
user.wlcmMsg()
user.username = "XYZ"
user.wlcmMsg()

console.log(this)// an empty object inside node env
// console.log(this)// a window object inside browser env


//  THIS inside a function
function printThis() {
    console.log(this)
}
printThis()// many values are printed

const fxn2 = function printThis() {
    let a = "a"
    console.log(this.a)
}
fxn2()// undefined


//ARROW FUNCTION 
// () => {}

const fxn3 = () => {
    let a = "a"
    console.log(this.a) //undefined
    console.log(this); // {}
}
fxn3()

//Explicit Return
const addNum = (num1,num2) => {
    return num1+num2
}
console.log(addNum(2,3));

//Implicit Return
const addNums = (num1,num2) => (num1+num2)
console.log(addNums(2,4));

/*
if curly braces used after '=>' -> then must write return
if parethesis used after '=>' -> return is not written
*/

//Returning An Object in Function
const fxn4 = () => {username : "Tripti"}
console.log(fxn4()) //undefined

const fxn5 = () => ({username : "Tripti"})
console.log(fxn5()) //here the object will be returned