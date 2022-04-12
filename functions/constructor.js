function person(name){
    this.name = name
    this.walk = function(){
        return  this.name + " está andando"
    }
 }

const manu = new person("manu")
const ana = new person("ana")
console.log(manu)
console.log(ana)
console.log(manu.walk())
console.log(ana.walk())