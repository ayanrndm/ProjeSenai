let letra = prompt('Digite a letra');
letra  = letra.toLowerCase;
switch(letra){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        alert ('vogal');
            break;
    default:
        alert ('Consoante');
}
