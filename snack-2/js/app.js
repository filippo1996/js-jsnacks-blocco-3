//Dare la possibilità di inserire due parole. 
//Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 
//Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

var parola1 = prompt('inserisci la prima parola');
var parola2 = prompt('inserisci la seconda parola');


console.log(langWord(parola1, parola2));


function langWord(str1, str2){
    if(str1.length === str2.length){
        return 'Hanno la stessa lunghezza, parola 1 ' + str1 + ' parola 2 ' + str2;
    }else if(str1.length > str2.length){
        return 'Parola 1 ' + str1 + ' è più lunga';
    }

    return 'Parola 2 ' + str2 + ' è più lunga';
}

