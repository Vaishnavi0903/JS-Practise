// Modules : reusable pieces of code that can be imported 
//           or exported between files

// import , exports , default exports


// named export : export multiple values by their name

export const add = (a,b) => a+b ;

export const subtract = (a,b) => a-b ;



// Packages : collection of modules bundled together to perform 
//            specific functionality

import os from 'os';

console.log('Platform : ' , os.platform());
console.log('Free Memory : ' , os.freemem());
console.log('CPU Info : ' , os.cpus());
