// função impura 

// Exemplo 1 : está dependendo de dado externo que nao foi passado no paramentro 

function calculateCircumference(radius){
    return Math.PI * (radius * radius )
}

// função pura
// nao depende de dados externos
// exemplo 
const calculateCircumference = function (pi , radius) {
    return pi* (radius+ radius)
}

// com arrow function 
const calculateCircumference = (pi , radius) => 
pi * (radius +  radius )

const changePersonName = (person , nome) => 
{ person , nome } 