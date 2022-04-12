function parimpa(n) {
    if (n%2 == 0) {
        return `Par!`
    }else{
        return `Ìmpar!`
    }
}
let resposta= parimpa(7) // esse número 4 vai para function lá em cima e veremos se é par ou impar
console.log(resposta)