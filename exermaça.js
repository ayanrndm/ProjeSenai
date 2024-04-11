/*let numero;
let i = 1
let I = 0
let media;
while (i <= n){
    numero = (parseInt(prompt("Insira sua idade")));
i = i + 1
if (numero / n <=25){
    alert('0 a 25')
}
else{
    if(numero / n >=26 || numero/n == 60){
        alert('26 a 60')
    }
    else{
    if(numero / n > 60){
        alert('60+')
    }
}
}
}*/
let temp;
let menorTemp = 200;
let maiorTemp = 1;
let somaTemp = 0;
let media;
let contador = 1;
while(contador<=5){
    temp = parseInt(prompt("Digite o valor da temperatura:"));
    if (temp < menorTemp) {
        menorTemp = temp;
    }
    if (temp > maiorTemp){
        maiorTemp = temp;      
    }
    somaTemp += temp;
    console.log(somaTemp);
    if(contador==5){
        break;
    }
    contador++  
}
media = somaTemp/contador
alert(`A maior temperatura é de ${maiorTemp} graus e a menor temperatura é de ${menorTemp} graus`);
alert(`A média entre as temperaturas é de ${media} graus`);
 