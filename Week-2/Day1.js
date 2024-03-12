//NESTED SCOPE AND HOISTING

//scope in function inside function
function func1() {
    const user = "Tripti"

    function func2() {
        const greet = "Hello"
        console.log(`${greet} ${user}`)
    }
    console.log(user)
    // console.log(greet) // error -> user is not defined

    func2()
}

func1()

//scope in if-else
if (true) {
    const color = "black"

    if(color == "black") {
        const msg = "Hello"
        console.log(`${msg}, User's Favourite color: ${color}`)
    }
    console.log(color)
    // console.log(msg) // error -> msg is not defined
}

// console.log(color) // error -> color is not defined

console.log(add1(10)) //no error here
//this is the concept of hoisting -> the built-in behavior of the language through which declarations of functions and variables are moved to the top of their scope – all before code execution.This allows us to use functions and variables before they are declared.
//function declaration
function add1(num) {
    return num+1
}
// console.log(add1(10))

// console.log(add2(10)) //ReferenceError: Cannot access 'add2' before initialization
//function expression
let add2 = function(num) {
    return num+2
}
// console.log(add2(10))