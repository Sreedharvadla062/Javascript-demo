class Animal {
    constructor(type) {
        this.type = type;
    }
    eat() {
        console.log(this.type + " is eating");
    }
}

class Dog extends Animal {
    constructor(name) {
        super("Dog"); // calls parent constructor
        this.name = name;
    }
    bark() {
        console.log(this.name + " says Woof!");
    }
}

let dog2 = new Dog("Rocky");
dog2.eat();  // Dog is eating
dog2.bark(); // Rocky says Woof!
