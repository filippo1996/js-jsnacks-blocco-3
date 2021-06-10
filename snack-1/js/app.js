//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
var items = ['Filippo','Luca','Mattia','Anna','Sofia','Marco'];
var a = parseInt(prompt('inserisci un numero minimo 1 massimo ' + items.length));
var b = parseInt(prompt('inserisci un numero massimo ' + items.length));


/*
if(a < b){
    console.log(getRangeArr(items, a, b));
}else{
    alert('attenzione');
}
*/

while(a > b || b > items.length){
    alert('attenzione, a deve essere minore di B');
    a = parseInt(prompt('inserisci un numero minimo 1 massimo ' + items.length));
    b = parseInt(prompt('inserisci un numero massimo ' + items.length));
}

console.log(getRangeArr(items, a, b));

function getRangeArr(array, min, max){
    var newItems = [];
    for(var i = min - 1; i < max; i++){
        newItems.push(array[i]);
    }

    return newItems;
}




//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
/*
var items = ['Filippo','Luca','Mattia','Anna','Sofia','Marco'];
var a = parseInt(prompt('inserisci un numero: minimo 1'));
var b = parseInt(prompt('inserisci un numero più grande: massimo ' + items.length));

if(a < b){
    console.log(rangeArr(items, a, b));
}else{
    alert('attenzione, il secondo numero deve essere più grande');
}

function rangeArr(array, min, max){
    var newItems = []
    for(var i = min - 1; i < max; i++){
        newItems.push(array[i]);
    }

    return newItems;
}
*/