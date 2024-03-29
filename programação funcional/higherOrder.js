// exemplo com .map() JS

const numbers = [2,4,8,16]
const square = n => n*n 

const squaredNumber = numbers.map(square)

console.log(squaredNumber)

// exemplo de um retorno de função 
//aplicar função parcialmente 

const pause = wait => fn => setTimeout (fn,wait)

pause(600) (() => console.log('waiting 600ms') )

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(()=> console.log('waiting 200ms'))
wait1000(() => console.log ('waiting 1s'))
