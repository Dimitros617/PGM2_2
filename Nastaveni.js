class Nastaveni {


    constructor(min, max, krok) {
         this.min = min;
        this.max = max;
        this.krok = krok; 
    }


    


    synchronize(newStyle) {
        document.getElementById('previewItem').style = newStyle;
    }
}
