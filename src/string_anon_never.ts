let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = "Teste";
anyEstaDeVolta = 5;

let stringTest: string = "Verificar";
stringTest = anyEstaDeVolta;

let unknowValor: unknown;
unknowValor = 1;
unknowValor = 'opa';
unknowValor = true;
unknowValor = "Vai sim";

let stringTest2:string = "agora vai";
//stringTest2 = unknowValor;

if(typeof unknowValor === "string") {
    stringTest2 = unknowValor;
}

function jogaErro(erro:string, codigo:number): never {
    throw {error:erro, code:codigo};
}

jogaErro('deu erro', 500);