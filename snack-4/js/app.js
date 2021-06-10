var testo = 'ciao mondo, tutto bene?';

console.log(getCapitalize(testo));

//Funzione capitalize
function getCapitalize(str){
    var items = str.split(' ').map(setUpperCase);
    return items.join(' ');
}

//Funzione che setta la prima parola e le ultime parole
function setUpperCase(str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}