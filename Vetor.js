//Escreva uma função que recebe um vetor de números inteiros e mostre como
//resultado qual é o menor e qual é o maior número.

function menorMaior(vetor) {
    let menor = vetor[0];
    let maior = vetor[0];
    for (let num of vetor) {
        if (num < menor) {
            menor = num;
        }
        if (num > maior) {
            maior = num;
        }
    }
    console.log(`Menor número: ${menor} | Maior número: ${maior}`);
}

// Testes
console.log(menorMaior([1, 2, 3, 4, 5])); // Menor número: 1 | Maior número: 5
console.log(menorMaior([10, 20, 30, 40, 50])); // Menor número: 10 | Maior número: 50
console.log(menorMaior([5, 4, 3, 2, 1])); // Menor número: 1 | Maior número: 5