//use classes to reuse code
//it is like a blueprint

//individual instance of care define the make model vin number
//Car
//make
//model
//vin number
//getDescription return string desc (reusable code)

//classes are like blueprints
class Person {
    //called implicitly
    constructor(name = 'Anonymous', age = 0) {
        //inside class methods, this refers to class instance
        this.name = name;
        this.age = age;
    }
    //function
    //code that is unique and reusable
    getGreeting() {
        //return 'Hi. I am ' + this.name + '!';
        //inside { } we can type JS expression, reference, etc.
        return `Hi. I am ${ this.name }!`
    }
    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old.`
    }
} 

class Student extends Person {
    //override the constructor of person
    constructor(name, age, major) {
        //call the aprent class constructor using super
        super(name, age);
        //no need to set defaults for name and age and no need to configure their properties like this.name=name 
        this.major = major;
    }
    hasMajor() {
        //!! flips the value, ! will give false while !! will give true
        return !!this.major;
    }
    getDescription() {
        //next line will return the result from Person
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

//create instances of class and define what each Person looks like
const me = new Traveler('Aman Nigam', 27, 'Boston');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());