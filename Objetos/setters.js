// Setters  and getters Functions  

const account = {
    owner : 'Manoela',
    movements : [200, 530 ,120, 300],

    get latest(){
        return this.movements.slice(-1).pop();
    }, 

    set latest(mov){
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);