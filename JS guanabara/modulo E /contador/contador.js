function contar(){
    let ini = document.getElementById("ini")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("passo")
    let res = document.getElementById("resposta")
     //if usuario digitar 0 ou deixar em branco
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('[ERRO] Faltam dados')
        res.innerHTML = "impossível contar"
    } else{
        res.innerHTML= "Contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ){
            window.alert(`Passo inválido ! considerando PASSO 1`)
            p =1 
        }
 
       if (i < f){
           // contagem crescente
            for( let c  = i; c <=f; c+=p )
            {
            res.innerHTML+= `${c} \u{1f449}`
            }
        } else {
            //Contagem regressiva
            for (let c = i ; c >= f ; c -= p )
            {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
       
    
}