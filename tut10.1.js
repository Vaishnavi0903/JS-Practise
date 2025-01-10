// Abstraction :

// 1) using class with methods 

class Car{
    constructor(model)
    {
        this.model = model;
    }

    startEngine()
    {
        console.log(`${this.model} engine started`);
    }

    drive()
    {
        this.startEngine();
        console.log(`${this.model} is driving`);
    }
}

const mycar = new Car("Tesla Model 3");
mycar.drive();



// 2) using abstract classes : 

class Shape{
    getArea()
    {
        throw new Error("getArea function must be implemented");
    }
}

class Circle extends Shape{
    constructor(radius)
    {
        super();
        this.radius = radius;
    }

    getArea()
    {
        return Math.PI*this.radius*this.radius;
    }
}

class Square extends Shape{
    constructor(length)
    {
        super();
        this.length = length;
    }

    getArea()
    {
        return this.length*this.length;
    }
}

const circle = new Circle(5);
console.log(circle.getArea());

const sq = new Square(5);
console.log(sq.getArea());


// 3. using factory functions

function createCar(model)
{
    function startEngine()
    {
        console.log(`${model} engine is started`);
    }

    return {
        drive(){
            startEngine();
            console.log(`${model} is driving`);
        }
    };
}

const car = createCar("Tesla Model 5");
car.drive();