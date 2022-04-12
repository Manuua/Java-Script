//function scope

let subject = `creat video` 


//subject nesse escopo tem um sig diferente do let 
// apenas se eu nao colocar nada aq createthink()  ele pega do let
function createthink(subject){
    subject = `study`
    return subject
}

console.log(subject)
console.log(createthink (subject))// return da função
console.log(subject)