//const HTML
const numeroHTML = document.getElementById("numberList");
//numero random
let numeriArray = [];
function randomNumbers(numeriArray) {
  for (let i = 0; i < 5; i++) {
    let numeroRandom = Math.floor(Math.random() * 9 + 1);
    numeroHTML.innerHTML += `${numeroRandom}`;
    numeriArray.push(numeroRandom);
  }
  return numeriArray;
}
numeriArray = randomNumbers(numeriArray);
console.log(numeriArray);

//avviare un timer di 30 secondi
function timeout() {
  numberList.classList.add("d-none");
  // inserimento
  function inserisciNumeri() {
    let numeriUtente = [];
    for (i = 0; i < 5; i++) {
      let answer = prompt("Inserisci i numeri uno alla volta.");
      let promptNumber = parseInt(answer);
      numeriUtente.push(promptNumber);
    }
    return numeriUtente;
  }

  let numeriUtente = inserisciNumeri();
  console.log(numeriUtente);
  // controllo
  function controllo(numeriArray, numeriUtente) {
    let numeriIndovinati = [];
    for (i = 0; i < 5; i++) {
      if (numeriArray.includes(numeriUtente[i])) {
        numeriIndovinati.push(numeriUtente[i]);
      }
    }
    return numeriIndovinati;
  }
  numeriIndovinati = controllo(numeriArray, numeriUtente);
  console.log(numeriIndovinati);

  function result(numeriIndovinati) {
    alert(
      "Hai ricordato " +
        numeriIndovinati.length +
        "numeri e sono i seguenti: " +
        numeriIndovinati
    );
  }
  result(numeriIndovinati);
}


setTimeout(timeout, 5000);

//inserisci numeri

//numeri indovinati

//prompt utente inserisci numeri
//5 numeri inseriti dice quali giusti
