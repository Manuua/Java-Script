// 5 falsy values
// 0 "" undefined null  Nan 
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))

const money = 0 ;
if(money){ // if true 
    console.log("Don't spend it all 😉")
} else{ // if false 
     console.log("you should get a job")
}

