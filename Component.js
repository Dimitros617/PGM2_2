

class Component {

    constructor(nastaveni){

        this.nastaveni = [];
        let editComponent = nastaveni.split('/');
        let j = 0;

         for (let i = 0; i < editComponent.length; i++) {

            while(editComponent[i] != j){

                this.nastaveni.push(false);
                j++;
            }
            this.nastaveni.push(true);
            j++;
            
        }


    }


    getRozmery(){

        let count = 0;
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "ROZMĚRY";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        if(this.nastaveni[0]){ count++; div.appendChild(this.getGraphic("Šířka :", "input/text", position.VERTICAL, "s/width"));}
        if(this.nastaveni[1]){ count++; div.appendChild(this.getGraphic("Výška :", "input/text", position.VERTICAL, "s/height"));}
        if(this.nastaveni[2]){ count++; div.appendChild(this.getGraphic("Min. Šířka :", "input/text", position.VERTICAL, "s/min-width"));}
        if(this.nastaveni[3]){ count++; div.appendChild(this.getGraphic("Min. Výška :", "input/text", position.VERTICAL, "s/min-height"));}
        if(this.nastaveni[4]){ count++; div.appendChild(this.getGraphic("Max. Šířka :", "input/text", position.VERTICAL, "s/max-width"));}
        if(this.nastaveni[5]){ count++; div.appendChild(this.getGraphic("Max. Výška :", "input/text", position.VERTICAL, "s/max-height"));}
    
        return count == 0? null : div;
    }

    getHodnoty(){

        let count = 0;
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "HODNOTY";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        if(this.nastaveni[6]){ count++; div.appendChild(this.getGraphic("Default :", "input/text", position.HORIZONTAL, "f/value"));}
        if(this.nastaveni[7]){ count++; div.appendChild(this.getGraphic("Popisek :", "input/text", position.HORIZONTAL, "f/title"));}
        if(this.nastaveni[8]){ count++; div.appendChild(this.getGraphic("Minimum :", "input/number", position.VERTICAL, "f/min"));}
        if(this.nastaveni[9]){ count++; div.appendChild(this.getGraphic("Maximum :", "input/number", position.VERTICAL, "f/max"));}
        if(this.nastaveni[10]){ count++; div.appendChild(this.getGraphic("Krok :", "input/number", position.VERTICAL, "f/step"));}

        return count == 0? null : div;

    }

    getBarva(){

        let count = 0;
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "BARVA";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        if(this.nastaveni[11]){ count++; div.appendChild(this.getGraphic("Text :", "input/color", position.VERTICAL, "s/color"));}
        if(this.nastaveni[15]){ count++; div.appendChild(this.getGraphic("Text hover :", "input/color", position.VERTICAL, "h/color"));}
        if(this.nastaveni[12]){ count++; div.appendChild(this.getGraphic("Pozadí :", "input/color", position.VERTICAL, "s/background-color"));}
        if(this.nastaveni[16]){ count++; div.appendChild(this.getGraphic("Pozadí hover :", "input/color", position.VERTICAL, "h/background-color"));}
        if(this.nastaveni[13]){ count++; div.appendChild(this.getGraphic("Šířka rámečku :", "input/text", position.VERTICAL, "s/border-width"));}
        if(this.nastaveni[17]){ count++; div.appendChild(this.getGraphic("Š. rámečku hover:", "input/text", position.VERTICAL, "h/border-width"));}
        if(this.nastaveni[14]){ count++; div.appendChild(this.getGraphic("Barva rámečku :", "input/color", position.VERTICAL, "s/border-color"));}
        if(this.nastaveni[18]){ count++; div.appendChild(this.getGraphic("B. rámečku hover:", "input/color", position.VERTICAL, "h/border-color"));}
       
        return count == 0? null : div;

    }

    getPadding(){

        let count = 0;
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "PADDING";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        if(this.nastaveni[19]){ count++; div.appendChild(this.getGraphic("Nahoře :", "input/text", position.VERTICAL, "s/padding-top"));}
        if(this.nastaveni[20]){ count++; div.appendChild(this.getGraphic("Dole :", "input/text", position.VERTICAL, "s/padding-bottom"));}
        if(this.nastaveni[21]){ count++; div.appendChild(this.getGraphic("Vlevo :", "input/text", position.VERTICAL, "s/padding-left"));}
        if(this.nastaveni[22]){ count++; div.appendChild(this.getGraphic("Vpravo :", "input/text", position.VERTICAL, "s/padding-right"));}

        return count == 0? null : div;

    }

    getMargin(){

        let count = 0;
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.textContent = "MARGIN";
        div.appendChild(h2);
        div.setAttribute("ID", "divBox");
        if(this.nastaveni[23]){ count++; div.appendChild(this.getGraphic("Nahoře :", "input/text", position.VERTICAL, "s/margin-top"));}
        if(this.nastaveni[24]){ count++; div.appendChild(this.getGraphic("Dole :", "input/text", position.VERTICAL, "s/margin-bottom"));}
        if(this.nastaveni[25]){ count++; div.appendChild(this.getGraphic("Vlevo :", "input/text", position.VERTICAL, "s/margin-left"));}
        if(this.nastaveni[26]){ count++; div.appendChild(this.getGraphic("Vpravo :", "input/text", position.VERTICAL, "s/margin-right"));}


        return count == 0? null : div;

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
