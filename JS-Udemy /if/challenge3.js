// calculate the average score for each team , using the test data bellow: 

// 2. compare the team`s average score to determine the winner of the competition, and print 
// it to the console. Don`t forget that there can be a draw, so test for that as well 
// (draw means they have the same avarege score)

// 3. Bonus 1 : Include a requirement for a minimum score of 100 
// with this rule a team only wins if it has a higher score that other team, and the same time a 
// score of at least 100 points. HINT : Use a logical operator to test for minimum
// score , as well as multiple else-if blocks.

// Teste data: Dolphins score 96, 108 and 89.
// Koalas 88 ,91 and 110
//Teste Data Bonus 1 : Dolphins score 97 , 112 and 101
//koala score 109 ,95,123 
// teste data bonus 2 : Dolphing score 97 112 and 101
// koalas socre 109 95 and 106.
 

// data principal

const koala = (88 + 91 + 110)/3 
const dolphins = (96 + 108 + 89)/3
    console.log(`A média dos Koalas é ${koala.toFixed(2)} e a média dos Dolphins é ${dolphins.toFixed(2)}`)
    
if (koala > dolphins){
    console.log( `time Koala Winner `);
    
} else if (dolphins > koala){
    console.log(`time Dolphins Winner `);
} else if ( koala === dolphins){
    console.log(`Both have the same avarege score`);
}

// bonus1 

if (dolphins >= 100 || koala >= 100) {
    if (dolphins > koala) {
      console.log(`Dolphins win!`);
    } else if (koala > dolphins) {
      console.log(`Koalas win!`);
    } else {
      console.log(`Both win the trophy!`);
    }
  } else {
      console.log(`No team wins the trophy! Score were less than 100.`);
  }
