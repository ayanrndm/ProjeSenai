let num;
let entre = 0;
let fora = 0;
for (let v = 1; v<=10; v++){
    num = parseInt(prompt("Digite seus números:"));
    if(num>=10 && num<=20){
        alert("O número esta entre 10 e 20!");
        entre++;
    }else{
        alert("O número esta fora de 10 e 20!");
        fora++;
    }
}
alert(`Você digitou ${entre} números entre 10 e 20, e ${fora} números fora de 10 e 20!`);