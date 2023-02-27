'use strict';


const imgCollection = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

let imgContent = '';
let imgSelected = 0;

const container = document.querySelector('.img_container');


for (let i = 0; i < imgCollection.length; i++){

    imgContent += `<div class=img_box><img src="img/${imgCollection[i]}" alt=""></div>` ;
   
}

container.innerHTML += imgContent;
document.querySelector('.img_box').classList.add('img_show');


// Gestione frecce per successione immagini
const upArrow = document.querySelector('.up_arrow');
const downArrow = document.querySelector('.down_arrow');
const imgBoxes = document.querySelectorAll('.img_box');

downArrow.addEventListener('click',

function(){

    if (imgSelected < imgBoxes.length -1){

        console.log(imgSelected);
        imgBoxes[imgSelected].classList.remove('img_show');
        imgSelected++;
        imgBoxes[imgSelected].classList.add('img_show');
        console.log(imgSelected);

    }
    
}

)


upArrow.addEventListener('click',

function(){

    if (imgSelected > 0){

        console.log(imgSelected);
        imgBoxes[imgSelected].classList.add('img_show');
        imgSelected--;
        imgBoxes[imgSelected].classList.remove('img_show');
        console.log(imgSelected);

    }
    
}

)


