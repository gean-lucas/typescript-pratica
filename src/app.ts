let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = <HTMLInputElement>document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

let Total = 0;

limparSaldo();


function somarAoSaldo(soma: number) {
    if(!(campoSaldo === null)) {

        Total += soma;
        campoSaldo.innerHTML = Total.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    
    if(!(campoSaldo === null)) {
        Total = 0;
        campoSaldo.innerHTML = Total.toString();
    }
}

if(!(botaoAtualizar === null)) {

    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}

if(!(botaoLimpar === null))
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
