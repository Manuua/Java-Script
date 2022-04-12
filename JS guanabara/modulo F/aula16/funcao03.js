//colocando funçao dentro de variável básico


let v = function(x){
    return x*2 
}
console.log (v(5)) // o 5 vai para function no x 

// calculando fatorial
function fatorial (n){
    let fat = 1 
    for (let c = n ; c >1 ; c--){
        fat*= c

    } 
    return fat 
}
console.log(fatorial(5))

// 5! = 5x 4x 3 x2 x1 = 120 fatorial de 5