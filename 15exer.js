let produto = prompt ('Digite o código:\n 1 - Alimento não perecível\n 2 - Alimento perecível\n 3 - Vestuário\n 4 - Higiene pessoal\n 5 - Limpeza e Utensilios domésticos ')

switch (produto){
    case '1':
        alert  ('Alimento não perecível');
    break;
    case '2':
        alert ('Alimento perecível');
    break;
    case '3':
        alert ('Vestuário');
    break;
    case '4':
        alert ('Higiene pessoal');
    break;
    case '5':
       alert ('Limpeza e Utensilios domésticos');
    break;
}