const manu =[
    'Manu',
    'Andrade',
    2022 - 1999,
    'student',
    ['Ana','Carol', 'Bia']
];

const types = [];

for(let i = 0; i<5 ; i++ ){
    // Reading from manu array
    console.log(manu[i])
    console.log(manu[i], typeof manu[i]);// mostra o tipo 
  
 // Filling types array
 
    types[i]=typeof manu[i];
}

console.log(types);

const years =[1991, 2007, 1979 , 2020];
const ages = [];

for (let i = 0 ; i <years.length; i++ ){
    ages.push(2037- years[i]);
}

console.log(ages);

// continue and break 
console.log('--ONLY STRING--')

    for(let i = 0; i<5 ; i++ ){
        if(typeof manu[i]!== 'string') continue;

    console.log(manu[i], typeof manu[i]);
    }


    console.log('--BREAK WITH NUMBER--')

    for(let i = 0; i<5 ; i++ ){
        if(typeof manu[i]!== 'number') continue;

    console.log(manu[i], typeof manu[i]);
    }