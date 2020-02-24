class Tabulka {

    radky; //int
    sloupce; //int
    table; //Object
    select; //Object
    poleASCII; //Array

    /**
     * 
     * @param {number} radky = pocet radku
     * @param {number} sloupce = pocet sloupcu
     */
    constructor(radky, sloupce) { 

        this.radky = radky;
        this.sloupce = sloupce;
        this.poleASCII = new poleASCII(65, 65 + (sloupce-1))

        this.vytvorTabulku();

    }

    vytvorTabulku() {
        

            this.table = document.createElement("table");
            this.table.setAttribute("ID", "tabulka");

            this.vyber = document.createElement("select");
            this.vyber.setAttribute("id", "vyber");
            this.vyber.setAttribute("name", "1 1" )
            this.vyber.oninput = function(){

                
                this.x = this.getAttribute("name").trim().split(" ")[0];
                this.y = this.getAttribute("name").trim().split(" ")[1];
                document.getElementById('tabulka').rows[this.x].cells[this.y].style.backgroundColor = '#0000';

                this.x = this.value.trim().split(" ")[0];
                this.y = this.value.trim().split(" ")[1];
                document.getElementById('tabulka').rows[this.x].cells[this.y].style.backgroundColor = '#d7dadb';

                this.setAttribute("name", this.x + " " + this.y );

            }

        for(var i = 0; i <=this.radky; i++ )  {

                var row = document.createElement("tr");
                row.setAttribute("id", "radek");
                this.table.appendChild(row);

            for(var j = 0; j <=this.sloupce; j++ )  {

                    var cell = document.createElement("td");

                    cell.onclick = function(){


                        if(this.parentNode.rowIndex != 0 && this.cellIndex != 0){
                        this.style.backgroundColor = '#d7dadb';

                        var x = document.getElementById('vyber').value.trim().split(" ")[0];
                        var y = document.getElementById('vyber').value.trim().split(" ")[1];

                        document.getElementById('tabulka').rows[x].cells[y].style.backgroundColor = '#0000';

                        var x = this.innerText.trim().split(" ")[0];
                        var y = this.innerText.trim().split(" ")[1];

                        document.getElementById('vyber').value = this.innerText;+
                        document.getElementById('vyber').setAttribute("name", x + " " + y );
                        }
                    }
                
                    if(i == 0 && j == 0){
                        cell.setAttribute("ID", "first");
                        var text = document.createTextNode( "");
                    }
                    else if(i == 0){
                        cell.setAttribute("ID", "horizontalHead");
                        var text = document.createTextNode(this.poleASCII.getValue(j-1));
                    }
                    else if(j == 0){
                        cell.setAttribute("ID", "verticalHead");
                        var text = document.createTextNode(i);
                    }
                    else{
                        cell.setAttribute("ID", "bunka");
                        var text = document.createTextNode( i + " " + j);

                        this.polozka = document.createElement("option");
                        this.polozka.setAttribute("value", i + " " + j);
                        this.obsah_polozky = document.createTextNode(i + " " + j);
                        this.polozka.appendChild(this.obsah_polozky);
                        this.vyber.appendChild(this.polozka);
                    }     

                    cell.appendChild(text);
                    row.appendChild(cell);

        }}
      }


      vykresliTabulku(){

        if(document.getElementById('tabulka') != null){
            document.getElementById('tabulka').parentNode.removeChild(document.getElementById('tabulka'));
            document.getElementById('vyber').parentNode.removeChild(document.getElementById('vyber'));
        }

        document.getElementById('divTabulka').appendChild(this.table);
        document.getElementById('divSelect').appendChild(this.vyber);

      }


}



