class Component {

    constructor(id){

        this.id = id;

    }





    getRozmery(){

        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "ROZMĚRY";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        div.appendChild(this.getGraphic("Šířka :", "input/text", position.VERTICAL, "s/width"));
        div.appendChild(this.getGraphic("Výška :", "input/text", position.VERTICAL, "s/height"));
        div.appendChild(this.getGraphic("Min. Šířka :", "input/text", position.VERTICAL, "s/min-width"));
        div.appendChild(this.getGraphic("Min. Výška :", "input/text", position.VERTICAL, "s/min-height"));
        div.appendChild(this.getGraphic("Max. Šířka :", "input/text", position.VERTICAL, "s/max-width"));
        div.appendChild(this.getGraphic("Max. Výška :", "input/text", position.VERTICAL, "s/max-height"));

        return div;
    }

    getHodnoty(){

        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "HODNOTY";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        div.appendChild(this.getGraphic("Default :", "input/text", position.HORIZONTAL, "f/value"));
        div.appendChild(this.getGraphic("Popisek :", "input/text", position.HORIZONTAL, "f/title"));
        div.appendChild(this.getGraphic("Minimum :", "input/number", position.VERTICAL, "f/min"));
        div.appendChild(this.getGraphic("Maximum :", "input/number", position.VERTICAL, "f/max"));
        div.appendChild(this.getGraphic("Krok :", "input/number", position.VERTICAL, "f/step"));

        return div;
    }

    getBarva(){

        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "BARVA";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        div.appendChild(this.getGraphic("Text :", "input/color", position.VERTICAL, "s/color"));
        div.appendChild(this.getGraphic("Text hover :", "input/color", position.VERTICAL, "h/color"));
        div.appendChild(this.getGraphic("Pozadí :", "input/color", position.VERTICAL, "s/background-color"));
        div.appendChild(this.getGraphic("Pozadí hover :", "input/color", position.VERTICAL, "h/background-color"));
        div.appendChild(this.getGraphic("Šířka rámečku :", "input/text", position.VERTICAL, "s/border-width"));
        div.appendChild(this.getGraphic("Š. rámečku hover:", "input/text", position.VERTICAL, "h/border-width"));
        div.appendChild(this.getGraphic("Barva rámečku :", "input/color", position.VERTICAL, "s/border-color"));
        div.appendChild(this.getGraphic("B. rámečku hover:", "input/color", position.VERTICAL, "h/border-color"));

        return div;
    }

    getMargin(){

        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "MARGIN";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        div.appendChild(this.getGraphic("Nahoře :", "input/text", position.VERTICAL, "s/margin-top"));
        div.appendChild(this.getGraphic("Dole :", "input/text", position.VERTICAL, "s/margin-bottom"));
        div.appendChild(this.getGraphic("Vlevo :", "input/text", position.VERTICAL, "s/margin-left"));
        div.appendChild(this.getGraphic("Vpravo :", "input/text", position.VERTICAL, "s/margin-right"));


        return div;
    }

    getPadding(){

        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "PADDING";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        div.appendChild(this.getGraphic("Nahoře :", "input/text", position.VERTICAL, "s/padding-top"));
        div.appendChild(this.getGraphic("Dole :", "input/text", position.VERTICAL, "s/padding-bottom"));
        div.appendChild(this.getGraphic("Vlevo :", "input/text", position.VERTICAL, "s/padding-left"));
        div.appendChild(this.getGraphic("Vpravo :", "input/text", position.VERTICAL, "s/padding-right"));

        return div;
    }

    getGraphic(textLabel, inputType, position, style){


        let div = document.createElement("div");
        div.setAttribute("ID", position == 0? "graphicVertical" : "graphicHorizontal");
        let label = document.createElement("label");
        label.textContent = textLabel;
        div.appendChild(label);
        let input = document.createElement(inputType.split("/")[0]);
        if(inputType.split("/")[1] == "color")
        input.style.setProperty("padding", "0px");
        input.setAttribute("type", inputType.split("/")[1]);
        input.setAttribute("name", style);
        input.addEventListener("click", enterElement);
        input.addEventListener("input", leaveElement);
        input.addEventListener("focusout", leaveElement);

        div.appendChild(input);

        return div;

    }


}
