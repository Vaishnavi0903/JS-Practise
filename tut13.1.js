
// named import

//import { add as addition , subtract as subtraction } from './tut13.js';

// importing all the functions 

import * as Tutorial13 from './tut13.js';

// default import 

import greet from './tut13.2.js';

console.log(Tutorial13.add(2,3));
console.log(Tutorial13.subtract(10,5));

console.log(greet("John"));


// Dynamic Imports

async function loadModule(){
    const module = await import('./tut13.js');
    console.log(module.add(10,20));
}

loadModule();


// package.json :- npm init -y