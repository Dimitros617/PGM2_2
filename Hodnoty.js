class Hodnoty extends Component {

    constructor(arr, id) {

        super(id);

        let count = 0;
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "HODNOTY";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        if (super.getNastaveni(arr)[6]) { count++; div.appendChild(super.getGraphic("Default :", "input/text", position.HORIZONTAL, "f/value")); }
        if (super.getNastaveni(arr)[7]) { count++; div.appendChild(super.getGraphic("Popisek :", "input/text", position.HORIZONTAL, "f/title")); }
        if (super.getNastaveni(arr)[8]) { count++; div.appendChild(super.getGraphic("Minimum :", "input/number", position.VERTICAL, "f/min")); }
        if (super.getNastaveni(arr)[9]) { count++; div.appendChild(super.getGraphic("Maximum :", "input/number", position.VERTICAL, "f/max")); }
        if (super.getNastaveni(arr)[10]) { count++; div.appendChild(super.getGraphic("Krok :", "input/number", position.VERTICAL, "f/step")); }

        return count == 0 ? null : div;
    }

}
