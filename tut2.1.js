// Functions ??
/**
 * Functions are reusable blocks of code written to perform specific functionality.
 */

// 1) Function declaration :
function display1(name)
{
    return `Hello ${name}`;
}
console.log(display1("Vaishnavi"));


// 2) Function expression 
const value = function(name)
{
    return `Hello ${name}`;
}
console.log(value("John"));


// 3) Arrow function 
const greet = (name) => `Hello ${name}`;
console.log(greet("Alice"));


// 4) Anonymous functions :
setTimeout(function(){
    console.log("This is a anonymous function");
} , 2000);


// IIFE (Immediately Invoked Function Expression)
(
    function(){
        console.log("IIFE is executed");
    }
)();


// Default parameters :
function greet1(name = "XYZ")
{
    console.log("Name is " , name);
}
greet1("ABC");
greet1();


// ...rest parameters
function sum(...num)
{
    return num.reduce((a,b)=> a+b , 0);
}
console.log(sum(1,2,3,4,5,6));
console.log(sum(1,2,3));