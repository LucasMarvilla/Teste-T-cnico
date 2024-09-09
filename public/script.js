// Função para calcular a sequência de Fibonacci até um valor máximo
function fibonacci(valorMaximo) {
    let sequenciaFib = [0, 1];
    
    let proximoFib = sequenciaFib[0] + sequenciaFib[1];
    while (proximoFib <= valorMaximo) {
        sequenciaFib.push(proximoFib);
        proximoFib = sequenciaFib[sequenciaFib.length - 1] + sequenciaFib[sequenciaFib.length - 2];
    }
    
    return sequenciaFib;
}

// Função para verificar se um número pertence à sequência de Fibonacci
function verificarFibonacci() {
    const numero = parseInt(document.getElementById('fibonacciInput').value);
    const sequenciaFib = fibonacci(numero);
    const resultado = sequenciaFib.includes(numero)
        ? `O número ${numero} pertence à sequência de Fibonacci.`
        : `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    document.getElementById('resultadoFibonacci').innerText = resultado;
}

// Função para contar a ocorrência da letra 'a' (maiúscula e minúscula) em uma string
function contarLetraA() {
    const str = document.getElementById('stringInput').value;
    const strLower = str.toLowerCase();
    const ocorrencias = (strLower.match(/a/g) || []).length;
    const resultado = ocorrencias > 0
        ? `A letra 'a' ocorre ${ocorrencias} vez(es) na string.`
        : "A letra 'a' não foi encontrada na string.";
    document.getElementById('resultadoLetraA').innerText = resultado;
}
