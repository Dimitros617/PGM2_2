class poleASCII {

    pole;

    constructor(x, y) {

        var arr = new Array();
        for (let i = x; i <= y; i++) {
            arr[i - x] = i;
        }

        this.pole = arr;
    }

    getValue(index){

        return String.fromCharCode(this.pole[index]);

    }

}
