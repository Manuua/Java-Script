let nome = 'mayk'
let nomes = [ 'joao' , 'Paulo', 'Pedro']

for ( let char of nome ){ 
    console.log(char)
}

for ( let nome of nomes ){ 
    console.log(nome)
}

// for ... in

let person = {
    name: 'manu',
    age: 22, 
    weight: 46 
}

for (let property in person ){
    console.log(property)
    console.log(person[property])
}