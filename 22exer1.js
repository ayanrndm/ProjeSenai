let numeroI = parseInt(prompt ('Digite o primeiro número inteiro'));
let numero2 = parseInt(prompt ('Digite o segundo número inteiro'));
let numReal = parseFloat (prompt ('Digite um número real'));
let conta1;
let conta2;
let conta3;

conta1 = ((numeroI*2)* (numero2/2));
conta2 = ((numero2*3)+numReal);
conta3 = (Math.pow(numReal, 3));
alert ('a primeira conta deu:'+conta1.toFixed(2));
alert ('a segunda conta deu:'+conta2.toFixed(2));
alert ('a terceira conta deu:'+conta3.toFixed(2));