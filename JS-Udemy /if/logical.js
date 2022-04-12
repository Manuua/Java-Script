const hasDriversLicense = true ; // a 
const hasGoodVision = true; // b

console.log(hasDriversLicense && hasGoodVision)// && and 
console.log(hasDriversLicense || hasGoodVision) // || or 
console.log(! hasDriversLicense )

const shouldDrive = hasDriversLicense && hasGoodVision

// if (shouldDrive){
//     console.log('Sarah is able to drive! ')
// }else {
//     console.log('Someone else should drivre...')
// }

const isTired = false //c 
console.log(hasDriversLicense && hasGoodVision && !isTired)

if (shouldDrive){
    console.log('Sarah is able to drive! ')
}else {
    console.log('Someone else should drivre...')
}