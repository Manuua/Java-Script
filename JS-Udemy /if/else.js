const age = 15 
const isOldEnough = age >= 18 

if(isOldEnough) {
    console.log(`Sarah can start drive licence  🚗`)
} else {
    const yearsleft = 18 - age
    console.log(`Sarah is too young. Wait another ${yearsleft} years 🥲`)
}

const birthyears = 1999

let century;

if (birthyears <= 2000){
     century = 20 
} else {
     century = 21 
}
console.log(century)

let temperature = 39
let hightemperature = temperature >= 37.5 
let mediumtemperature = temperature < 37.5 && temperature >=37 

if(hightemperature){ // faz 1 condiçao 
    console.log('febre alta ')
} else if (mediumtemperature) { // 2 condicao 
    console.log(`febre moderada`)
} else { // 3 condicao
    console.log(`saudável`)
}