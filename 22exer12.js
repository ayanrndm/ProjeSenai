let Vpro = 0;
let pro;
let contador = 0;
let troco;
let receber;

while (pro != 0){
    contador++
    pro = parseFloat(prompt('digite o valor do produto'));
    if (pro == 0){
        break;
    }
    alert('O seu produto ' +contador+' tem o valor de ' +pro+ ' reais');
    console.log('produto '+contador+' = '+pro+ ' reais.')
    Vpro += pro;
}
    alert('O valor completo da sua compra foi de R$' +Vpro);
    console.log('Valor total : R$'+Vpro)
    receber = prompt ('Com qual valor será pago?');
    console.log('Dinheiro a receber: R$' +receber);

    if(receber > Vpro){
        troco = (receber - Vpro)
        alert ('Você receberá um troco de R$' +troco);
        console.log ('Troco de R$'+troco+ 'Valor final de R$'+Vpro)
    }
    else{
        if (receber == Vpro){
        alert('Você não tem troco a receber');
        console.log('Não há troco e o valor da compra é de R$' +Vpro);
        }
            else{
                if(receber<Vpro){
                    alert('Não há dinheiro suficiente para realizar a compra');
                }
               
            }
        }