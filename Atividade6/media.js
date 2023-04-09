let nome = prompt("Digite seu nome: ");
let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
let media;

let calcularMedia = function(){
    media = (nota1 + nota2 + nota3)/3;
    return media;
}

alert("A média do aluno " + nome + " é: " + calcularMedia());