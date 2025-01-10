// Destructuring : 

// 1) array destructuring :

const fruits = ["apple" , "banana" , "orange"];

const [first , ...remainingfruits] = fruits;
console.log(first);
console.log(remainingfruits);

const [a,b,c="DefaultValue"] = ["x" , "Y" , "Z"]
console.log(a);
console.log(c);


// 2) Object destructuring

const user = {
    name : "Vaishnavi",
    age : 20,
    city : "Pune"
}

const {name : x , age: y , country = "India"} = user;
console.log(x);
console.log(y);
console.log(country);

const {city , ...restDetails} = user;
console.log(city);
console.log(restDetails);


// 3) Nested Destructuring : 

const colors = [["Red" , "Green"] , []];