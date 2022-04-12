const PersonProto = {
    calcAge()  {
        console.log(2022 - this.birthYear)
     },
    Init(FirstName, birthYear){
    this.FirstName= FirstName;
    this.birthYear= birthYear;
    }
};

const Manu = Object.create(PersonProto);
console.log(Manu)
Manu.name = 'Manoela';
Manu.birthYear= 1999;
Manu.calcAge();

console.log(Manu.__proto__)

const Ana = Object.create(PersonProto);
Ana.Init('Ana ' , 1979 );
Ana.calcAge()