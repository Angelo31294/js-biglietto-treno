// 1. Chiedo all'utente quanti chilometri dovrà percorrere
const km = Number(prompt("Inserire i chilometri da percorrere"));
console.log( typeof km, km)
// 2. Chiedo all'utente la sua età
// 3. Calcolo del prezzo del biglietto (0,21€)
//   3a SE l'utente ha un età compresa tre i 18 e i 64 anni (compresi) non applico nessuno sconto
//   3b SE l'utente ha un'età < 18 anni (minorenne) applico il 20% di sconto
//   3c ALTRIMENTI applico il 40% di sconto se l'utente ha un'età > 64 anni
// 4. Output del prezo finale (con massimo due decimali)