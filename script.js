
function zmena(input) {
    
    var nastaveni = new Nastaveni(1,10,1);
    nastaveni.synchronize(input);
    vykreslyTabulku(input); 

}

function vykreslyTabulku(size) {

    var tabulka = new Tabulka(size, size);
    tabulka.vykresliTabulku();
    
}

function selector(x){

    debugger;
    var a = x.value;

}



