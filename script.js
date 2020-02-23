
function zmena(input) {
    
    document.getElementById('number').value = input;
    document.getElementById('range').value = input;

    vykreslyTabulku(input);

}

function vykreslyTabulku(size) {

    let tabulka = document.getElementById('tabulka');
    
    while(tabulka.rows.length > 0)
        tabulka.deleteRow(0);

    for (let i = 0; i < size; i++) {
        
        var row = tabulka.insertRow(0);
        for (let j = 0; j < size; j++) {
        
            row.insertCell(j).innerHTML = 1 + Math.floor((11 - 1) * Math.random());
        
        }
        
    }
    
}


