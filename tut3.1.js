/**
 * Synchronous :
 * tasks are executed one at a time.
 * the next task cannot start until the current one finishes.
 * 
 * Asynchronous nature :
 * tasks can run in background while JS continues executing other code.
 * it does not block main thread.
 * 
 */

// setTimeout and setTimeInterval

// setTimeout : executes a function once after a specific delay.

console.log("Start");

setTimeout(()=>{
    console.log("Executed after 2 seconds");
} , 2000);

console.log("End");

// setInterval : executes a function repeatedly at specified intervals.

let count = 0;
const interValid = setInterval(()=>{
count++;
console.log("Count is " + count);
if(count==5)
{
    clearInterval(interValid);
    console.log("Interval cleared");
}
} , 2000);