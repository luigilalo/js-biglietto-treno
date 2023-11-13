
let km = parseInt(prompt("Quanti km vuoi percorrere?"));
if (isNaN(km)) {
    alert("Non hai inserito un numero!");
}
let age = parseInt(prompt("Qual è l'età del passeggero?"));
if (isNaN(age)) {
    alert("Non hai inserito un numero!");
}

let PriceForKm = 0.21;

let TotalPrice;


if (age > 18 && age < 65) {TotalPrice = km * PriceForKm;}

else if (age < 18) {TotalPrice = (km * PriceForKm) - (km * PriceForKm) * 20 / 100 }

else if (age > 65) {TotalPrice = (km * PriceForKm) - (km * PriceForKm) * 40 / 100 }

Number(TotalPrice).toFixed(2)


// Compilazione ConsoleLog
let TicketInformation = `
--------------------------------------------
> Informazioni del Biglietto
Chilometri da percorrere: ${km}
Età del passeggero: ${age}
Prezzo totale del biglietto: ${TotalPrice}
--------------------------------------------
`

console.log (TicketInformation);

document.getElementById("TotalPrice").innerHTML = TotalPrice;