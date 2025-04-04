const guestEmails = [
  "alice.rossi@email.com",
  "marco.verdi@email.com",
  "giulia.bianchi@email.com",
  "luca.neri@email.com",
  "francesca.moretti@email.com",
  "giorgio.romano@email.com",
  "elena.fontana@email.com",
  "andrea.vitali@email.com",
  "chiara.costa@email.com",
  "federico.ferrari@email.com",
];

const userEmail = prompt("Inserisci la tua E-mail?");
let emailVerificated = false;
let i = 0;

while (i < guestEmails.length && emailVerificated === false) {
  let singleEmail = guestEmails[i];
  if (singleEmail === userEmail) {
    emailVerificated = true;
    alert("Complimenti! Sei fra gli invitati alla festa!");
  }
  i++;
}

if (emailVerificated === false) {
  alert("Mi spiae, non sei invitato, forse sei una brutta persona.");
}
