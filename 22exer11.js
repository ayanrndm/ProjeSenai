let nom = prompt('Usuário:');
nom = nom.toUpperCase();
let senha = prompt('Senha:');
senha = senha.toUpperCase();
let nom2;
let senha2;

while(senha == nom){
    alert('Erro, senha não pode ser igual ao usuário');
    nom2 = prompt('Usuário:');
    senha2 = prompt('Senha:');
    if (senha2 != nom2){
        alert ('senha aceita');
    }
    break;
}
