// test data1
let person1 = {
    name: "mark",
    weight: 78,
    height:1.69,   
}
     
    let bmimark = (person1.weight / (person1.height * person1.height))
    console.log(bmimark)

let person2 = {
    name: "john",
    weight: 92,
    height:1.95   
}

let bmijohn = (person2.weight/(person2.height * person2.height))
console.log(bmijohn)

//boolean variable
let markHigherBMI = (person1 > person2)

console.log(typeof markHigherBMI)

// test data2
// alterando dados
person1.weight = 95 
person1.height = 1.88

    bmimark = (person1.weight / (person1.height * person1.height))
    console.log(bmimark)

person2.weight= 85
person2.height=1.76

    bmijohn = (person2.weight/(person2.height * person2.height))
    console.log(bmijohn)

//boolean variable
markHigherBMI = (person1 > person2)

console.log( markHigherBMI)
