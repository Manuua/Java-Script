'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function(){
console.log('Button clicked');
modal.classList.remove('hidden')
overlay.classList.remove('hidden')
} 

const closeModal= function(){
        modal.classList.add('hidden')
        overlay.classList.add('hidden') 
    }

for (let i = 0; i < btnsOpenModal.length; i++ )
    btnsOpenModal[i].addEventListener('click', openModal);
    

    btnCloseModal.addEventListener('click', closeModal);

    // close de modal without click only the close button but  when click in anyway 

    overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(evento){
    console.log(evento.key);

    if (evento.key === 'Escape'){ 
        if(!modal.classList.contains('hidden')){ // se a  class modal estiver escondida entao quando clicar em escape(esc) ele fecha 
                closeModal();
        }
    } 
});