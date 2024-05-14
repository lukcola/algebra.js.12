var x = "John Doe";
function vratiNesto(name) {
    var x = name;
    function f() {
        return x;
    }
    return f;
}

var y = vratiNesto("John Doe");
console.log(y);

var z = vratiNesto()();