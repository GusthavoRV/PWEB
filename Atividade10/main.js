let aluno1 = new Object();
aluno1.ra = "00001234";
aluno1.nome = "Igor Abiezer";
console.log("ra=" + aluno1.ra + " nome=" + aluno1.nome);

let aluno2 = {};
aluno2.ra = "1234";
aluno2["nome"] = "Gusthavo";
console.log("ra=" + aluno2.ra + " nome=" + aluno2.nome);

let aluno3 = {
    ra: "12345678",
    nome: "Kakaka"
}
console.log("ra=" + aluno3.ra + " nome=" + aluno3.nome);

function Aluno(ra,nome)
{
    this.ra = ra;
    this.nome = nome;

    this.MostraDados = function(){
        return "ra="+this.ra+" nome=" + this.nome;
    }
}

let aluno4 = new Aluno("123", "batata");

console.log(aluno4.MostraDados());


let aluno5 = {};
let nome_propriedade = "ra";
aluno5[nome_propriedade] = "123";
aluno5['nome'] = "papapapa";

console.log(aluno5.ra+" "+aluno5.nome);

function Aluno2(){
    var ra;
    var nome;

    this.setRa = function(value){
        this.ra = value;
    };
    this.getRa = function(){
        return this.ra;
    };

    this.setNome = function(value){
        this.nome = value;
    };
    this.getNome = function(){
        return this.nome;
    };
}

const aluno6 = new Aluno2();

aluno6.setRa("12345");
aluno6.setNome("tatata");

console.log(aluno6.getRa()+" "+aluno6.getNome());


function AlunoADS(){
    var numLab;

    this.setnumLab = function(value){
        this.numLab = value;
    };

    this.getnumLab = function(value){
        return this.numLab;
    };
}

AlunoADS.prototype = new Aluno2;

let aluno7 = new AlunoADS();

aluno7.setnumLab(5);
aluno7.setNome('Alex');
aluno7.setRa('123457');

console.log(aluno7.getRa()+" "+aluno7.getNome()+" "+aluno7.getnumLab())