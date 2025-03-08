//Escreva uma função que recebe uma string como argumento e retorna o número de
//vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u).

function contarVogais(palavra) {
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let num of palavra) {
        if (vogais.includes(num)) {
            contador++;
        }
    }
    return contador;
}

//Teste
console.log(contarVogais('aeiou')); //5
console.log(contarVogais('giulia')); //4
console.log(contarVogais('luiz')); //2