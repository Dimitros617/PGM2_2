class Tabulka {

    radky; //int
    sloupce; //int
    tabulka; //Object

    /**
     * 
     * @param {number} radky = pocet radku
     * @param {number} sloupce = pocet sloupcu
     */
    constructor(radky, sloupce) { 

        this.radky = radky;
        this.sloupce = sloupce;
        this.tabulka = document.getElementById('tabulka');

    }

    vykresliTabulku() {
        
        while(tabulka.rows.length > 0)
            tabulka.deleteRow(0);
    
        for (let i = 0; i < this.radky; i++) {
            
            var row = tabulka.insertRow(0);
            for (let j = 0; j < this.sloupce; j++) {
            
                row.insertCell(j).innerHTML = Math.floor((this.radky*this.sloupce) * Math.random()) +1;
            
            }
            
        } 

      }


}



