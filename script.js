
var max = 0; // Vrchní hrana intervalu zadaná uživatelem při hře
var num = 0; // Náhodně vygenerované číslo z daného intervalu 1 až this.max
var count = 0; // Počet tipů uživatele

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


/**
 * Metoda načte uživatelský vstup @input zvalidujeho pomocí metody zadavani a následně graficky skryje část se zadáváním @divZadavani zobrazí část se samotnou horou @divHra
 * Vygeneruje náhodné číslo z intervalu 1 až input a o tomto je informován uživatel pomocí @labelhra.
 * 
 * 
 * @param {String} input = input textBox s uživatelkým vstupem čísla 
 * @param {String} labelHra = label pro změnu nadpisu hry a vypsání intervalu
 * @param {Object} button  = talčítko
 * @param {String} divZadavani = id divu se zadáním 
 * @param {String} divHra  = id divu s hrou
 */
function zadat(input, labelHra, button, divZadavani, divHra){

    if(zadavani(input, button.id)){
        document.getElementById(divZadavani).style.visibility = "hidden";
        document.getElementById(divHra).style.visibility = "visible";
        this.max = parseInt(document.getElementById(input).value.trim());
        this.num = 1 + Math.floor((this.max - 1) * Math.random());
        document.getElementById(labelHra).textContent = "Myslím si číslo od 1 do " + this.max + " včetně, zkus ho uhodnout.";
    }

}


/**
 * Metoda načte hodnotu z textBoxu @input zvaliduje zda je správná následně porovná zda jse nachází v intervalu, je menší, větší, nebo zda se číslo rovná předem vygenerovanému číslu.box
 * O každé akci je uživatel informován pomocí labelu @labelVysledek a výhra též vypíše počet tipů uživatele do labelu
 * 
 * 
 * @param {String} input = id text Boxu pro načítání hodnot
 * @param {Object} button = objekt tlačítka
 * @param {String} labelVysledek = id labelu pro vypsání výsledku
 */
function tipCheck(input, button, labelVysledek){


    if(zadavani(input, button.id)){

        this.count ++;
        let num = parseInt(document.getElementById(input).value.trim());
        let label = document.getElementById(labelVysledek);

        if(this.num == num){

            label.textContent = "Super vyhrál si. Počet tipů byl : " + count;

        }
        else if(this.num < num && num < this.max+1  ){

            label.textContent = randOdpoved("Nene číslo, které si myslím je menší", "Zkus menší číslo", "Já bych zkusil trochu ubrat", "Možná ještě menší no", "Neboj se uber", "Míň", "Uber");

        }
        else if(this.num > num && num > 0){

            label.textContent = randOdpoved("Zkus větší číslo, tohle není ono", "Přidej pořádně!", "Číslo je větší než tohle", "Ještě trochu bych přidal", "Víc","Přidej");

        }
        else{

            label.textContent = randOdpoved("Umíš číst ???", "Tak si normální ?", "Zkoušíš mě nebo ??", "Jsem jen JavaScript ale blbej nejsem", "Tak až se naučíš číst, tak se vrať");


        }
        

    }


}


/**
 * Metoda našte pole několika odpovědí a vybere náhodnou kterou vrátí
 * 
 * @argument {String} argument = vstupní odpovědi 
 * @returns {String} vrací náhodý string z vstupních parametrů.
 */
function randOdpoved(){

return arguments[0 + Math.floor((arguments.length - 0) * Math.random())]

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


/**
 * Metoda se zavolá při načtení stránky a upraví grafické komponenty na požadovanou hodnotu
 */
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

