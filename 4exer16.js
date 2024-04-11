let numero; 
let contador = 1;
let par = 0
let impar = 0 
while(contador <= 10){
    numero = parseInt(prompt('Digite um número'));
contador++
    if (numero % 2 == 0){
        par++
    }else{
        impar++
        
    }
    }
alert (`Há ${impar} números impares e ${par} números pares`); 