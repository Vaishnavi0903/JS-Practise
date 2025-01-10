// constructor overloading and overriding

class Person{
    constructor(name , age)
    {
        if(arguments.length==1)
        {
            this.name = name;
            this.age = 30;
        }
        else if(arguments.length==2)
        {
            this.name = name;
            this.age = age;
        }
        else{
            this.name = 'Unknown';
            this.age = 30;
        }
    }

    getDetails(){
       console.log(`${this.name} and age is ${this.age}`);
    }
}

const obj = new Person("John");
const obj2 = new Person("Bob" , 20);
const obj3 = new Person();
obj.getDetails();
obj2.getDetails();
obj3.getDetails();


// constructor overiding

class Animal{
    constructor(name)
    {
        this.name = name;
    }

    speak()
    {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal{
    constructor(name , breed)
    {
        super(name);
        this.breed = breed;
    }

    speak()
    {
        console.log(`${this.name} is of ${this.breed} breed`);
    }
}

const dobj1 = new Dog('Rex' , 'GermanShepherd');
dobj1.speak();