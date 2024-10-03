// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
const json = require('../dados.json');

const jsonData = json.map(data => {
    return data
}).filter(value => value.valor !== 0)


let maxValue = jsonData[0].valor;
let minValue = jsonData[0].valor;
jsonData.forEach(value => {
    value.valor > maxValue ? maxValue = value.valor : value.valor < minValue ? minValue = value.valor : ''
})

const total = jsonData.reduce((totalValue, dayValue) => totalValue + dayValue.valor, 0)
const midValue = total / jsonData.length;

console.log("Maior valor registrado", maxValue.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))
console.log("Menor valor registrado", minValue.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))

const daysMidValue = jsonData.filter(value => value.valor > midValue).length
console.log(`No total, ${daysMidValue} dias superaram a média mensal de ${midValue.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}` )



