// Arrays :
/**
 * Multiple values are stored in single variable. values are stored in contiguous memory locations
 * 
 * new keyword => dynamic memory allocation
 */

// declare a array :
const arr = ["apple" , "mango"];

const arr1 = new Array(1,2,3,4,5);
// arr1 is object of Array class

arr1.push(100); 
console.log(arr1);

arr.push("Orange");
console.log(arr);


arr1.pop();
console.log(arr1);

arr.pop();
console.log(arr);

arr1.unshift(100);
console.log(arr1);

arr1.shift();
console.log(arr1);

console.log(arr.indexOf("mango"));
console.log(arr.includes("banana"));

const result = arr1.find((num)=> num>3);
console.log(result);

console.log(arr1.findIndex((num)=> num>3));

let numbers = [22 , 35 ,1 , 67 , 8];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// Map , filter and reduce 

// map() : creating a new array by applying a callback function to each element of original array

const num2 = [1,2,3,4];
const square = num2.map(num => num*num);
console.log(square);

// filter() : creating a new array with elements that pass the specific condition
const evenNum = num2.filter(num => num%2 == 0);
console.log(evenNum);

// reduce() : reducing an array to a single value 
const sum = num2.reduce((a , num) => a+num , 0);
console.log(sum);

// a=0
// num = 1, a = a+1  => a=1
// num = 2, a = a+2  => a=3
// num = 3, a = a+3  => a=6
// num = 4, a = a+4  => a=10