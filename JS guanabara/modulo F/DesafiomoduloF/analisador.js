'use strict';
const array = []
const soma = 0
const media = 0

function adicionar(){
const num = document.getElementById("number")  
const n = Number(num.value)
const select = document.getElementById("select")
const resposta = document.getElementById("resposta")
resposta.innerHTML=''

    if (num.value.length == 0 || n < 1 || n >100 || array.indexOf(n) != -1 ){
        window.alert("valor inválido ou já encontrado na lista")
    } else {
        array.push(n) // push adiciona ao array oque foi digitado 
        var salvo = document.createElement(`option`)
        select.appendChild(salvo)
        salvo.innerHTML = `o valor ${n} foi adicionado`
    }
    num.value = ''
    num.focus() // envia o novo elemento para elemento ativo
}
 function finalizar(){
     if (array.length == 0 ){
     window.alert("Adicione um valor antes de finalizar")    
     } else {
         resizeBy.innerHTML = ''
         array.sort ((a,b) => a-b) // sort mostra array em ordem crescente
         var r = document.createElement('p')
         resposta.appendChild(r) 
         
         r.innerHTML = `Ao todos temos ${array.length} numeros cadastrados.
         <p> O maior valor informado foi ${array[(array.length)-1]}. 
         <p> O menor valor informado foi ${array[0]} 
         <p> Todos os valores digitados são : ${array}.
         `
     }
 }