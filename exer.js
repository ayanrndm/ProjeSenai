alert('Boas vindas ao jogo do número secreto');
let numerosecreto = 15;
console.log(numerosecreto);
let chute = prompt('Escolha um número de 1 a 30');

if(chute == numerosecreto){
    alert (`Você acertou o número secreto, ${numerosecreto}!`);} 
else {
    if(chute < numerosecreto){
        alert('O número é maior');    
    }
    else{
        (chute > numerosecreto) 
            alert('O número é menor');    
        
    }    
}

