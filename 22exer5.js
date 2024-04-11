let sexo = prompt('Digite a letra do seu sexo');
sexo = sexo.toUpperCase();
alert(sexo);
switch(sexo){
    case "F":
      alert('F - feminino');
        break;
    case "M":
        alert('M - masculino');
        break;
    default:
        alert('Sexo inválido');
        break;
}
