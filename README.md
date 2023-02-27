ESERCIZIO Carosello Mono Array:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

-----------------------------------------------------------------
SVOLGIMENTO ESERCIZIO:

- Prova funzionamento struttura HTML.
- Inserimento regole CSS, con attenzione alla regola display NONE 
sul box contenente le immagini.
- Inserimento dati di partenza struttura file JavaScript:
- Inserimento Variabile di tipo Arrey, contenente le immagini da gestire;
- Creazione variabile contenitore che si collega al contenitore principale HTML;
- Creazione variabile "immagine selezionata" che di default ha valore/posizionamento "0";
- Creazione variabile "contenuto immagine" vuota, da gestire successivamente;
- Avvio ciclo di tipo FOR per far passare in rassegna tutte le immagini contenute
nella'variabile Arrey; 
- Chiedo al container principale di aggiungere in HTML le mie immagini;
- Essendo di default il box immagini (img_show) display NONE, con una
istruzione chiedo al mio PRIMO box contenente la singola immagine 
di mostrare come base di partenza SOLO la prima immagine;
- Gestione eventi al click sulle frecce "Down-Arrow" e "Up-Arrow"; richiamo
le due variabili e le collego alle relative classi HTML;
- Aggiungo una query selector di tipo ALL che raccoglie insieme TUTTI gli elementi 'div html' che hanno la classe img_box;
- Faccio partire l'evento sulla freccia DOWN, che ad ogni click deve passare
all'immagine posizionata successivamente alla prima; ');
- Faccio partire l'evento sulla freccia UP, che ad ogni click deve passare
all'immagine posizionata precedentemente; 
