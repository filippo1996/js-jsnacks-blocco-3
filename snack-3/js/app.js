
var items1 = [1,2,3,4,5];
var items2 = ['a','b','c','d','e'];


console.log(getUnioneArray(items1, items2));

//Funzione che unisce stesso numero di elementi di due array
function getUnioneArray(arr1, arr2){
    var newItems = [];
    //Controlliamo la lunghezza dell'array
    if(arr1.length !== arr2.length){
        alert('Attenzione! numeri di elementi dell\'array non sono uguali');
        return newItems;
    }
    //Eseguiamo il ciclo per unire i due array
    for(var i = 0; i < arr1.length; i++){
        newItems.push(arr1[i],arr2[i]);
    }
    return newItems;
}