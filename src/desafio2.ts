// Como podemos melhorar o esse código usando TS? 
enum Trabalho {
    Atriz,
    Padeiro
}

interface Pessoa {
    nome:string,
    idade:number,
    trabalho:Trabalho
}

let pessoa1:Pessoa = {
    nome: "maria",
    idade: 29,
    trabalho: Trabalho.Atriz
}

let pessoa2:Pessoa = {
    nome: "roberto",
    idade: 19,
    trabalho: Trabalho.Padeiro
}


let pessoa3:Pessoa = {
    nome: "laura",
    idade: 32,
    trabalho: Trabalho.Atriz
};

let pessoa4:Pessoa = {
    nome: "carlos",
    idade: 19,
    trabalho: Trabalho.Atriz
}