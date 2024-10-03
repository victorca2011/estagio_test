//4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
//• SP – R$67.836,43
//• RJ – R$36.678,66
//• MG – R$29.229,88
//• ES – R$27.165,48
//• Outros – R$19.849,53

//Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 

const statesValue = [
    {
        state: 'SP',
        value: 67836.43
    },
    {
        state: 'RJ',
        value: 36678.66
    },
    {
        state: 'MG',
        value: 29229.88
    },
    {
        state: 'ES',
        value: 27165.48
    },
    {
        state: 'Outros',
        value: 19849.53
    }
];

// Valor do estado / total x 100
const totalValue = statesValue.reduce((totalValue, stateValue) => totalValue + stateValue.value, 0 )

statesValue.forEach(object => {
    const stateName = object.state
    const calc = (object.value / totalValue ) * 100 
    stateName == "Outros" ? console.log(`E por fim, ${stateName} tiveram ${calc.toFixed(2)}% de contribuição`) : console.log(`Estado de ${stateName} teve ${calc.toFixed(2)}% de contribuição`)
})
