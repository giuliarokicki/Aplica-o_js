//Faça um programa que recebe o nome de uma variável e mostre o <<primeiro>>.<<último nome>>@facens.br
let nome = "Giulia Camizão Rokicki"
console.log(nome.split(' ')) //Essa função divide a string em um array de strings
let primeiroNome = nome.split(' ')[0]

let ultimoNome = nome.split(' ')[nome.split(' ').length - 1]// essa função pega o último elemento do array
//coloco menos 1 pois o array começa em 0
console.log(primeiroNome + "." + ultimoNome + "@facens.br") 
