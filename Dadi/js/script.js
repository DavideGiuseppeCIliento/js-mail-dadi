// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

let dadoPlayer1 = 0;
let dadoComputer = 0;
let scorePlayer1 = 0;
let scoreComputer = 0;

const rounds = 3;

let i = 0;

for (let i = 0; i < rounds; i++) {
  alert("Lancio del dado del GIOCATORE 1");

  dadoPlayer1 = Math.floor(Math.random() * 6) + 1;

  alert("Il tuo numero è:   " + dadoPlayer1);

  alert("Lancio del dado del COMPUTER");

  dadoComputer = Math.floor(Math.random() * 6) + 1;

  alert("Il tuo numero è:   " + dadoComputer);

  if (dadoPlayer1 > dadoComputer) {
    alert("✅ PLAYER 1 VINCE IL ROUND");
    scorePlayer1++;
  } else if (dadoPlayer1 < dadoComputer) {
    alert("❌ COMPUTER VINCE");
    scoreComputer++;
  } else {
    alert("😐 PAREGGIO");
  }

  console.log("Round: " + (i + 1) + " " + "---" + " " + "Player 1: " + " " + scorePlayer1 + "     " + "Computer: " + scoreComputer);
}

if (scorePlayer1 > scoreComputer) {
  console.log(" -------------------- VITTORIA DEL PLEYER1! -------------------- ");
} else if (scorePlayer1 < scoreComputer) {
  console.log(" -------------------- VITTORIA DEL COMPUTER! -------------------- ");
} else {
  console.log(" -------------------- È PAREGGIO! -------------------- ");
}
