// Error Handling :

console.log("Hello")

// try and catch blocks : to handle runtime errors 
/*
try : code that is expected to throw an error;
catch : code that will handle the error;
*/

function divide(a,b)
{
    try{
    if(b==0)
    {
        throw new Error("Divide by zero is not possible");
    }
    const result = a/b;
    console.log(result);
}
catch(error)
{
    console.log(error);
}
finally{
    console.log('Finally block is executed');
}
}

divide(10,0);


