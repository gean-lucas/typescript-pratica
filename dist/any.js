"use strict";
let valor;
valor = 2;
valor = "a";
valor = true;
let valorString = "string";
valorString = valor;
let valorString2 = "testa";
valorString2 = valor;
function somarString(string1, string2) {
    return string1 + string2;
}
console.log(somarString(valorString, valorString2));
console.log(somarString("valorString", "valorString2"));
