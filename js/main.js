'use strict';

// Dati di partenza struttura JavaScript:
// Inserimento Variabile di tipo Arrow, contenente le immagini da gestire;
const imgCollection = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];

// Creazione variabile contenitore che si collega al contenitore principale HTML
const container = document.querySelector('.img_container');

/*Creazione variabile "immagine selezionata" che di default ha valore/posizionamento "0",
il che indica che l'img 01.webp è l'immagine di default all'apertura della pagina web.*/
let imgSelected = 0;

// Creazione variabile "contenuto immagine" vuota, da gestire successivamente.
let imgContent = '';

/*Avvio ciclo di tipo FOR per far passare in rassegna tutte le immagini contenute
nella variabile imgCollection; all'interno viene indicato che per ogni img
richiamata deve essere visualizzata una stringa HTML; nella stringa viene di volta
in volta considerata l'immagine in posizione i-esima relativamente all'Arrey 
precedentemente dichiarato;*/
for (let i = 0; i < imgCollection.length; i++){

    imgContent += `<div class=img_box><img src="img/${imgCollection[i]}" alt=""></div>` ;
   
}

/*Chiedo al container principale di aggiungere in HTML le mie immagini; viene 
usato il segno +- per indicare che in quel container non và sostituito imgContent, 
ma và aggiunto (in quanto nel container sono presenti anche le due upArrow, che)
non devono essere rimosse dal container*/
container.innerHTML += imgContent;

/*Essendo di default il box immagini (img_show) display NONE, con la seguente
istruzione chiedo al mio PRIMO box contenente la singola immagine 
di mostrare come base di partenza SOLO la prima immagine (infatti l'istruzione 
query selector, in caso di presenza della stessa classe su più elementi, seleziona
sempre solo il primo elemento).*/
document.querySelector('.img_box').classList.add('img_show');

/*Gestione eventi al click sulle frecce "Down-Arrow" e "Up-Arrow"; richiamo
le due variabili e le collego alle relative classi HTML;*/
const upArrow = document.querySelector('.up_arrow');
const downArrow = document.querySelector('.down_arrow');

/*Grazie all'aggiunta 'ALL' al query selector, creo una variabile che raccoglie
insieme TUTTI gli elementi 'div html' che hanno la classe img_box; dalla console
verrà mostrato anche l'elemento che tra questi ha di base la classe "img_show".*/
const imgBoxes = document.querySelectorAll('.img_box');
console.log(imgBoxes);


/*Faccio partire l'evento sulla freccia DOWN, che ad ogni click deve passare
all'immagine posizionata successivamente alla prima; nella IF si è specificato
che la funzione del click deve svolgersi fino alla penultima immagine compresa
(imgBoxes.length -1),in quanto per l'ultima immagine non sarà più necessario
cliccare.*/
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

/*Faccio partire l'evento sulla freccia UP, che ad ogni click deve passare
all'immagine posizionata precedentemente; nella IF si è specificato
che la funzione del click deve svolgersi solo se l'immagine è almeno in posizione
1 (imgSelected > 0),in quanto per la prima immagine non sarà più necessario
cliccare.*/
upArrow.addEventListener('click',

function(){

    if (imgSelected > 0){

        console.log(imgSelected);
        imgBoxes[imgSelected].classList.remove('img_show');
        imgSelected--;
        imgBoxes[imgSelected].classList.add('img_show');
        console.log(imgSelected);

    }
    
}

)


