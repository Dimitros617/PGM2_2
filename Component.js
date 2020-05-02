

class Component {

    constructor(id) {

        if(id == null)
            return;
            
        try {
            document.getElementById('previewItem').parentNode.removeChild(document.getElementById('previewItem'));
            document.getElementById('localNastaveni').parentNode.removeChild(document.getElementById('localNastaveni'));
        } catch (error) { }


        let physicComponent = this.vytvorKomponentu(id);
        physicComponent.setAttribute("id", "previewItem");

        document.getElementById("nahled").appendChild(physicComponent);

    }

    getNastaveni(nastaveni){

        let arr = [];
        let editComponent = nastaveni.split('/');
        let j = 0;

        for (let i = 0; i < editComponent.length; i++) {

            while (editComponent[i] != j) {

                arr.push(false);
                j++;
            }
            arr.push(true);
            j++;
        }

        return arr;

    }


    /**
     * 
     * @param {number} num = id komponenty z hlavního seznamu
     */
    vytvorKomponentu(num) {

        switch (parseInt(num)) {
            case 1:
                return document.createElement('input')
            case 2:
                return document.createElement('textarea')

            case 3:

                let x = document.createElement('select');
                let z = document.createElement("option");
                z.setAttribute("value", "0");
                let t = document.createTextNode("Rozevírací seznam");
                z.appendChild(t);
                x.appendChild(z);
                return x;

            case 4:
                let number = document.createElement('input');
                number.setAttribute("type", "number");
                return number;

            case 5:
                let range = document.createElement('input');
                range.setAttribute("type", "range");
                return range;

            case 6:
                let btn = document.createElement("BUTTON");
                btn.innerHTML = "TLAČÍTKO";
                return btn;

            default:
                break;
        }
    }


    getGraphic(textLabel, inputType, position, style) {


        let div = document.createElement("div");
        div.setAttribute("ID", position == 0 ? "graphicVertical" : "graphicHorizontal");
        let label = document.createElement("label");
        label.textContent = textLabel;
        div.appendChild(label);
        let input = document.createElement(inputType.split("/")[0]);
        if (inputType.split("/")[1] == "color")
            input.style.setProperty("padding", "0px");
        input.setAttribute("type", inputType.split("/")[1]);
        input.setAttribute("name", style);
        input.addEventListener("click", () => this.enterElement());
        input.addEventListener("input", leaveElement);
        input.addEventListener("focusout", leaveElement);

        div.appendChild(input);

        return div;

    }


    enterElement(x) {
        document.getElementById("check").textContent = "✖";
    }

    leaveElement(x) {

        let t = x.target;
        let type = t.name.split("/")[0];
        let style = t.name.split("/")[1];

        if (type == "s") {

            document.getElementById("previewItem").style.setProperty(style, t.value.toLowerCase().replace(' ', ''));

        }
        else if (type == "f") {

            document.getElementById("previewItem").setAttribute(style, t.value.toLowerCase().replace(' ', ''));

        }
        else {

            document.getElementById("previewItem").onmouseover = function () {
                this.setAttribute("slot", document.getElementById("previewItem").style.getPropertyValue(style));
                this.style.setProperty(style, t.value.toLowerCase());
            }

            document.getElementById("previewItem").onmouseout = function () {
                this.style.setProperty(style, this.slot);
            }

        }

        document.getElementById("check").textContent = "✔";
        document.getElementById("htmlCode").textContent = document.getElementById("previewItem").outerHTML;

    }

}
