//Escreva um programa que imprima os números de 1 a 10 no console usando um loop.
//Os número devem ser separados com um traço, ex.: 1 – 2 – 3 - ... – 10. Observação:
//após o número 10 não pode ter um traço

for (let num = 1; num <= 10; num++) {
    if (num < 10) {
        console.log(num + " - ");
    } else {
        console.log(num);
    }
}
