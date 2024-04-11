let dia = prompt ('Digite um número do dia da semana');
const diaF = dia.padStart(2, '0')
switch (dia){
    case '1':
        alert ('1 - Domingo');
    break;
    case '2':
        alert ('2 - Segunda');
    break;
    case '3':
        alert ('3 - Terça');
    break;
    case '4':
        alert ('4 - Quarta');
    break;
    case '5':
       alert  ('5 = Sexta ');
    break;
    case '6':
       alert  ('6 = Sabádo ');
    break;
    default:
        alert ("Número inválido");
        break;
}