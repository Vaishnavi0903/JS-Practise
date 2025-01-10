// Prototypes and Prototypal inheritsnce

/**
 * JS objects have special property called prototype that is either null or references to another
 * objects
 */

const a = {
    language : "JavaScript",
    run : () => {
        alert("self executing run")
    }
}

const p = {
    run : () => {
        alert("run")
    }
}

p.__proto__ = {
    name : "Alice"
}

a.__proto__ = p;      // object a is referencing to p but not vice versa3
a.run();
console.log(a.name);

console.log(p.language)