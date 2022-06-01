//visualizzare 5 numeri in html
const numeroHTML = document.getElementById("numberList")
function randomNumbers() {
    let numeriArray = [];
  
    for (let i = 0; i < 5; i++) {
      let numeroRandom = Math.floor(Math.random() * 9 + 1);
      numeroHTML.innerHTML += `${numeroRandom}`;
      numeriArray.push(numeroRandom);
    }
    return numeriArray;
  }
  
//avviare un timer di 30 secondi

//dopo 30 secondi nascondere i numeri
//prompt utente inserisci numeri
//5 numeri inseriti dice quali giusti