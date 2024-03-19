// IIFE - Immedaitely Invoked Function Expression
/* IIFE is the function that runs as soon as it is defined.

They are used to avoid global scope pollution.
(More global scope variables can lead to global scope pollution as the naming conflicts arises)
*/

//named IIFE
(function hlo() {
    console.log("Hello")
})();

//Syntax of IIFE 
/*
()()
first parenthesis is for function definition
second parenthesis is for function execution
*/

//unnamed IIFE
// arrow functions in IIFE
(() => {
    console.log(`Database connected`)
})();

//IIFE starts executing but don't know where to stop, so there's a need of ; after a IIFE to execute another function as well, otherwise error arises.


//passing parameters
((webName) => {
    console.log(`Thanks for visting ${webName}`)
})("github.com/triptibhatnagar")