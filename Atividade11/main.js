const CalcularAreaRetangulo = function (base, altura) {
    this.base = base;
    this.altura = altura;

    this.area = this.base * this.altura;

    return this.area;
}

//console.log(calcRetangulo(3, 10))


const Conta = function (){
    var nomeCorrentista;
    var banco;
    var numeroConta;
    var saldo;

    this.setNomeCorrentista = (nomeCorrentista) =>{
        this.nomeCorrentista = nomeCorrentista;
    };

    this.getNomeCorrentista = () =>{
        return this.nomeCorrentista;
    };

    this.setBanco = (banco) =>{
        this.banco = banco;
    };

    this.getBanco = () =>{
        return this.banco;
    };

    this.setNumeroConta = (numeroConta) =>{
        this.numeroConta = numeroConta;
    };

    this.getNumeroConta = () =>{
        return this.numeroConta;
    };

    this.setSaldo = (saldo) =>{
        this.saldo = saldo;
    };

    this.getSaldo = () =>{
        return this.saldo;
    };
}

const Corrente = function(){
    var saldoEspecial;

    this.setSaldoEspecial = (saldoEspecial) =>{
        this.saldoEspecial = saldoEspecial;
    };

    this.getSaldoEspecial = () =>{
        return this.saldoEspecial;
    };
}

const Poupanca = function(){
    var juros;

    this.setJuros = (juros) =>{
        this.juros = juros;
    };

    this.getJuros = () =>{
        return this.juros;
    };
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

const pessoa1 = new Corrente();
const pessoa2 = new Poupanca();

pessoa1.setNomeCorrentista('Kettilyn');
pessoa1.setSaldo(1800);
pessoa1.setBanco('Inter');
pessoa1.setNumeroConta(1234);
pessoa1.setSaldoEspecial(100);


pessoa2.setNomeCorrentista('Gusthavo');
pessoa2.setSaldo(100);
pessoa2.setBanco('Nubank');
pessoa2.setNumeroConta(5678);
pessoa2.setJuros(10/100);

console.log(' Nome: ' + pessoa1.getNomeCorrentista() + 
'\n Banco: ' + pessoa1.getBanco() +
'\n Conta:' + pessoa1.getNumeroConta() +
'\n Saldo: ' + pessoa1.getSaldo() +
'\n Saldo Especial: ' + pessoa1.getSaldoEspecial());

console.log('\n Nome: ' + pessoa2.getNomeCorrentista() + 
'\n Banco: ' + pessoa2.getBanco() +
'\n Conta:' + pessoa2.getNumeroConta() +
'\n Saldo: ' + pessoa2.getSaldo() +
'\n Juros: ' + pessoa2.getJuros() * 100 +'%');


