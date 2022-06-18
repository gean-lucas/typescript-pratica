let valor: any;

valor = 2;
valor = "a";
valor = true;

let valorString: string = "string";
valorString = valor;
let valorString2:string = "testa";
valorString2 = valor;

function somarString(string1:string, string2:string) {
    return string1 + string2;
}

console.log(somarString(valorString, valorString2));
console.log(somarString("valorString", "valorString2"));