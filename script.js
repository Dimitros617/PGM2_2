
var previewKomponenta;
var nastaveni;

function load() {

    this.element = document.getElementById('element');
    this.resizer = document.createElement('div');
    this.resizer.className = 'resizer';
    this.resizer.style.width = '5px';
    this.resizer.style.height = '100%';
    this.resizer.style.background = '#aaaead';
    this.resizer.style.float = 'right';
    this.resizer.style.marginTop = '-164px';
    this.resizer.style.cursor = 'e-resize';
    this.element.appendChild(this.resizer);
    resizer.addEventListener('mousedown', initResize, false);
}

function initResize(e) {
    window.addEventListener('mousemove', Resize, false);
    window.addEventListener('mouseup', stopResize, false);
}
function Resize(e) {

    if (e.clientX < (window.innerWidth * 0.8) && e.clientX > (window.innerWidth * 0.3)) {
        this.element.style.width = (e.clientX - this.element.offsetLeft) + 'px';
        document.getElementById('preview').style.width = (window.innerWidth - (e.clientX - this.element.offsetLeft) - 100) + 'px';
        document.getElementById('preview').style.float = 'left';
        document.getElementById('css').style.width = (window.innerWidth - (e.clientX - this.element.offsetLeft) - 100) + 'px';
        document.getElementById('css').style.float = 'left';
    }

}
function stopResize(e) {
    window.removeEventListener('mousemove', Resize, false);
    window.removeEventListener('mouseup', stopResize, false);
}




function zmenaKomponentu(x) {

    try {
        document.getElementById('previewItem').parentNode.removeChild(document.getElementById('previewItem'));
        document.getElementById('localNastaveni').parentNode.removeChild(document.getElementById('localNastaveni'));
    } catch (error) { }

    this.previewKomponenta = vytvorKomponentu(parseInt(x.value));
    this.previewKomponenta.setAttribute("id", "previewItem");

    document.getElementById('nahled').appendChild(this.previewKomponenta);

    this.nastaveni = new Nastaveni(this.previewKomponenta, x.value);

}

/**
 * 
 * @param {number} num = id komponenty z hlavního seznamu
 */
function vytvorKomponentu(num) {

    switch (num) {
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

function enterElement(x){

    document.getElementById("check").textContent = "✖";


}

function leaveElement(x){

    let t = x.target;
    document.getElementById("check").textContent = "✔";
    document.getElementById("previewItem").style.setProperty(t.name, t.value.toLowerCase().replace(' ', ''));


}


