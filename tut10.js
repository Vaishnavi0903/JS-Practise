// Encapsulation:

class Person{
    #name;

    constructor(name)
    {
        this.#name = name;
    }

    getName()
    {
        return this.#name;
    }

    setName(newName)
    {
        this.#name = newName;
    }
}

const person = new Person("Vaishnavi");
console.log(person.getName());
person.setName("Alice");
console.log(person.getName());