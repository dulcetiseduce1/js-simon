//visualizzare 5 numeri in html
//stabii
const numeroHTML = document.getElementById("numberList");
function randomNumbers() {
let numeriArray = [];

  for (let i = 0; i < 5; i++) {
    let numeroRandom = Math.floor(Math.random() * 9 + 1);
    numeroHTML.innerHTML += `${numeroRandom}`;
    numeriArray.push(numeroRandom);
  }
  return numeriArray;
}

//log numeri
let numerilog = randomNumbers();
console.log(numerilog);

//avviare un timer di 30 secondi
setTimeout(timer, 3000);

function timer() {
  numberList.classList.add("d-none");
}

//dopo 30 secondi nascondere i numerifunction
setTimeout(inserisciNumeri, 3500);
function inserisciNumeri(){
let numeriUtente = [];
while (numeriUtente.length < 5) {
  let prompt = prompt("Inserisci i numeri uno alla volta.");
  let promptNumber = parseInt(prompt);
  numeriUtente.push(promptNumber);
}
console.log(numeriUtente);
}
//prompt utente inserisci numeri
//5 numeri inseriti dice quali giusti
