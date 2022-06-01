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
//dopo 30 secondi nascondere i numeri
function timer() {
  numberList.classList.add("d-none");
}

setTimeout(inserisciNumeri, 3500);
function inserisciNumeri(){
let numeriUtente = [];
while (numeriUtente.length < 5) {
  let answer = prompt("Inserisci i numeri uno alla volta.");
  let promptNumber = parseInt(answer);
  numeriUtente.push(promptNumber);
}
console.log(numeriUtente);
}

let numeriIndovinati = [];
function controllo() {
    for (i = 0; i < 5; i++) {
      if (numeriArray.includes(numeriUtente[i])) {
        numeriIndovinati.push(numeriUtente[i]);
      }
    }
  
    console.log(numeriIndovinati);
    alert(
      "Hai ricordato " +
        numeriIndovinati.length +
        "numeri e sono i seguenti: " +
        numeriIndovinati
    );
  }
//prompt utente inserisci numeri
//5 numeri inseriti dice quali giusti
