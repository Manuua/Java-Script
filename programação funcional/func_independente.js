const random = (number , Math ) => 
Math.floor(Math.random() * number);

// recursive 
// find the factorial of  NUMBER 
const factorial = x => {
    //if number is 0 
    if (x==0){ 
    return 1 ;
    }
 return X * factorial( x -1 )
}
