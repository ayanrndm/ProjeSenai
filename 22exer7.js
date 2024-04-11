let sal = parseFloat(prompt ('Digite o salário'));
let conta;
let au;
if(sal <= 280){
    au = (sal*0.2);
    conta = (sal+au);
    alert(`Salário antigo:${sal}\n Reajuste:20%\n ${au} reais de aumento\n Salário novo:${conta}`);
}
else{
    if(sal > 280 && sal < 700){
        au = (sal*0.15);
        conta = (sal+au);
        alert(`Salário antigo:${sal}\n Reajuste:15%\n ${au} reais de aumento\n Salário novo:${conta}`);
    }
        else{
            if(sal > 280 && sal <= 700){
                au = (sal*0.15);
                conta = (sal+au);
                alert(`Salário antigo:${sal}\n Reajuste:15%\n ${au} reais de aumento\n Salário novo:${conta}`);
            }
          
            else{
                    if(sal > 700 && sal <= 1500){
                        au = (sal*0.10);
                        conta = (sal+au);
                                alert(`Salário antigo:${sal}\n Reajuste:10%\n ${au} reais de aumento\n Salário novo:${conta}`);
                    }
    
                    else{
                        if(sal > 1500){
                            au = (sal*0.05);
                            conta = (sal+au);
                                    alert(`Salário antigo:${sal}\n Reajuste:05%\n ${au} reais de aumento\n Salário novo:${conta}`);
        
                        }
                    }
            }
    
        }
    }

