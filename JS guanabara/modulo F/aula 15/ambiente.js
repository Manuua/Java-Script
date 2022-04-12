let num = [5 , 8, 9 ,3 ]
num.push(2)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)
console.log (`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posiçao ${pos}`)

// ele mostra na posiçao 3 pq adicionei com push 2 e depois ordenei usando sort e reordenou entao mudou a ordem