//1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
//Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
//Imprimir(SOMA);
//Ao final do processamento, qual será o valor da variável SOMA?

let INDICE = 13
let SOMA = 0
let K = 0

do {
    K = K + 1; SOMA = SOMA + K
} while (
    K < INDICE
)
console.log("O valor da SOMA é",SOMA)