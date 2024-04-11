let qt = (parseInt(prompt ('Quantidade de pessoas')));
let ida;
let c=0;-
let media;
for (let q = 1; q <= qt; q++){
    ida = (parseInt(prompt('Digite a sua idade')));
    c += ida;
    if(q == qt){
        break;
    }
}
console.log(qt)
console.log(c)

media = (c/qt);
alert ("A média é "+media.toFixed(2));