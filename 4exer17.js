let numero;
let conta = 0;
let media;
let qtdIdade = 0;
while (numero != 0) {
    numero = parseInt(prompt('Digite sua idade ou 0 para finalizar'));
    conta+=numero;
    if (numero == 0){
        break;
    }
    qtdIdade++;
}

media = conta / qtdIdade;
if (media <= 25){
    alert (' A média da turma é ' +media +'  e a turma é jovem');
}
else{
    if (media > 25 && media <= 60){
        alert (' A média da turma é ' +media +'  e a turma é adulta');
    }
    else{
        alert (' A média da turma é ' +media+ '  e a turma é idosa');
    }
}
