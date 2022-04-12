'use strict';

const Person = function (firstName , birthYear){
    this.firstName= firstName;
    this.birthYear = birthYear;

// never doo this 
    // this.calcAge = function(){
    //     console.log(2022 - this.birthYear)
    // }
}

const jonas = new Person('jonas' , 1991);
console.log(jonas)

// 1.New {} is created
// 2.function is called, this = {}
// 3.{} linked to prototype 
//4. Function automatically return {}

const matilda = new Person ('Matilda' , 2017);
const jack = new Person ('Jack', 1975)
console.log(matilda,jack)



console.log(jonas instanceof Person)

Person.hey = function(){
    console.log(`hey there 🙋‍♀️`)
    console.log(this)
};

Person.hey();

// prototypes
console.log(Person.prototype)

Person.prototype.calAge= function(){
    console.log(2022 - this.birthYear);
}

jonas.calAge();
matilda.calAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype)

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// adicionando uma propriedade em objetos 

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);


// has own property / propriedade criada no objeto primário 
// tem o Species porém foi adicionado depois com o prototype

console.log(jonas.hasOwnProperty('firstName')); // true pq tem no principal 
console.log(jonas.hasOwnProperty('species')); // false pq ñ tem 

console.log(jonas.__proto__)
//Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__)
console.log(jonas.__proto__.__proto__.__proto__)

console.dir(Person.prototype.constructor);

const arr = [3,6,4,9,2,6];
console.log(arr.__proto__)// vemos várias coisas do array porém ñ significa q usamos todos
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
    return [...new Set (this)];
}

console.log(arr.unique());

Person.hey();