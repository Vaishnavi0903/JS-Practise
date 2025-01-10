// Promises : promise is an object that represents eventual completion of an asynchronous operation 
//            and its resulting value.

/**
 * States of promises :
 * 
 * 1) pending state : the initial state , neither fulfilled nor rejected.
 * 2) fulfilled state : operation is completed successfully and promise has a resulting value.
 * 3) rejected state : operation failed and the promise has reason of failure.
 */

const myPromise = new Promise((resolve , reject)=>{
    let success = true;
    if(success){
        resolve("Operation successful");
    }else{
        reject("Operation failed");
    }
});


myPromise.then(result=>{
    console.log(result);
}).catch(error => {
    console.error(error);
});



// example -2

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if(!response.ok)
    {
        throw new Error("Posts not found");
    }

    return response.json();
  })
  .then(data => console.log("Posts:" , data))
  .catch(error => console.error("Error: " , error));


// example - 3

new Promise((resolve , reject)=>{
    resolve(10);
})
  .then(result => result*2)
  .then(result => result+10)
  .then(result => console.log("Final answer :", result))
  .catch(error => console.log("Error is :" , error));


// example 4 

const delayedReject = new Promise((resolve , reject) => {
    setTimeout(()=> reject("Rejected after three seconds") , 3000);
})

delayedReject.then(result => console.log(result))
.catch(error => console.log(error));

// example 5

function performtask(time){
    return new Promise((resolve , reject) => {
        if(time<=3000)
        {
            setTimeout(()=> resolve("Task is completed successfully") , time);
        }
        else {
            setTimeout(()=> reject("Task is delayed more than three seconds") , time);
        }
    })
}

performtask(4000)
    .then(result => console.log("Result is : " , result))
    .catch(error => console.error("Error is : " , error))
    .finally(()=> console.log("This is a finally block"));


// example 6

function fetchData()
{
    return new Promise((res , rej) => {
        let flag = true;
        if(flag)
        {
            res("Data fetched successfully");
        }
        else{
            rej("Failed fetching the data");
        }
    })
}

fetchData()
    .then(result => console.log(result))
    .catch(err => console.log(err))
    .finally(()=> console.log("Task completed"));