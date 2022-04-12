// mark information
let person1 = {
    name: "mark",
    weight: 78,
    height:1.69,   
}
     
    let bmimark = (person1.weight / (person1.height * person1.height))
   

// john information 
let person2 = {
    name: "john",
    weight: 92,
    height:1.95   
}

    let bmijohn = (person2.weight/(person2.height * person2.height))


// Condition 
if (bmimark > bmijohn){
    console.log( " Mark`s BMI is higher than John`s ")
}else{
    console.log("John`s BMI is higher than Mark`s ")
}

console.log(`Mark's BMI ${bmimark.toFixed(2)} is higher than John's BMI ${bmijohn.toFixed(2)}`)

