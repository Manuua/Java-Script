 // Data de inauguração 

 let datainauguracao = new Date("March 26, 2030 20:00:00 ").getTime();

 // função para atualizar o relógio
 var relogio = setInterval (function() {

 //data de hoje 

 let now = new Date().getTime();

 // dias para inauguração 

 let diferenca = datainauguracao - now ; 

 // calculo dos dias horas minutos e segundos 
 let days = Math.floor(diferenca / (1000 * 60 * 60 * 24));
 let hours = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 let minutes = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
 let seconds = Math.floor((diferenca % (1000 * 60)) / 1000);

 


// const cronometro = (`${days} ${hours} ${minutes} ${seconds}`)

document.getElementById("cronometro").innerHTML = (`${days} ${hours} ${minutes} ${seconds}`)

 
// quando terminar o cronometro 

if (diferenca < 0 ){
    clearInterval(relogio);

document.getElementById("cronometro").innerHTML = "ACABOU";
}
}, 1000);