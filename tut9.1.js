// Polymorphism : one thing having multiple forms

// method overloading and method overiding

// 1. method overloading : within same class
//                       : function having same name but different no. of parameters

class Claculator{
    add(a,b)
    {
        if(arguments.length==1)
        {
            return a+a;
        }
        else if(arguments.length==2)
        {
            return a+b;
        }

    }
    
}

const calc = new Claculator();
console.log(calc.add(2));
console.log(calc.add(5,10));

// JS is dynamically typed language

//2. Method overriding : it takes place between parent class and subclass
//                     : function having same name but different functionality

class Animal {
    speak(){
        console.log("Animal speaks");
    }
}

class Dog extends Animal{
    speak(){
       // super.speak();
       console.log("Dog barks"); 
    }
}

class Cat extends Animal{
    speak(){
        // super.speak();
        console.log("Cat meows"); 
     }
}
class Lion extends Animal{
    speak(){
        // super.speak();
        console.log("Lion roars"); 
     }
}

const dog = new Dog();
dog.speak();
const cat = new Cat();
cat.speak();
const lion = new Lion();
lion.speak();