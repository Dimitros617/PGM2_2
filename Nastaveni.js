const position = {
    VERTICAL: 0,
    HORIZONTAL: 1,
}

class Nastaveni {

    item; // Object
    id; //int

    constructor(item, id) {
        this.item = item;
        this.id = id;

        this.vytvorNastaveni(id);

    }


    vytvorNastaveni(id){

        let div = document.createElement("div");
        div.setAttribute("ID", "localNastaveni");
        document.getElementById('nastaveni').appendChild(div);
        document.getElementById('localNastaveni').appendChild(this.getRozmery());


    }

    getRozmery(){

        var div = document.createElement("div");
        div.setAttribute("ID", "divBox");
        div.appendChild(this.getGraphic("První hodnota :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 2 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 3 :", "input", position.HORIZONTAL));



        return div;
    }

    getGraphic(textLabel, inputType, position){


        let div = document.createElement("div");
        div.setAttribute("ID", position == 0? "graphicVertical" : "graphicHorizontal");
        let label = document.createElement("label");
        label.textContent = textLabel;
        div.appendChild(label);
        let input = document.createElement(inputType);
        input.textContent = textLabel;
        div.appendChild(input);

        return div;




    }



    /**
     * 
     * @param {object} newStyle = objekto nového stylu 
     */
    synchronize(newStyle) {
        document.getElementById('previewItem').style = newStyle;
    }
}
