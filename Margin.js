class Margin extends Component {

    constructor(arr, id) {

        super(id);


        let count = 0;
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "MARGIN";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        if (super.getNastaveni(arr)[23]) { count++; div.appendChild(this.getGraphic("Nahoře :", "input/text", position.VERTICAL, "s/margin-top")); }
        if (super.getNastaveni(arr)[24]) { count++; div.appendChild(this.getGraphic("Dole :", "input/text", position.VERTICAL, "s/margin-bottom")); }
        if (super.getNastaveni(arr)[25]) { count++; div.appendChild(this.getGraphic("Vlevo :", "input/text", position.VERTICAL, "s/margin-left")); }
        if (super.getNastaveni(arr)[26]) { count++; div.appendChild(this.getGraphic("Vpravo :", "input/text", position.VERTICAL, "s/margin-right")); }


        return count == 0 ? null : div;

    }

}
