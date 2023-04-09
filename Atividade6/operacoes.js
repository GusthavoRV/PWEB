let num1 = parseFloat(prompt("Digite o primeiro numero: "));
let num2 = parseFloat(prompt("Digite o segundo numero: "));
let soma;
let sub;
let mult;
let div;
let rest;

const operacoes = function() {
    soma = num1 + num2;
    sub = num1 - num2;
    mult = num1 * num2;
    div = num1/num2;
    rest = num1%num2;
};

operacoes();

alert("Soma: " + soma + "\nSubtração: " + sub + "\nMultiplicação: " + mult
+ "\nDivisão: " + div + "\nResto: " + rest); 