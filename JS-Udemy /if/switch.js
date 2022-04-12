function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '%', 8))


// switch statement 
const day = 'monday';

switch (day){
    case 'monday':// day === 'moday '
        console.log('Plano course structure')
        console.log('Go to coding meetup')
        break;
    case 'tuesday':
        console.log('Prepare theory Vídeos ')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write examples')
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy weekend')
        break;
    default : 
    console.log('Not a valid day')
}


if (day === 'monday'){
    console.log('Plano course structure')
    console.log('Go to coding meetup')  
} else if(day === 'tuesday') {
    console.log('Prepare theory Vídeos ')
}