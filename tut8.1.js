// Class-Based Inheritance

class Animal {
    constructor(name)
    {
        this.name = name;
    }

    eat(){
        console.log(`${this.name} eats food`);
    }
}


class Dog extends Animal {
    bark()
    {
        console.log(`${this.name} barks`)
    }
}

const myDog = new Dog("Puppy");
myDog.eat();
myDog.bark();



// Multiple inheritance 

const flying = {
    fly(){
        console.log(`${this.name} is flying`);
    }
}

const swimming = {
    swim(){
        console.log(`${this.name} is swimming`);
    }
}

class Animal1{
    constructor(name)
    {
        this.name = name;
    }
}

class Duck extends Animal1{
    constructor(name)
    {
        super(name);
        Object.assign(this , flying , swimming)
    }
}

const dobj = new Duck("Daffy");
dobj.fly();
const dobj2 = new Duck("Duckling");
dobj2.fly();