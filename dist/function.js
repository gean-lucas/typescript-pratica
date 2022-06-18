"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores("Olá", "Tudo bem?"));
console.log(somarValores("1", 5));
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
printaValoresNumericos(5, 6);
function printaValoresNumericosTratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(printaValoresNumericosTratar(1, 3, aoQuadrado));
console.log(printaValoresNumericosTratar(1, 3, dividirPorEleMesmo));
