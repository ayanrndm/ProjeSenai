let tam = parseFloat(prompt ('Qual o valor da area em metros quadradas a ser pintada?'));
let lata = 54;
let valL = 80;
let conta;
let val;
conta = (tam/lata);
val = (Math.ceil(conta)*valL);
alert(`Serão compradas ${Math.ceil(conta)}`);
alert('O valor total é de R$ '+val);