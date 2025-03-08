//Escreva uma função que recebe um endereço de e-mail como argumento e retorna
//true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um
//único símbolo '@' e pelo menos um ponto '.' após o '@'.

function validarEmail(email) {
    let contador = 0;
    for (let num of email) {
        if (num === '@') {
            contador++;
        }
    }
    if (contador === 1 && email.includes('.')) {
        return true;
    } else {
        return false;
    }
}

//Teste
console.log(validarEmail('giulia@gmai.com')); //true
console.log(validarEmail('luiz@')); //false