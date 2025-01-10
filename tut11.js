// 3) Nested Destructuring : 

const colors = [["Red" , "Yellow"] , ["Blue" , "Green"]];
const [[p1 , p2] , [p3,p4]] = colors;
console.log(p1);
console.log(p3);


const employee = {
    id : 101,
    details : {
        name : "John",
        department : "IT"
    },
}

const {details : {name , department}} = employee;

console.log(name);
console.log(department);


// Function Pramater destructuring

function greet({name , age})
{
    console.log(`Hello my name is ${name} and age is ${age}`);
}

const person = {name : "John" , age : 25};
greet(person);

function sum([a,b])
{
    return a+b;
}

const numbers = [1,2];
console.log(sum(numbers));


// Combined destructuring

const data = {
    items : ["Pen" , "Book" , "Eraser"],
    user : {id : 1 , name : "Alice"},
};

const {
    items : [firstItem , , thirdItem],
    user : {name : userName},
} = data;

console.log(firstItem);
console.log(thirdItem);
console.log(userName);