// Propriedades e funções de função
 function somar(valor1, valor2) {
     return valor1 + valor2;
 }

 function subtrair(valor1, valor2) {
     return valor1 - valor2;
 }

 calculadora.operacoes = [];
 calculadora.contador = 0;

 function calculadora(operacao, operando1, operando2) {
     var resultado = 0;
     if (operacao == 'somar') {
         resultado = somar(operando1, operando2);
     } else if (operacao == 'subtrair') {
         resultado = subtrair(operando1, operando2);
     } else {
         return 'Operação inválida';
     }
     setarMemoriaCalculadora(operacao, operando1, operando2, resultado);
     return resultado;
 }

function setarMemoriaCalculadora(operacao, operando1, operando2, resultado) {
    var objCalc = {
        operacao: operacao,
        operando1: operando1,
        operando2: operando2,
        resultado: resultado
    }
    calculadora.operacoes.push(objCalc);
    calculadora.contador++;
}

calculadora.exibirOperacoesRealizadas = function () {
    console.log('####> '+ calculadora.contador +' operações realizadas');
    for (var op of calculadora.operacoes) {
        var sinal = op.operacao == 'somar' ? ' + ' : ' - ';
        console.log('->>>>>'+ op.operacao + ':');
        console.log('->>>>>'+ op.operando1 + sinal + op.operando2 + ' = ' + op.resultado);
        
    }
}

console.log('Calculadora - somar: ', calculadora('somar', 20, 30));
console.log('Calculadora - somar: ', calculadora('somar', 45, 113));
console.log('Calculadora - subtrair: ', calculadora('subtrair', 870, 414));

calculadora.exibirOperacoesRealizadas();