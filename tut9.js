// access specifiers : private and public

class Person {

    #language      // private field
    #a;
    #b;

    constructor(name , age , language)
    {
        this.name = name;      // public field
        this.age = age;
        this.#language = language;
    }

    display()
    {
        console.log("Inside class : " + this.#language );
        console.log("Inside class : " + this.name );
    }

    sum(x,y)
    {
        this.#a=x;
        this.#b=y;

        const c = this.#a + this.#b;
        console.log(c);
    }
}

const p = new Person("John" , 30 , "JavaScript");
p.display();
console.log(p.language);
console.log(p.name);
p.sum(10,15);