// Introduction to OOP :
/**
 *  Object-Oriented Programming is a programming paradigm based on concept of class and objects.
 *  Other paradigms : Functional , procedural , logic-based , declarative , imperative
 * 
 *  Class : It is a template or blueprint for creating objects
 *  Object : It can contain data , represented by properties (variables/data members) and behaviour
 *           (methods/member functions)
 * 
 * Constructor : special function called immediately and automatically when object of a class
 *               is created.
 */


class Person{
    constructor(name , age)
    {
        this.name = name;
        this.age = age;
        console.log("This is a constructor");
    }

    greet = () => {
        console.log(`Hello , my name is ${this.name} and age is ${this.age}`);
    }
}

// Object creation
const obj = new Person("John" , 34);
const obj2 = new Person("Alice" , 20);
const obj3 = new Person("Jey" , 25);
obj.greet();
obj2.greet();
obj3.greet();


/**
 * Core concepts of Object Oriented Programming :
 * 
 * 1) Class : it is a template or blueprint for creation of objects.
 * 2) Objects : they are the instance of class
 * 3) Encapsulation : bundling of data and methods that operate on data .It involves restricting 
 *                    access to the class components(private , protected)
 * 4) Inheritance : class to inherit properties and methods from another class
 * 5) Polymorphism : one way of writing but different functionality
 * 6) Abstraction : hiding implementation details and showing only the required details.
 * 
 * 
 * Advantages of OOP :
 * 1) reusability 
 * 2) scalability
 * 3) modularity
 * 4) abstraction
 * 
 */

// let a  = 5;
// let b = 10;
// console.log(a+b);
// let c = "Hello";
// let d = "world";
// console.log(c+d);

// Features of class and objects :

//1 . Inheritance : 

class Animal {
    eat(){
        console.log("Animal is eating");
    }
}

class Dog extends Animal{
    bark(){
        console.log("Dog is barking");
    }
}

class Cat extends Animal{
    meows(){
        console.log("Cat meows");
    }
}

const catobj = new Cat();
catobj.eat();
catobj.meows();

const dogobj = new Dog();
dogobj.bark();
dogobj.eat();


//2 . static methods : methods defined with static keyword belong to class itself and not to any 
//                    instance

class Hello{
    static add(a,b){
        return a+b;
    }
}

console.log(Hello.add(4,5));
console.log(Hello.add(10,15));

