//stavljanje varijable na početak funkcije jel se drugačije zna zapetljati
// funkcija unutar funkcije
var x = "neka vrijednost";

function vratiNesto() {
    var x = "lokalna";
    function f() { return x; }
    return f;
}

var y = vratiNesto()();

console.log(y);