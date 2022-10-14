// Exercício 1
let numero1 = parseInt(prompt("Insira um valor inteiro"));
let numero2 = parseInt(prompt("Insira outro valor inteiro"));

let maiorNumero = Math.max(numero1, numero2);
let diferenca = numero1 - numero2;
diferenca = Math.abs(diferenca);

alert(`O maior número é ${maiorNumero} e a diferença é ${diferenca}`);


// Exercício 2
let numero3 = parseInt(prompt("Insira um valor inteiro"));
let numero4 = parseInt(prompt("Insira outro valor inteiro"));

if (numero3 == numero4){
    alert("Números iguais");
}
else{
    alert(`O número ${Math.max(numero3, numero4)} é maior que número ${Math.min(numero3, numero4)}`);
}


// Exercício 3
let salario = parseInt(prompt("Valor do salário"));
let valorPrestacao = parseInt(prompt("Valor da prestação"));

if(valorPrestacao >= (30*salario)/100){
    alert("Empréstimo não concedido");
}
else{
  alert("Empréstimo concedido");  
}


// Exercício 4
let numero5 = parseInt(prompt("Insira um valor inteiro"));
let divisivelPorTres = numero5%3;
let divisivelPorCinco = numero5%5;
let numeroPar = numero5%2;

if (divisivelPorTres == 0 && divisivelPorCinco == 0){
    alert("Valor inválido");
}
else if (divisivelPorCinco == 0){
    alert("Valor divisível por 5");
}
else if (divisivelPorTres == 0 ){
    alert("Valor divisível por 3");
}
else{
    alert("É par");
}


// Exercício 5
let numero6 = parseInt(prompt("Insira um valor inteiro"));

if (numero6 == 1){
    alert("Domingo");
}
else if (numero6 == 2){
    alert("Segunda-feira");
}
else if (numero6 == 3){
    alert("Terça-feira");
}
else if (numero6 == 4){
    alert("Quarta-feira");
}
else if (numero6 == 5){
    alert("Quinta-feira");
}
else if (numero6 == 6){
    alert("Sexta-feira");
}
else if (numero6 == 7){
    alert("Sábado");
}
else{
    alert("Erro");
}


// Exercício 6
let salario1 = parseFloat(prompt("Insira o valor do salário:"));
let reajusteSalario = parseFloat(prompt("Insira o valor do reajuste:"));
let salarioFinl = salario1 + reajusteSalario;

if (reajusteSalario > (5*salario1)/100){
    alert("O reajuste só pode ser de até 5%");
}
else{
    alert(`O salário do funcionário corrigido é de: R$${salarioFinl}`);
}


// Exercício 7
let valorDolar = parseFloat(prompt("Insira um valor em dólar"));
let cotacao = parseFloat(prompt("Cotação atual:"));

let conversao = valorDolar * cotacao;

alert(`$${valorDolar.toFixed(2)} é equivalente a R$${conversao.toFixed(2)}, tendo ${cotacao} como cotação`);


// Exercício 8
let tipoPulverizacao = parseInt(prompt("Insira o tipo de pulverização:"));
let areaPulverizacao = parseInt(prompt("Insira o tamanho da área a ser pulverizada:"));
let valorPulverizacao = tipoPulverizacao*areaPulverizacao;
let descontoCincoPorCento = (5*valorPulverizacao)/100;
let descontoDezPorCento = (10*valorPulverizacao)/100;


if (tipoPulverizacao == 1){
    alert(`O valor ser pago é de: R$${50*valorPulverizacao}`);
}
else if (tipoPulverizacao == 2){
    alert(`O valor ser pago é de: R$${100*valorPulverizacao}`);
}
else if (tipoPulverizacao == 3){
    alert(`O valor ser pago é de: R$${150*valorPulverizacao}`);
}
else if (tipoPulverizacao == 4){
    alert(`O valor ser pago é de: R$${250*valorPulverizacao}`);
}
else if (valorPulverizacao >= 750){
    valorPulverizacao - descontoDezPorCento;
}
else if (areaPulverizacao >= 1000){
    valorPulverizacao - descontoCincoPorCento;
}
else{
    alert("Insira um valor válido");
}


// Exercício 9
var tempo = parseInt(prompt("Insira o tempo gasto:"));
var velocidade = parseInt(prompt("Insira a velocidade:"));
let distancia = tempo*velocidade;
let litrosUsados = distancia/12;

alert(`Seu veículo percorreu ${distancia} km a ${velocidade} km/h em ${tempo}h de viagem e consumiu ${litrosUsados.toFixed(2)}l de gasolina`);


// Exercício 10
var valor1 = parseInt(prompt("Insira o valor da prestação:"));
var taxa = parseInt(prompt("Insira a taxa da prestação:"));
var tempoAtraso = parseInt(prompt("Insira o tempo de atraso da prestação:"));
let prestacao = valor1 + (valor1*(taxa/100)*tempoAtraso);

if (tempoAtraso <= 0){
    alert("Valor inválido, o tempo de atraso deve ser em dias.")
}
else{
    alert(`R$${prestacao}`);
}