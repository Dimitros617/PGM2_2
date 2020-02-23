
var count = 0;

/**
 * Metoda načte a sloučí dva textové řetězce z libovolných dvou prvků jednoznačně definovaných pomocí ID v html dokumentu, a následně výsledkem p�ep�e op�t jednozna�n� definovan� prvek v html.
 * 
 * 
 * @param {string} cil = cilovy label na vypis slučený textu
 * @param {string} jmeno = textBox (input) kam uživatel zadává své jméno
 * @param {string} prijmeni = textBox (input) kam uživatel zadává své prijmeni
 * @param {number} id = id tlačítka pr odefinicy jaká osoba se má zobrazit
 */

function vypisJmeno(cil,jmeno,prijmeni,id) {

 
   if(parseInt(id)){
    osoba = new Osoba(document.getElementById(jmeno).value.trim(), document.getElementById(prijmeni).value.trim());
    }
    else{
    osoba = new Osoba("Jan", "Novák");
    }
	document.getElementById(cil).textContent = osoba.getName().trim() == "" ? "Zadejte nejprve jméno a příjemní": osoba.getName() ;

}

//----------------------------------------------------------------------------


/**
 * Metodapři každé změně v texh boxu @input zvaliduje zda se jedná o číslednou hodnotu následně "viditelní" tlačítko @button pro hráče
 * 
 * @param {*} input = input text box s uživatelskýmy hodnotami
 * @param {*} button = Id buttonu pro změnu barvy (Visibiliti)
 */
function zadavani(input, button){

if( !isNaN(document.getElementById(input).value.trim()) && document.getElementById(input).value.trim() != ""){

    document.getElementById(button).style.backgroundColor = '#868181'; //normal
    return true;

}
else{

    document.getElementById(button).style.backgroundColor = '#b9b9b9'; //hover
    return false;
}



}


function zadat(label, button, divZadavani, divHra){

debugger
    if(zadavani(label, button.id)){
        document.getElementById(divZadavani).style.visibility = "hidden";
        document.getElementById(divHra).style.visibility = "visible";

    }

}

function tip(){
    



}

function tipCheck(){




}

/**
 * Zástupná metoda pro hover 
 * @param {Object} x = pointer na objekt
 */
function hover(x){

    x.style.backgroundColor = '#b9b9b9';

}


/**
 * Metoda slouží jako ukončení hoveru pro tlačítka, ovšem nejprve vyhodnotí zda se má tlačítko opravdu graficky vrátit to clickable stavu pomocí metody zadavani.
 * Metoda se také volá při naštení stránky a provede první nastavení grafiky pro všechny tlačítka jejichž id se zadá jako vstupní parametr do argumentu na idexy 2 a více.
 * 
 * @param {Object} x pointer na objekt tlačítka
 * @param {String} input = id příšlušného textBoxu pro ověření hodnoty
 * @argument {String} argument = na pozici 2 - inf se zjišťují id budttonu 
 */
function hoverEnd(x, input){

    if(x!= null){
        if(zadavani(input, x.id))
            x.style.backgroundColor = '#868181';
    }
    else
    {
        for (var i = 2; i < arguments.length; i++) {
            document.getElementById(arguments[i]).style.backgroundColor = '#b9b9b9'; //hover
        } 

    }

}


function load(){

    hoverEnd(null, 'intVstup', 'b1', 'b2' );

}



class Osoba {


    constructor(jmeno, prijmeni) { 

        this.jmeno = jmeno;
        this. prijmeni = prijmeni;

    }

    getName(){

        return this.jmeno + " " + this.prijmeni;

    }
    
        
}

