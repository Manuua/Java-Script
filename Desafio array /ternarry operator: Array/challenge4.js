// coding Challege #4 

// steven wants to build a very simple tip calculator 
//  for whenever he goes eating in a restaurant. In his 
//  country, it`s usual to tip 15% if the bill value is between 50 and 300.
// If the value is diferent, the tip is 20%.
// 1. Your task is to calculate the tip, depending on
// the bill value. Creat a variable called 'tip' for this.it`s not allowed to use
// an if/else steatment (if it`s easier fo ryou, you can start with an if/else statement 
// and then try to convert is to a ternary operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip )
// Example: 'The bill was 275, the tip was 41.25, and the total value 316.25')

// TEST DATA : test fot bill values 275, 40 and 430.
 


function tipcalculator (bill){
    let tip = (bill >= 50 && bill <=300 )? (15/100 * bill) : (20/100 * bill)
    console.log(`You will pay $ ${tip} of tip `)
}

tipcalculator(100)
tipcalculator(30)