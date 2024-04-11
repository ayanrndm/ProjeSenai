let hora = parseInt(prompt ('Digite quantas horas você trabalha no mês'));
let horaV = parseInt(prompt ('Digite o valor que você recebe por hora'));
let ir ;
let fgts = 0.11;
let inss = 0.10;
let conta1;
let conta2;
let conta3;
let conta4;
let valor;
let conta5;

conta1 = (hora*horaV);
conta3 = (conta1 * inss);
conta4 = (conta1 * fgts);
if(conta1 <= 900){
    ir = 0;
    conta2 = (conta1*ir);
    valor = (conta1 - conta3);
    alert(`Salário bruto:${conta1}\n FGTS(11%):${conta4}\n -IR(10%):${conta2}\n Desconto totais:${conta3}\n Salario liquido: ${valor}`);
}
else{
    if(conta1 <= 1500){
        ir = 0.05
        conta2 = (conta1*ir);
        valor = (conta1 - conta2 - conta3);
        conta5 = conta2+conta3;
        alert(`Salário bruto:${conta1}\n FGTS(11%):${conta4}\n -IR(05%):${conta2}\n Desconto totais:${conta5}\n Salario liquido: ${valor}`);
    }
        else{
            if(conta1 <= 2500){
                ir = 0.10
                conta2 = (conta1*ir);
                valor = (conta1 - conta2 - conta3);
                conta5 = conta2+conta3;
                alert(`Salário bruto:${conta1}\n FGTS(11%):${conta4}\n -IR(10%):${conta2}\n Desconto totais:${conta5}\n Salario liquido: ${valor}`);
            }
            else{
                if(conta1 > 2500){
                    ir = 0.20
                    conta2 = (conta1*ir);
                    valor = (conta1 - conta2 - conta3);
                    conta5 = conta2+conta3;
                    alert(`Salário bruto:${conta1}\n FGTS(11%):${conta4}\n -IR(20%):${conta2}\n Desconto totais:${conta5}\n Salario liquido: ${valor}`);
                    }
    
                }
            }
        }
    