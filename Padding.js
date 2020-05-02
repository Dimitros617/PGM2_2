class Padding extends Component {
    
    constructor(arr, id) {

        super(id);


        let count = 0;
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "PADDING";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        if (super.getNastaveni(arr)[19]) { count++; div.appendChild(this.getGraphic("Nahoře :", "input/text", position.VERTICAL, "s/padding-top")); }
        if (super.getNastaveni(arr)[20]) { count++; div.appendChild(this.getGraphic("Dole :", "input/text", position.VERTICAL, "s/padding-bottom")); }
        if (super.getNastaveni(arr)[21]) { count++; div.appendChild(this.getGraphic("Vlevo :", "input/text", position.VERTICAL, "s/padding-left")); }
        if (super.getNastaveni(arr)[22]) { count++; div.appendChild(this.getGraphic("Vpravo :", "input/text", position.VERTICAL, "s/padding-right")); }

        return count == 0 ? null : div;
    }

}
