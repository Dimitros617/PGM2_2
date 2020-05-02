class Rozmery extends Component {

    constructor(arr, id) {

        super(id);


        let count = 0;
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "ROZMĚRY";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        if (super.getNastaveni(arr)[0]) { count++; div.appendChild(super.getGraphic("Šířka :", "input/text", position.VERTICAL, "s/width")); }
        if (super.getNastaveni(arr)[1]) { count++; div.appendChild(super.getGraphic("Výška :", "input/text", position.VERTICAL, "s/height")); }
        if (super.getNastaveni(arr)[2]) { count++; div.appendChild(super.getGraphic("Min. Šířka :", "input/text", position.VERTICAL, "s/min-width")); }
        if (super.getNastaveni(arr)[3]) { count++; div.appendChild(super.getGraphic("Min. Výška :", "input/text", position.VERTICAL, "s/min-height")); }
        if (super.getNastaveni(arr)[4]) { count++; div.appendChild(super.getGraphic("Max. Šířka :", "input/text", position.VERTICAL, "s/max-width")); }
        if (super.getNastaveni(arr)[5]) { count++; div.appendChild(super.getGraphic("Max. Výška :", "input/text", position.VERTICAL, "s/max-height")); }

        return count == 0 ? null : div;

    }


}
