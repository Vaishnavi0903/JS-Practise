// Callbacks : function passed as an argument to another function, which is then executed after the
//              completion of that function

function greet (name , callback)
{
    console.log("Hello " , name);
    callback();
}

function sayGoodBye()
{
    console.log("GoodBye!");
}

greet("John" , sayGoodBye);


function fetchData(callback)
{
       console.log("Fetching data....");
       
       setTimeout(()=>{

        console.log("Data fetched successfully....");
        callback();

       } , 2000);
}

function processData(callback)
{
      console.log("Processing Data...");

      setTimeout(()=>{

        console.log("Data processed successfully....");
        callback();

       } , 2000);
}

function saveData(callback)
{
    setTimeout(()=>{
        console.log("Data saved");
        callback();
    } , 1000)
}

// Callback Hell

fetchData(()=>{
    processData(()=>{
        saveData(()=>{
            console.log("All tasks completed")
        })
    })
})

// Why are we using the callbacks ??
/**
 * Handle asynchronous code
 * flexibility
 * reusability
 */


