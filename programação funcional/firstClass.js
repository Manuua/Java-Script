const sayMyName = () => console.log('Manu')
const runFunction = fn => fn()


// função que chama outra função 
runFunction(sayMyName)
runFunction(() => console.log('discover'))

runFunction(() => console.log('oi'))