/*<!boton dark mode--- >*/
var toggle = document.getElementById('conteiner');
var body = document.body;
var sponsor = document.getElementById('patrocinio');
var celdas = document.querySelectorAll('.celda');
var subCabecera = document.querySelectorAll('.subCabecera');
var ul = document.querySelector('ul');
var secSub = document.querySelectorAll('.secSub');

if (toggle) {
    toggle.onclick = function() {
        toggle.classList.toggle('active');
        body.classList.toggle('active');
        if (sponsor) sponsor.classList.toggle('active');

        subCabecera.forEach(function(element) {
            element.classList.toggle('active');
        });
        secSub.forEach(function(element) {
            element.classList.toggle('active');
        });
        if (ul) ul.classList.toggle('active');

        celdas.forEach(function(celda) {
            celda.classList.toggle('active');
        });
    };
}
