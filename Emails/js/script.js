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
let singleEmail = "";

while (i < guestEmails.length && emailVerificated === false) {
  singleEmail = guestEmails[i];
  if (singleEmail === userEmail) {
    emailVerificated = true;
    alert("Complimenti! Sei fra gli invitati alla festa!");
  }
  i++;
}

if (emailVerificated === false) {
  alert("Mi spiae, non sei invitato, forse sei una brutta persona.");
}

// MAIL PIU' CORTA

let minlength = guestEmails[0].length;
let minEmail = guestEmails[1];
let count = 0;
let y = 0;

for (y = 0; y < guestEmails.length; y++) {
  singleEmail = guestEmails[y];
  count = singleEmail.length;

  if (count < minlength) {
    minlength = count;
    minEmail = singleEmail;
  }
}

alert("La mail più corta è: " + minEmail);
