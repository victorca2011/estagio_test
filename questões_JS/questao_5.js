//5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
//a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
//b) Evite usar funções prontas, como, por exemplo, reverse;

function stringReverse(string){
    var reverseString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    console.log(reverseString)
    return reverseString
}
stringReverse('Quero estagiar, posso ficar com a vaga?')
