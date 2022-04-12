const manu =[
    'Manu',
    'Andrade',
    2022 - 1999,
    'student',
    ['Ana','Carol', 'Bia']
];

//0,1....,4
//4,3....,0

for (let i = manu.length - 1 ; i >= 0 ; i -- ){
    console.log(i,manu[i]);
}

// loop inside a loop 
for (let exercise = 1 ;exercise < 4 ; exercise ++){
    console.log(`-------Starting Exercise ${exercise}`);
//second loop
    for(let rep = 1; rep <6 ;rep ++ ){
        console.log(`exercise ${exercise} :lifiting weight repetitiom ${rep} 🧚🏻‍♀️`)
    }
}