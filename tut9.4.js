// static variables and methods 

class Counter{
    static count = 0;

    static increment(){
        this.count++;
        console.log(this.count);
    }

    static reset()
    {
        this.count = 0;
        console.log("Counter is reset");
    }
}

Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.reset();
Counter.increment();