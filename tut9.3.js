// Getter  (get keyword) and setter (set keyword)

class Person{
    constructor(name , age)
    {
        this._name = name;
        this._age = age;
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    set name(value){
        if(value.length<3)
        {
            console.log("Name must be of atleast 3 characters")
        }else{
            this._name=value;
        }
    }

    set age(value)
    {
        if(value<0)
        {
            console.log("Age cannot be negative");
        }else{
            this._age = value;
        }
    }
}

const person = new Person("Alice" , 20);
console.log(person.name);
console.log(person.age);
person.age = 25;
console.log(person.name);
console.log(person.age);
