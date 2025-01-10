// Regular Expressions

/*
const regex = /pattern/flags

const regex = new RegExp("pattern" , "flags");


Flags :

g - global - match all occurrences
i - case-insensitive - makes pattern case-insensitive
m - multiline - allows ^ and $ to match start and end of lines
s - dot-all  - allows . to match newline characters
u - unicode - enable full unicode matching
y - sticky - it matches from the last index position in a string

*/

const str = "Hey , Hello world"
             0123456
const regex = /hello/i;
console.log(str.match(regex));
console.log(str.replace(regex , "Hi"));
console.log(str.search(regex));

const str1 = "apple, banana, cherry";
const r = /, /;
console.log(str1.split(r));

//["apple" , "banana" , "cherry"]


const regex1 = /hi/ ;
console.log(regex1.test("how are you?"));
console.log(regex1.exec("hi how are you?"));

// Matching Digits in a string

const regex2 = /\d+/;     
// "\d is used to match any digit"
// "+" is used for one or more occurences
const str2 = "123 apples";
console.log(str2.match(regex2));
console.log("ab34cd789".match(regex2));

const regex3 = /\d+/g;
const str3 = "ab34cd789".match(regex3);
console.log(str3);

const regex4 = /\d+/;
console.log("abc def".match(regex4));


// Matching Non-Digits in a String

const regex5 = /\D+/;
console.log("123 apples".match(regex5));
const regex6 = /\D+/g;
console.log("123 apples 456 bananas".match(regex6));
console.log("123455677".match(regex6));


// Matching whitespaces 

const regex7 = /\s+/g;
console.log("hello world !!".match(regex7));


// Matching start and end of a string

const regexStart = /^h/i; 
console.log("Hey , hello world".match(regexStart));

const regexEnd = /D$/i;
console.log("hello world".match(regexEnd));


// matching repeated characters

const regex8 = /a{2,4}/;
console.log("caaaaaandy".match(regex8));

// escape sequences

const regex9 = /\./g;
console.log("a.b.c".match(regex9));

// validating an email
// .com / .in / .org  .gov.in  
const regex10 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-z]{2,}$/;
console.log("test09@gmail.com".match(regex10));

// + -> one or more
// * -> zero or more
// ? -> zero or one
// {n} -> exactly n times
// {n,} -> atleast n times
// {n,m} -> between n and m times