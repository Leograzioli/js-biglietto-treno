/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */


//input 
//chiedere al utente numero de km trasformare in numero
const numKm = parseInt(prompt("quanti km vuoi viaggiare?"));
//calc prezzo bigletto in base ai km messo dal user
let ticketPrize = 0.21 * numKm;
console.log(ticketPrize);
//alerta con il prezzo senza sconto (solo per provare qualcosa de diverso xD)
alert(`il prezzo del biglietto e' di ${ticketPrize} euro. premi ok per calcolare lo sconto in base al'eta' `)
//chiedere eta e trasformare in numero 
const userAge = parseInt(prompt("quanti anni hai??"));
console.log(numKm, (typeof numKm));
console.log(userAge, (typeof userAge));

//se eta minore di 18, calcolare prezzo bigleto meno 20%
//altrimente se maggiore di 65 calcolare prezz meno 40%
//altrimenti prezzo normalre 

if(userAge < 18) {
    ticketPrize = ticketPrize - ticketPrize * 0.2
    console.log(ticketPrize);
}else if (userAge >= 65) {
    ticketPrize = ticketPrize - ticketPrize * 0.4
    console.log(ticketPrize);
}else {
    console.log(ticketPrize);
}

//trasformo risultato in max due decimali 
ticketPrize = ticketPrize.toFixed(2)

//output
alert(`Il prezzo finale e' di ${ticketPrize} euro`)
const resultInner = document.getElementById("result").innerHTML
document.getElementById("result").innerHTML = `${resultInner} ${ticketPrize} euro`

