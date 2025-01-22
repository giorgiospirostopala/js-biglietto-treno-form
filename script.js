//?     Esercizio:
//      Scrivere un programma che chieda all’utente:
//-         - Il numero di chilometri da percorrere
//-         - Età del passeggero

//      Sulla base di ciò dovrà calcolare il prezzo totale del biglietto, secondo le regole:
//-         - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//-         - va applicato uno sconto del 20% per i minorenni
//-         - va applicato uno sconto del 40% per gli over 65.

/* 
// COSA SO
const costoBiglAlKm = 0.21;
let sconto = 0;
let scontoMinorenni = 0.8;
let scontoAnziani = 0.6;

// COSA CHIEDO
let km = parseInt(prompt("Inserisci il numero di km che prevedi di percorrere"));
let età = parseInt(prompt("Inserisci la tua età"));

// CALCOLO IL PREZZO
let prezzoStandard = km * costoBiglAlKm;
let prezzoFinale;

if (età < 18){
    prezzoFinale = prezzoStandard * scontoMinorenni;

} else if (età > 65){
    prezzoFinale = prezzoStandard * scontoAnziani;

} else {
    prezzoFinale = prezzoStandard;
};

console.log(`Il costo del tuo biglietto è: € ${prezzoFinale}`);

// MOSTRO SOLO DUE DECIMALI
prezzoFinale = prezzoFinale.toFixed(2);
*/

//*_____________________________________________

//?     MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// vado a pescarmi tutti gli elementi
const nome = document.getElementById("nome");
const km = document.getElementById("km");
const eta = document.getElementById("eta");
const btnGenera = document.getElementById("btnGenera");
const bigliettoNome = document.getElementById("bigliettoNome");
const bigliettoPrezzoFinale = document.getElementById("bigliettoPrezzoFinale");
const tipoOfferta = document.getElementById("tipoOfferta");

// creo l'evento al click del bottone genera, recuperando i dati inseriti con .value
btnGenera.addEventListener("click", function(event) {
    event.preventDefault();

    const chilometri = parseFloat(km.value);
    const etaUtente = parseInt(eta.value);
    const nomeUtente = nome.value;

    // riprendo i dati che conosco e che devo dichiarare
    const costoBiglAlKm = 0.21;
    const scontoMinorenni = 0.8;
    const scontoAnziani = 0.6; 

    // rimanendo all'interno della funzione di callback, calcolo il prezzo
    let prezzoStandard = chilometri * costoBiglAlKm;
    let prezzoFinale;

    if (etaUtente < 18){
        prezzoFinale = prezzoStandard * scontoMinorenni;

    } else if (etaUtente > 65){
        prezzoFinale = prezzoStandard * scontoAnziani;

    } else {
        prezzoFinale = prezzoStandard;
    };

    // mostro solo due decimali e stampo in console il prezzo finale
    prezzoFinale = prezzoFinale.toFixed(2);

    // stampo i dati inseriti e il prezzo finale su pagina
    bigliettoNome.innerHTML = `${nomeUtente}`;
    bigliettoPrezzoFinale.innerHTML = `€ ${prezzoFinale}`;
});


//*_____________________________________________

//?     MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.

// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//*_____________________________________________

//?     MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
