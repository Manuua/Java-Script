'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1')

const diceEl  = document.querySelector('.dice');
const btNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const bntHold = document.querySelector('.btn--hold');


const scores = [0,0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//condições iniciais 
const inicio = function(){
//declaradas fora tbm poder ler esses dados
const scores = [0,0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0.textContent = 0;
score1.textContent = 0;
current0EL.textContent =0;
current1EL.textContent =0; 

diceEl.classList.add('hidden');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
};

inicio();

const switchPlayer = function(){
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0; 
        currentScore = 0 ;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function(){
    if (playing){

//1. criar dado aleatório 
    const dice = Math.trunc(Math.random() * 6) +1 ;

//2. mostrar dado na tela 
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

//3. se o dado for 1 , passar vez p próximo jogador
    if(dice !== 1 ){
 // And dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        
 // Switch to next player
    }else {
        switchPlayer();
    }
  }
}); 
bntHold.addEventListener('click', function(){
    if(playing){

    
 //1. add Current Score to active player`s score 
    scores[activePlayer] += currentScore;
    
// scores[1]= scores[1] + currentScore
 document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
 //2.checl if player`s score is >= 100 
    if(scores[activePlayer]>= 20) {
 //finish the game 
    playing = false; 
    diceEl.classList.add('hidden');
   
}else{
     switchPlayer();
    }
  }   
});
 btNew.addEventListener('click', inicio);
// tips

// when we use queryselector to take from a class dont forget .