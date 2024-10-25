







/* REVISAR
function validarFormulario(){
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const texto = document.getElementById("texto").value;


    let mostrarMensaje = `Datos Ingresados:<br>`;
            mostrarMensaje += `Nombre: ${nombre}<br>`;       
            mostrarMensaje += `Correo Electronico: ${correo}<br>`;
            mostrarMensaje += `Numero de Telefono: ${telefono}<br>`;
            mostrarMensaje += `Mensaje Enviado: ${texto}<br>`;
            
            
            const mensaje = document.getElementById("mensaje");
            mensaje.innerHTML = mostrarMensaje;
        
               
}
*/


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
