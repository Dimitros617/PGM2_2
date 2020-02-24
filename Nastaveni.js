class Nastaveni {

    /**
     * 
     * @param {number} min 
     * @param {number} max 
     * @param {number} krok 
     */
    constructor(min, max, krok) {
         this.min = min;
        this.max = max;
        this.krok = krok; 
    }

    synchronize(hodnota) {
        document.getElementById('number').value = hodnota;
        document.getElementById('range').value = hodnota;
    }
}
