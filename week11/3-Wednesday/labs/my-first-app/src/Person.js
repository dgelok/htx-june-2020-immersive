class Person {
    
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.count = 0
    }

    greeting() {
        console.log(`Hi, my name is ${this.firstName} ${this.lastName}. Count: ${this.count}`)
        this.count++;
    }
}


let dan = new Person('Dan', 'Gelok');
let michael = new Person('Michael', 'Cortez');

dan.greeting();
michael.greeting();
michael.greeting();
michael.greeting();
michael.greeting();
michael.greeting();
michael.greeting();
michael.greeting();
michael.greeting();
dan.greeting();
