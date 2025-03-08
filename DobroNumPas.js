//Faça uma função que mostre o dobro do número passado. Caso o número seja menor
//ou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que zero”

function dobroNumPas(num) {
    if (num <= 0) {
        console.log("Só é aceito números positivos maiores que zero");
    } else {
        console.log(num  * 2);
    }
}

// Testes
dobroNumPas(5); // Saída: 10
dobroNumPas(-3); // Saída: "Só é aceito números positivos maiores que zero"
dobroNumPas(0); // Saída: "Só é aceito números positivos maiores que zero"