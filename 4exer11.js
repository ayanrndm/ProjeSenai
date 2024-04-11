const salMin = 1412 // valor que não será mudado durante a execução do program
let sal = parseFloat (prompt('Digite o seu salário'))
let resul = (sal/salMin);
alert(' Você recebe' +resul.toFixed(2), '  salarios minimos')