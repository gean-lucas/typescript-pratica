const Pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

Pessoa.idade = 29;

const andre: {nome:string, idade:number, profissao:string} = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
}

const paula: {nome:string, idade:number, profissao:string} = {
    nome: 'André',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome:string,
    idade:number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const Vanessa:Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const Maria:Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica:Estudante = {
    nome: 'Jéssica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica Discreta', 'Programação']

}

const monica:Estudante = {
    nome: 'Jéssica',
    idade: 28,
    materias: ['Matematica Discreta', 'Programação']

}

function listar(lista:string[]) {
    for (const item of lista) {
        console.log('- ', item);
        
    }
}

listar(monica.materias)