// outra meneira de clcular fatorial

function fatorial (n){
    if (n==1) {
    return 1 
} else{
    return n * fatorial (n-1)
}
}
  console.log(fatorial (5))
// 5! = 5x 4x 3 x2 x1 = 120 fatorial de 5
//5! = 5 x 4 ! outra forma de calcular fatorial  

//n! = n x (n-1)!