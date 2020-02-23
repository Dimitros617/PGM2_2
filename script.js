/**
 * Metoda na�te a slou�� dva textov� �e�ce z libovoln�ch dvou prvk� jednozna�n� definovan�ch pomoc� ID v html dokumentu, a n�sledn� v�sledkem p�ep�e op�t jednozna�n� definovan� prvek v html.
 * 
 * 
 * @param {string} cil = cilovy label na vypis slu�en� textu
 * @param {string} jmeno = textBox (input) kam u�ivatel zad�v� sv� jm�no
 * @param {string} prijmeni = textBox (input) kam u�ivatel zad�v� sv� prijmeni
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

function zadavani(input, button){

if( !isNaN(document.getElementById(input).value.trim()) ){

    document.getElementById(button).style.backgroundColor = '#868181';
    return true;

}
else{

    document.getElementById(button).style.backgroundColor = '#b9b9b9';
    return false;
}



//alert("Neco");

}

function zadat(){

    

}

function tip(){
    



}

function tipCheck(){




}

function hover(button){

    document.getElementById(button).style.backgroundColor = '#b9b9b9';

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

