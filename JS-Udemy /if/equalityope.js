const age = 18 
if (age === 18 ) console.log ('you just became an adult 😄(strict)')
if (age == 18 ) console.log ('you just became an adult 😄(loose)')

const favourite = Number(prompt (" what's your favorite number ? "))
console.log(favourite);
console.log(typeof favourite)

if (favourite == 23){
    console.log("Cool! 23 is an amzing! ")
}

// para funcionar ==== temos que converte o prompot para number pq oque 
//foi digitado é string e === só funciona se for o mesmo tipo
