let produto;
let quantidade;
let conta;
let qP;
let contador;
let total = 0
let qPt = 0
while (produto != "0"){
    produto = (prompt ('Digite o código:\n 100 - cachorro quente R$1,70\n 101 - Bauru simples R$2,30\n 102 - Bauru com ovo R$2,60\n 103 - Hamburguer R$2,40\n 104 - Cheeseburger R$2,50\n 105 - Refri R$1,00\n Digite 0 para parar '))
    if (produto == "0"){
        break;}
    quantidade = (parseInt (prompt('Digite a quantidade desejada')));
    
    switch (produto){
        case '100':
            qP = "cachorro quente";
                conta = (quantidade * 1.70)
        break;
        case '101':
            qP = "Bauru simples";
                conta = (quantidade * 2.30)
        case '102':
            qP = "Bauru com ovo";
                conta = (quantidade * 2.60)
        break;
        case '103':
            qP = "Hamburguer";
                conta = (quantidade * 2.40)
        break;
        case '104':
            qP = "Cheeseburger";
                conta = (quantidade * 2.50)
            break;
        case '105':
            qP = "Refrigerante"
                conta = (quantidade * 1)
            break;
        default : 
        alert ('Código inválido')
    }
    total += conta;
    qPt+=quantidade
}
alert ('Você comprou '  + parseInt (qPt) + ' produtos e o total é '  +total )
