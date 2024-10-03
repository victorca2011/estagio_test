// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function fibonacci(numero) {
    let num_a = 0
    let num_b = 1
    let fibo = [num_a + num_b];

    while (num_b <= numero) {
        let result = num_a + num_b;

        num_a = num_b;
        num_b = result;
        fibo.push(result)
    }

    fibo.includes(numero) ? console.log(`SIM, o numero ${numero} pertence a sequencia ao lado -> ${fibo}`) : console.log(`NÃO, o número ${numero} não pertence a sequencia ao lado -> ${fibo}`)

}
fibonacci(21)
