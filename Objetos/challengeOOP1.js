///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car.
A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// Constructor Function 
class Car {
    constructor(speed) {
        this.speed = speed
    }
}


const BMW = new Car (120);
console.log(BMW)

const Mercedes = new Car (95);
console.log(Mercedes)

//accelerate method
Car.prototype.accelerate = function(){
    console.log(this.speed  + 10 )
}

BMW.accelerate()
Mercedes.accelerate()

//'brake' method

Car.prototype.brake = function(){
    console.log(this.speed - 5 )
}

BMW.brake()
Mercedes.brake()

//Create 2 car objects

Car.prototype.accelerate = 10
console.log(BMW.accelerate, Mercedes.accelerate)
console.log(Car.hasOwnProperty('accelerate'))

Car.prototype.break = 5
console.log(BMW.break, Mercedes.break)
console.log(Car.hasOwnProperty('break'))