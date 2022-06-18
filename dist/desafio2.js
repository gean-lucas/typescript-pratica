"use strict";
// Como podemos melhorar o esse código usando TS? 
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    trabalho: Trabalho.Atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    trabalho: Trabalho.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    trabalho: Trabalho.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    trabalho: Trabalho.Atriz
};
