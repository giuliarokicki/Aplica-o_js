//Escreva uma função que verifique se uma determinada string é um palíndromo (ou
//seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita
//para a esquerda).
//Exemplo: arara

function palindromo(palavra) {
    let palavraInvertida = palavra.split('').reverse().join('');
    if (palavra === palavraInvertida) {
        return true;
    } else {
        return false;
    }
}
//Teste
console.log(palindromo('arara')); //true
console.log(palindromo('luiz')); //false
console.log(palindromo('anna')); //true
