function tabuada(){
  let num = document.getElementById("num")
  let tab = document.getElementById("select")

  // convertendo oque usuário digitou para número
  if ( num.value.length ==0 ) // Conseguimos pegar o número apenas se a váriavel estiver cheia s for = 0 não dá
  {window.alert("Por favor , digite um número!")
  
  } else {
    let n = Number(num.value)
    let c = 1 
    tab.innerHTML = "" // colocamos em branco para ele "limpar antes de outra tabuada"
    // usamos while para treinar mas seria melhor for
    while (c <= 10){
      let item = document.createElement("option") //adicionando option sem ser pelo html
      item.text = `${n} x ${c} = ${n*c}`
      item.value= `tab ${c}`// faz sentido para outras linguagens Ex PHP
      tab.appendChild(item)
      c++
    }
  }
}