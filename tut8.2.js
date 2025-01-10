// Constructors and types

class Animal{}

const dog = new Animal();
console.log(dog);

// 2. parameterized constructor

class Animal2{
    constructor(name , age)
    {
        this.name = name ;
        this.age = age;
    }
}

const dog2 = new Animal2("Dog" , 12);
console.log(dog2);

// 3. Non-Class constructor (Function constructor)

function Animal3(name , age)
{
    this.name= name;
    this.age = age;
}

const cat = new Animal3("Kitty" , 2)
console.log(cat);

// 4. Copy Constructor

class Animal4{
    constructor(name , age)
    {
        this.name = name;
        this.age = age;
    }

    static copy(obj)
    {
        return new Animal4(obj.name , obj.age);
    }
}

const originalobj = new Animal4("Leo" , 5);
const copyobj = Animal4.copy(originalobj);
console.log(copyobj);


// 5. Singleton Constructor 

class Singleton{
    constructor(){
        if(Singleton.instance)
        {
            return Singleton.instance;
        }

        Singleton.instance=this;
    }
}

const obj1 = new Singleton();
const obj2 = new Singleton();

console.log(obj1 === obj2);


// 6.Inherited Constructor

class Animal5 {
    constructor(name)
    {
        this.name = name;
    }
}

class Dog3 extends Animal5{
    constructor(name , breed)
    {
        super(name);
        this.breed = breed;
    }
}

const dogobj = new Dog3("SWeety" , 13)
console.log(dogobj);