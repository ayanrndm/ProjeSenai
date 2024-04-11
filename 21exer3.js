let numero  = (parseFloat(prompt('Digite um numero')));
let num2 = (parseFloat (prompt('Digite outro número')));
let sinal = prompt('Digite algum desses sinais:\n+\n-\n/\n*')
let mm;
let Mn;

//const mesFormatado = mes.padStart(2, '0'); // O padStart define um número no lugar da casa de outro. 
//Exem: O 7 ao usar padStart(2,  "0") viraria 07, pois o 0 ocupou a segunda casa

//console.log(mesFormatado);
switch(sinal){
    case "*":
        Mn = (num2*numero)
            alert('O resultado é '+Mn)
                break;
    case "+":
        Mn = (num2+numero)
            alert ('O resultado é '+Mn);
                break;
    case "/":
        mm = prompt  ('Deseja dividir o maior pelo menor?\n s para sim\n n para não');
        if (mm == "s"){
                Mn = (Math.max (numero, num2)/Math.min(numero, num2));
        }
        else{
            if(mm == "n")
                Mn = (Math.min(numero, num2)/Math.max(numero, num2))
            }
                    alert ('O resultado é '+Mn);
                        break;
    case "-":
        mm = prompt  ('Deseja subtrair o maior pelo menor?\n s para sim\n n para não');
            if (mm == "s"){
                    Mn = (Math.max (numero, num2)-Math.min(numero, num2));
            }
                else{
                    if(mm == "n")
                        Mn = (Math.min(numero, num2)-Math.max(numero, num2))
                }
                            alert ('O resultado é '+Mn);
                                break;
    default:
        alert('É uma operação inválida')
                break;
            }
