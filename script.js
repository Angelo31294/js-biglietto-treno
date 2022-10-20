// 1. Chiedo all'utente quanti chilometri dovrà percorrere
const km = Number(prompt("Inserisci i chilometri che devi percorrere"));
console.log( typeof km, km);

// 2. Chiedo all'utente la sua età
const age = Number(prompt("inserisci la tua età"));
console.log( typeof age, age);

// 3. Calcolo del prezzo del biglietto (0,21€)
const pricekm = Number(0.21);
let initialPrice = Number(km * pricekm);
console.log(typeof initialPrice, initialPrice);

//   3a SE l'utente ha un età compresa tre i 18 e i 64 anni (compresi) non applico nessuno sconto
if( age > 17 && age < 65 ) {
    let totPrice = Number(initialPrice * 1);
    console.log(typeof totPrice, totPrice)
} 
//   3b SE l'utente ha un'età < 18 anni (minorenne) applico il 20% di sconto
//   3c ALTRIMENTI applico il 40% di sconto SE l'utente ha un'età > 64 anni
// 4. Output del prezo finale (con massimo due decimali)