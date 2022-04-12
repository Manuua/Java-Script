// class Expression 
//const PersonCl = class{}

    class PersonCl{
        constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear =birthYear;
    }


calcAge()  {
    console.log(2022 - this.birthYear)
 }
} 

const manoela = new PersonCl('Manoela', 1999 );
console.log(manoela);
manoela.calcAge();

console.log(manoela.__proto__ === PersonCl.prototype)

    PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`)
    };

manoela.greet();


// 1. Classes are NOT hoisted 
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode