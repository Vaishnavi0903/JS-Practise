// Scope : refers to the accessbility of variable , functions and objects in specific part of
//         program

// 1) Global scope : 

let globalVar = "I am global";

function display(){
    console.log("Inside function " , globalVar);
}

display();
console.log("Outside function ", globalVar);


// 2) Function Scope

function displayMessage()
{
    let message = "Hello , I am a Message";
    console.log("Inside function ", message);
}

displayMessage();
//console.log("Outside function " , message);


// 3) Block scope 


// Case I : let and const
{
    let blockVar = "I am a block variable";
    console.log("Inside block " , blockVar);
}

//console.log("Outside block " , blockVar);


// Case II : var
{
    var x = "I am x variable";
    console.log("Inside block " , x);
}

console.log("Outside block " , x);


// 4) Lexical Scope
// If i have outer and inner function, then inner function can access variables of outer 
// but not vice versa

function outer()
{
    let outerVar = "I am outer";

    function inner()
    {
        let innerVar = " i AM INNER VARIable";
        console.log(outerVar);
    }

    
    inner();
   // console.log(innerVar);
}

outer();

