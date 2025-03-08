//Escreva uma função que receba uma string como argumento e retorne a string
//invertida.

function inverteString(string) {
    let stringInvertida = "";
    for (let num = string.length - 1; num >= 0; num--) {
        stringInvertida += string[num];
    }
    return stringInvertida;
}

//Testes
console.log(inverteString("hello")); // Saída: "olleh"
console.log(inverteString("world")); // Saída: "dlrow"