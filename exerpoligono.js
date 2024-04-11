let lado = prompt ('Digite quantos lados há na figura');
let area;
if(lado < 3){
    alert('Nâo há poligono')
}
else{
    let medida = prompt ('Digite a medida do lado em centímetros');
    if (lado==3){
     let altura = prompt('Qual a altura do triângo')
        area=(medida*altura)/2;
        alert(`0 seu poligono é um triângulo de área ${area}`);
    }   
    else{
        if (lado==4){
         area= (medida*medida);
         alert(`0 seu poligono é um quadrado de área ${area}`);
        }
        else{
            if(lado==5){
                let atempora = prompt ('digite o valor da atempóra');
                area=(medida*5)*(atempora)/2;
                alert(`0 seu poligono é um pentágono de área ${area}`);
        
            }
            else{
                if(lado>5){
                    alert('Poligono não identificado');
                }
            }
    
        }
    }
}
