alert('Boas vindas ao jogo do número secreto');
let numax = 500;
let numerosecreto = parseInt(Math.random() * numax +1)
console.log(numerosecreto);
let tentativa = 1;
let chute;

while(chute != numerosecreto){
    chute = prompt(`Escolha um número de 1 a ${numax}`);
    if(chute == numerosecreto){
        break;
    }

    let tamanho = chute > numerosecreto ? 'menor' : 'maior'
    alert (`Você errou, o número secreto é ${tamanho} que ${chute}`)
}
 tentativa++;
 let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa' 
alert(`O número secreto era ${numerosecreto} e você acertou com apenas ${tentativa} ${palavraTentativa}`)