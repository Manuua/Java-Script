// manipulando Array
let techs = ["html", "css" , "js"]
// adicionando um item ao útimo elemento 
techs.push("nodejs")
// adicionar no começo 
techs.unshift("sql")
// remover do fim 
techs.pop()
// remover do começo 
techs.shift()
// pegar somente alguns elementos do array 
console.log(techs.slice(1,2))
// como remover elemento aray
techs.splice(1 , 1 )
// encontrar posição de um elemento array 
let index = techs.indexOf('css')


console.log(techs)
console.log(index)