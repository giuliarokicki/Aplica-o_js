//Crie uma função que verifica se um número inteiro passado como parâmetro é
//divisível por 3 e retorne true ou false.

function divisivelPor3(numero) {
    return numero % 3 === 0; //A porcentagem (%) no código representa o operador módulo, que retorna o resto da divisão entre dois números.
}

// Testes
console.log(divisivelPor3(9)); // true
console.log(divisivelPor3(10)); // false