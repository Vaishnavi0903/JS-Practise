// for...of loop : array , string , set , maps ..

const arr = [10,20,30];
for (const value of arr)
{
   console.log(value);
}

const text = "Hello";
for(const char of text)
{
    console.log(char);
}

// for...in

const obj = {
    name : "John",
    age : 25
}

for (const key in obj)
{
    console.log(key , " : " , obj[key]);
}

const val = [100 , 200 , 300];
for (const i in val)
{
    console.log(i , "=" , val[i]);
}

// for ...each loop
const num = [1,2,3,4,5];
num.forEach((n)=>{
    console.log(n);
})

num.forEach((n , index)=>{
    console.log(`${index} : ${n}`);
})

const numbers = [1,2,3];
numbers.forEach((num , index , arr)=>{
    arr[index] = num*2;
});
console.log(numbers);