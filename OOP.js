let lineBreak = '\n'.repeat(4);


// classes are the template for creating objects
class studentDatabase{
    name(name) {
        this.name = name;
    }
    roll(roll) {
        this.roll = roll;
    }
};
// creating an object using a class
let s1 = new studentDatabase();
s1.name("Debargha Sanyal");
s1.roll(113);
// try to create another one with just name
let s2 = new studentDatabase();
s2.name("student");
// so, we can store details what we need in the object
// Hence classes works as a template to creat objetc

// js sets constructor upon creating a new object (the "new" keyword tries to find
// the constructor in that class and if it couldn't find that it will autometically
// generate one for that object (unlike java/c++))


class manufacture{
    constructor(type) {
        console.log("Creating new object"); 
        this.type = type;   // sports bike
    }
    name(name) {
        this.name = name;
    }
};
// when we declear a custom constructor in a class upon creating an object it gets executed
let Kawasaki = new manufacture("Sports bike");   // the constructor function has done its job
Kawasaki.name("Ninja H2R");
console.log(Kawasaki);
// inheritance in js
// The chaild class inherits the properties of a parent class using extends keyword
class travel extends manufacture{
    velocity(speed) {
        this.speed = speed;
    }
};
let BMW = new travel("BMW Sports bike");
BMW.name("BMW S 1000 RR");
BMW.velocity("300 km/h");
console.log(BMW);   // we can see the travel class inherits name and the constructor property from manufacture class
console.log(lineBreak);

// super keyword

// we use super keyword to inherit properties from parent class in our own manner
// if the parent class has a constructor(parameter, parameter) and the chield has
// a new constructor then we must declear a super() in the chield constructor else it will through an error
// we  can even pass parameters through super() from chield class to parent class

class parent{
    constructor(n, r) {
        console.log("parent entry");
        this.n = n;
        this.r = r;
        console.log("Parent exit");
    }
    designation(desi) {
        this.desi = desi;
    }
};
class chaild extends parent{
    constructor(n, r) {
        console.log("Chaild entry");
        super(n,r);
        console.log("chaild class");
        console.log("Chaild exit");
    }
};
let c = new chaild("chaild", 10);
c.designation = "1st";
console.log(c);

console.log(lineBreak);

