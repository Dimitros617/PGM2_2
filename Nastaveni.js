const position = {
    VERTICAL: 0,
    HORIZONTAL: 1,
}

class Nastaveni {

    item; // Object
    id; //int
    component // Object

    constructor(item, id) {
        this.item = item;
        this.id = id;

        this.vytvorNastaveni(id);

    }


    vytvorNastaveni(id){

        this.component = new Component(this.id);
        let div = document.createElement("div");
        div.setAttribute("ID", "localNastaveni");
        
        div.appendChild(this.component.getRozmery());
        div.appendChild(this.component.getHodnoty());
        div.appendChild(this.component.getBarva());
        document.getElementById('nastaveni').appendChild(div);

    }

    /**
     * 
     * @param {object} newStyle = objekto nového stylu 
     */
    synchronize(newStyle) {
        document.getElementById('previewItem').style = newStyle;
    }
}
