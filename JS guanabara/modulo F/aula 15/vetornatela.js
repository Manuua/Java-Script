let valores = [11 , 8 ,5 ,3 ,9 ,2 ]

//console.log(valores)
// console.log (valores[3])
// for (let num = 0 ; num < valores.length ; num++){
//     console.log(`a posiçao ${num} tem valor ${valores[num]}`)
// }

// jeito mais simplificado

for (let num in valores){
    console.log(` a posiçao ${num} tem o valor ${valores[num]}`)
} 
 
