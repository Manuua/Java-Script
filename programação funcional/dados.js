const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamiltlon']

// a indexação (index) começa pelo n 0 
console.log(pilotos[0])
console.log(pilotos[3])

// Matriz array dentro de um array 

const students=[['ana', 23], ['bia', 21]]

// Stack 

class Stack {
    constructor(){
        this.data =[]
        this.top= -1
    }


Push(value){
    this.top++
    this.data[this.top]= value
    return this.data

}

pop(){

}
peek(){

}

}

//Queue

class Queue {
    constructor(){
        this.data=[]
    }
}