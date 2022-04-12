// Estrutura de repetição 
//for
for (let i = 0 ; i <10; i++ ){
    console.log(i)
}

//break paara a execucao do loop 
// nesse ex ele para no 50

for (let n= 100; n >0 ; n-- ){
    if (n === 50){
        break;
    }
    console.log(n)
}

//continue pula algo do codigo  nesse ex ele pula o 5 
for (let m= 10 ; m >0; m -- ){
    if(m === 5){
        continue
    }
    console.log(m)
}