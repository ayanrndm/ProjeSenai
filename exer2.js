alert('Bem vindo');
let num = prompt ("Qual sua idade:");
//let cm = prompt ("Altura:");
//let f = (62.1*cm)-44.7;
//let m = (72.7*cm)-58;
    
if(num < 16){
    alert('Não pode dirigir nem votar');
}
else{
        if(num >= 16 && num < 18){
            alert('Pode votar, mas não pode dirigir');
        }
        else{
            if(num => 18){
                alert('Pode votar e dirigir');
            }
        }
    }

