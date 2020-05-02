class Barva extends Component {

    constructor(arr, id) {

        super(id);

        let count = 0;
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "BARVA";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        if (super.getNastaveni(arr)[11]) { count++; div.appendChild(this.getGraphic("Text :", "input/color", position.VERTICAL, "s/color")); }
        if (super.getNastaveni(arr)[15]) { count++; div.appendChild(this.getGraphic("Text hover :", "input/color", position.VERTICAL, "h/color")); }
        if (super.getNastaveni(arr)[12]) { count++; div.appendChild(this.getGraphic("Pozadí :", "input/color", position.VERTICAL, "s/background-color")); }
        if (super.getNastaveni(arr)[16]) { count++; div.appendChild(this.getGraphic("Pozadí hover :", "input/color", position.VERTICAL, "h/background-color")); }
        if (super.getNastaveni(arr)[13]) { count++; div.appendChild(this.getGraphic("Šířka rámečku :", "input/text", position.VERTICAL, "s/border-width")); }
        if (super.getNastaveni(arr)[17]) { count++; div.appendChild(this.getGraphic("Š. rámečku hover:", "input/text", position.VERTICAL, "h/border-width")); }
        if (super.getNastaveni(arr)[14]) { count++; div.appendChild(this.getGraphic("Barva rámečku :", "input/color", position.VERTICAL, "s/border-color")); }
        if (super.getNastaveni(arr)[18]) { count++; div.appendChild(this.getGraphic("B. rámečku hover:", "input/color", position.VERTICAL, "h/border-color")); }

        return count == 0 ? null : div;

    }
}
