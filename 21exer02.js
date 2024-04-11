let mes   = prompt('Digite o número do mês');
const mesFormatado = mes.padStart(2, '0'); // O padStart define um número no lugar da casa de outro. 
//Exem: O 7 ao usar padStart(2,  "0") viraria 07, pois o 0 ocupou a segunda casa

console.log(mesFormatado);
switch(mesFormatado){
    case "01":
    case "03":
    case "05":
    case "07":
    case "08":
    case "10":
    case "12":
        alert ('31 dias');
            break;
    case "04":
    case "06":
    case "09":
    case "11":
        alert('30 dias');
            break;
    case "02":
        alert ('28 dias');
            break;
    default:
        alert ('Não é um mês');
            break;
}
