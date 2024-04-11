let temperatura;
let somaTemp = 0;
let media;
let qtdTemp = 0;
let menorT = 200;
let maiorT = -200;
while(temperatura != 's' ){
    temperatura = (prompt (' Digite o valor da temperatura ou digite s para sair'));
    if (temperatura == 's'){
        break;
    }

    if(temperatura < menorT){
        menorT = temperatura;
    }
    if(maiorT < temperatura){
        maiorT = temperatura;
    }
    somaTemp += parseInt (temperatura);
    
    qtdTemp++
}
media = (somaTemp / qtdTemp);
alert (`A média das temperaturas é ${media}\nA maior das temperaturas é ${maiorT}\nA menor das temperaturas ${menorT}`);
