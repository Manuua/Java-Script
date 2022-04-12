document.getElementById("app").innerHTML = `
<h1>Hello!</h1>
<div>
 Esse é um exercíco pra te ajudar a virar crack em javascript ❤️
</div>
<br/>
<button id= "b1"> "Começar! </button>
<br/>
<br/>
Minha melhor característica é:
<select id="S1">
  <option value="">Selecione uma característica</option>
  <option value="Inteligente">Inteligente</option>
  <option value="Carinhosa">Carinhosa</option>
  <option value="Determinada">Determinada</option>
  <option value="Emponderada">Emponderada</option>
  <option value="Prestativa">Prestativa</option>
  <option value="Esperançosa">Esperançosa</option>
</select>
<br/>
<br/>

<div>
<input type="text" placeholder="Insira seu email" />
<input type="password" placeholder="Insira uma senha" />
<button id="b2" >Entrar</button>
</div>
`
function myclickevent(){
  console.log("Foi clicado")
}
const button = document.getElementById("b1")
console.log("Funcionou")
console.log(button)
button.addEventListener("mouseenter",myclickevent) 
button.addEventListener("click",myclickevent) 

const select = document.getElementById("S1")

function selecionar(event){
console.log(event)
}
select.addEventListener("change",selecionar) // sempre criar function antes de adicionar o evento 


