/*
var character = {
    name: "Eleven",
    show: "Stranger Things",
    portrayedBy: "Millie Bobby Brown"
};

const quotes = [
    "I'm going to my friends. I'm going home.",
    "Pure fuel! PURE FUEL! WOO!",
    "See? Zoomer.",
    "Bitchin",
];

var proto1 = Object.getPrototypeOf(character);
console.log(proto1);

//prototip prototipa == null
var proto2 = Object.getPrototypeOf(proto1);
console.log(proto2);

proto1.dodaj = function () {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

console.log(proto1.dodaj());

*/

function Osoba() {
    this.ime = "Ana",
        this.godine = 25
};

var osoba1 = new Osoba();
console.log("Osoba1 => ime: " + osoba1.ime + "; ima godina: " + osoba1.godine);

Osoba.prototype.spol = "Žensko";


console.log("Osoba1 => ime: " + osoba1.ime + "; ima godina: " + osoba1.godine + " Spol: " + osoba1.spol);

var osoba2 = new Osoba();
osoba2.brojCipela = 38;
console.log(osoba2.ime + ", " + osoba2.godine + ", " + osoba2.spol + ", " + osoba2.brojCipela);
