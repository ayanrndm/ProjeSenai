let contador = 1;
let nota;
let soma=0;
let media;

while (contador <=5){
    nota = parseFloat(prompt ('Digite uma nota'))
    soma +=nota
    if( contador==5){

     break
    }
    contador++
}
media = soma / contador
alert(' sua média é'+media)