// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

alert("Lancio del dado del GIOCATORE 1");

const dadoPlayer1 = Math.floor(Math.random() * 6) + 1;

alert("Il tuo numero è:   " + dadoPlayer1);

alert("Lancio del dado del COMPUTER");

const dadoComputer = Math.floor(Math.random() * 6) + 1;

alert("Il tuo numero è:   " + dadoComputer);

if (dadoPlayer1 > dadoComputer) {
  alert("PLAYER 1 VINCE");
} else if (dadoPlayer1 < dadoComputer) {
  alert("COMPUTER VINCE");
} else {
  alert("PAREGGIO");
}
