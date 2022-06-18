"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "Teste";
anyEstaDeVolta = 5;
let stringTest = "Verificar";
stringTest = anyEstaDeVolta;
let unknowValor;
unknowValor = 1;
unknowValor = 'opa';
unknowValor = true;
unknowValor = "Vai sim";
let stringTest2 = "agora vai";
//stringTest2 = unknowValor;
if (typeof unknowValor === "string") {
    stringTest2 = unknowValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
