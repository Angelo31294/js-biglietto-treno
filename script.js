// 1. Chiedo all'utente quanti chilometri dovrà percorrere
const km = Number(prompt("Inserisci i chilometri che devi percorrere"));
console.log( typeof km, km);

// 2. Chiedo all'utente la sua età
const age = Number(prompt("inserisci la tua età"));
console.log( typeof age, age);

// 3. Calcolo del prezzo del biglietto (0,21€)
const pricekm = Number(0.21);
const initialPrice = Number(km * pricekm);
console.log(typeof initialPrice, initialPrice);

if( age > 17 && age < 65 ) {                //  3a SE l'utente ha un età compresa tre i 18 e i 64 anni (compresi) non applico nessuno sconto
    const fullPrice = Number(initialPrice * 1);
    console.log(typeof fullPrice, fullPrice);
} else if ( age < 18 ) {                   //   3b SE l'utente ha un'età < 18 anni (minorenne) applico il 20% di sconto
    const youngDiscount = Number(initialPrice * 0.2);
    const youngPrice = Number(initialPrice - youngDiscount);
    const twoDecimalyoungPrice = youngPrice.toFixed(2);   // 4. Output del prezo finale (con massimo due decimali)
    console.log(typeof twoDecimalyoungPrice, twoDecimalyoungPrice);
} else if ( age > 64 ) {                   //   3c ALTRIMENTI applico il 40% di sconto SE l'utente ha un'età > 64 anni
    const oldDiscount = Number(initialPrice * 0.4);
    const oldPrice = Number(initialPrice - oldDiscount);
    const twoDecimaloldPrice = oldPrice.toFixed(2);   // 4. Output del prezo finale (con massimo due decimali)
    console.log(typeof twoDecimaloldPrice, twoDecimaloldPrice);
}



