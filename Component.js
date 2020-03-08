class Component {

    constructor(id){

        this.id = id;

    }

    getHodnoty(){

        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "HODNOTY";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        div.appendChild(this.getGraphic("První hodnota :", "input", position.VERTICAL));
        div.appendChild(this.getGraphic("Test 2 :", "input", position.VERTICAL));
        div.appendChild(this.getGraphic("Test 22 :", "input", position.VERTICAL));
        div.appendChild(this.getGraphic("Test 22 :", "input", position.VERTICAL));
        div.appendChild(this.getGraphic("Test 3 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 33 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 5 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 3 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 33 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 5 :", "input", position.HORIZONTAL));

        div.appendChild(this.getGraphic("Test 3 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 33 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 5 :", "input", position.HORIZONTAL));



        return div;
    }

    getBarva(){

        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "BARVA";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        div.appendChild(this.getGraphic("První hodnota :", "input", position.VERTICAL));
        div.appendChild(this.getGraphic("Test 2 :", "input", position.VERTICAL));
        div.appendChild(this.getGraphic("Test 22 :", "input", position.VERTICAL));
        div.appendChild(this.getGraphic("Test 22 :", "input", position.VERTICAL));
        div.appendChild(this.getGraphic("Test 3 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 33 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 5 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 3 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 33 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 5 :", "input", position.HORIZONTAL));

        div.appendChild(this.getGraphic("Test 3 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 33 :", "input", position.HORIZONTAL));
        div.appendChild(this.getGraphic("Test 5 :", "input", position.HORIZONTAL));



        return div;
    }

    getRozmery(){

        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "ROZMĚRY";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        div.appendChild(this.getGraphic("Šířka :", "input", position.VERTICAL, "width"));
        div.appendChild(this.getGraphic("Výška :", "input", position.VERTICAL, "height"));
        div.appendChild(this.getGraphic("Min. Šířka :", "input", position.VERTICAL, "min-width"));
        div.appendChild(this.getGraphic("Min. Výška :", "input", position.VERTICAL, "min-height"));
        div.appendChild(this.getGraphic("Max. Šířka :", "input", position.VERTICAL, "max-width"));
        div.appendChild(this.getGraphic("Max. Výška :", "input", position.VERTICAL, "max-height"));




        return div;
    }

    getGraphic(textLabel, inputType, position, style){


        let div = document.createElement("div");
        div.setAttribute("ID", position == 0? "graphicVertical" : "graphicHorizontal");
        let label = document.createElement("label");
        label.textContent = textLabel;
        div.appendChild(label);
        let input = document.createElement(inputType);
        input.setAttribute("name", style);
        input.addEventListener("click", enterElement);
        input.addEventListener("focusout", leaveElement);

        div.appendChild(input);

        return div;

    }


}
