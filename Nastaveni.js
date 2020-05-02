
const editComponent = {
    TEXTINPUT: '0/1/2/3/4/5/6/7/11/12/13/14/15/16/17/18/19/20/21/22/23/24/25/26',
    TEXTARRAY: '0/1/2/3/4/5/6/7/11/12/13/14/15/16/17/18/19/20/21/22/23/24/25/26',
    SELECT: '0/1/2/3/4/5/6/7/11/12/13/14/19/20/21/22/23/24/25/26',
    NUMBERINPUT: '0/1/2/3/4/5/6/7/8/9/10/11/12/13/14/19/20/21/22/23/24/25/26',
    NUMBERRANGE: '0/1/2/3/4/5/6/7/8/9/10',
    BUTTON: '0/1/2/3/4/5/6/7/11/12/13/14/15/16/17/18/19/20/21/22/23/24/25/26',

    getOnIndex(index) {

        switch (parseInt(index)) {
            case 1:
                return this.TEXTINPUT;
            case 2:
                return this.TEXTARRAY;
            case 3:
                return this.SELECT;
            case 4:
                return this.NUMBERINPUT;
            case 5:
                return this.NUMBERRANGE;
            case 6:
                return this.BUTTON;
            default:
                return null;
        }

    }

}

const position = {
    VERTICAL: 0,
    HORIZONTAL: 1,
}


class Nastaveni {

    item; // Object
    id; //int
    component // Object

    constructor(id) {

        this.id = id;

        this.vytvorNastaveni(id);

    }


    vytvorNastaveni(id) {

        let div = document.createElement("div");
        div.setAttribute("ID", "localNastaveni");


        let componentSetting = [];
        componentSetting.push(new Rozmery(editComponent.getOnIndex(this.id), this.id));
        componentSetting.push(new Hodnoty(editComponent.getOnIndex(this.id), this.id));
        componentSetting.push(new Barva(editComponent.getOnIndex(this.id), this.id));
        componentSetting.push(new Margin(editComponent.getOnIndex(this.id), this.id));
        componentSetting.push(new Padding(editComponent.getOnIndex(this.id), this.id));

        for (let i = 0; i < componentSetting.length; i++)
            if (componentSetting[i] != null)
                div.appendChild(componentSetting[i]);


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
