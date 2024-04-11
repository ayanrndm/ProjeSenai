let nota1 = parseFloat(prompt('Digite a nota 1'));
let nota2 = parseFloat(prompt('Digite a nota 2'));
let media = ((nota1+ nota2)/2);

if (media >= 0 && media <=4 ){
    alert(`Suas notas foram: ${nota1} e ${nota2}, sua média foi ${media}, conceito E e o aluno esta reprovado!`);
}
else{
    if (media > 4 && media <=6 ){
        alert(`Suas notas foram: ${nota1} e ${nota2}, sua média foi ${media}, conceito D e o aluno esta reprovado!`);
    }
    else{
        if (media > 6 && media <=7.5 ){
            alert(`Suas notas foram: ${nota1} e ${nota2}, sua média foi ${media}, conceito C e o aluno esta aprovado!`);
    }
        else{
                if (media > 7.5 && media <=9 ){
                    alert(`Suas notas foram: ${nota1} e ${nota2}, sua média foi ${media}, conceito B e o aluno esta aprovado!`);
            }
                else{
                        alert(`Suas notas foram: ${nota1} e ${nota2}, sua média foi ${media}, conceito a e o aluno esta aprovado!`);
                }
            }
        }
    }
