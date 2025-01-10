console.log("Hello world");

// variables are containers for storing data values.

var a = 1;       // var variables re-declared and re-initialize
var a = 'Z';
console.log(a);

let ch = 'A';
ch = 10;
console.log(ch);

const val = 5;

function display(){
    var a1 = 15;
    let b = 10;
    const c = 20;
    console.log("inisde function" + a);
    console.log("inisde function" + b);
    console.log("inisde function" + c);
}

display();
//console.log("outside function" + a1);

{
    const val1 = 5;
    console.log("val1 is : " +val1);
}
//console.log("val1 is : " +val1);

// global scope
// function scope
// block scope


// var -  global , block 
// let - global
// const - global

// Varibales data types and values :

// 1. Primitive  : numbers , string , boolean , undefined , null , symbol 

let age = 25 ;
console.log(age);
console.log(typeof(age));
let name = "John" ;
console.log(name);
let isStudent = true;
console.log(isStudent);
let val2 ; 
console.log(val2);
let ch1 = null ;
console.log(ch1);
let s = Symbol('@');
console.log(s);
console.log(typeof s);

// 2. Non primitive : objects , arrays , functions
let subjects = ["AIML" , "DSA"];
console.log(subjects);
let person = {
    name: "John",
    age : 30
}
console.log(person);


// Conditional statements : specific conditions that will help execute a specific block of code

/*
if(condition)
{
    // code
}
*/

age = 25;
if (age<=18)
{
    console.log("You are an child");
}
else{
    console.log("you are an adult");
}

// ladder if-else if-else

let val3 = 6;
if(val3>5)
{
    console.log(val3 + " is greater than 5");
}
else if(val3>0)
{
        console.log(val3 + " is positive");
}
else{
    console.log(val3 + "  is zero");
}


// switch statements : 

let day = 4;
switch(day)
{
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
    default :
         console.log("Wrong input ");

}


// Loops in JS : for , while , do-while 

let arr = ['A' , 'B' , 'C' , 'D' , 'E'];

// arr   => A B C D E
// index => 0 1 2 3 4

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// arr[0] = 'Z';
// console.log(arr[0]);
// console.log(arr);

/*
for(initialize ; condition ; increment/decrement)
{
         // code
}
*/

for (let i = 0 ; i<5 ; i++)        // i-> 0 , 1 , 2 ,3 , 4
{
    console.log(arr[i]);
}

/**
 * initialize
 * while (condition)
 * {
 *      //code
 *      increement/decrement
 * }
 */

let arr1 = ["apple" , "mango" , "banana"];

let j = 2 ; 
while(j>=0)            //  j = 2 , 1 , 0 , -1
{
    console.log(arr1[j]);
    j--;
}


/**
 * 
 * initialization
 * do{
 * 
 *       //code
 *       increment/decrement
 * 
 * }while(condition)
 */
j = 6;
do{
    console.log(j);
    j++;

}while(j<3)   // j= 0,1,2