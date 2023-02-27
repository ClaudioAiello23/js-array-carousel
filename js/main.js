'use strict';


const imgCollection = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

let imgContent = '';

const container = document.querySelector('.img_container');


for (let i = 0; i < imgCollection.length; i++){

    imgContent +='<div class=img_box><img src="img/01.webp" alt=""></div>';
    break;

}

container.innerHTML += imgContent;
document.querySelector('.img_box').classList.add('img_show');


// Gestione frecce per successione immagini
const upArrow = document.querySelector('.up_arrow');
const downArrow = document.querySelector('.down_arrow');

downArrow.addEventListener('click',

function(){
    alert('down');

}

)

upArrow.addEventListener('click',

function(){
    alert('up');

}

)


