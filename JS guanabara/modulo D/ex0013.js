var agora = new Date()
var diaSem = agora.getDay()
/* 
0- Domingo 
1- Segunda- feira
2- terça- Feira
3- quarta-feira
4- quinta- feira
5- sexta- feira
6 -sabádo
*/
console.log(diaSem)

switch(diaSem) {
    case 0: 
        console.log('Domingo')   
        break // sempre usar break quando tiver case OBRIGATORIO
    case 1 :
        console.log('segunda') 
        break
    case 2 : 
         console.log('terça')
        break
    case 3 : 
         console.log('Quarta')
         break
    case 4 : 
        console.log('Quinta')
        break
    case 5 : 
        console.log('sexta')
        break
    case 6 : 
        console.log('Sabádo')
        break
    default:
        console.log('[erro] dia inválido ')
    BarProp
}