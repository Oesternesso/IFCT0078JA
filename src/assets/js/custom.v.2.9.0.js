document.addEventListener("DOMContentLoaded", (event) => {



    let botonGuardar = document.createElement('button');
    botonGuardar.id = 'botonGuardar';
    botonGuardar.textContent = 'Guardar';
    botonGuardar.type = 'submit';
    botonGuardar.disabled = true;



    let formulario = document.getElementById('elFormulario');
    let msgInput = document.getElementById('mensajeInput');
    formulario.appendChild(botonGuardar);

    let nombre = document.getElementById('campoNombre');
    let edad = document.getElementById('campoEdad');


    function validarNombre() {
        if (nombre.value !== "" && nombre.value.length >= 3);

    };

    function validarEdad() {
        if (!!!isNaN(edad.value) && parseInt(edad.value) >= 18);

    };

    function validacionFormulario() {

        if (validarNombre && validarEdad) {
            botonGuardar.disabled = false;
            msgInput.classList.add('correct');
            msgInput.textContent = 'El formulario es válido';
            return true;

        }
        else {
            botonGuardar.disabled = true;
            msgInput.classList.add('error');
            msgInput.textContent = 'El formulario no es válido';
            return false;
        };
    }
    nombre.addEventListener("keyup", validarNombre);
    nombre.addEventListener("blur", validarNombre);
    nombre.addEventListener ("focus", validarNombre);

    edad.addEventListener("focus",validarEdad);
    edad.addEventListener("keyup", validarEdad);
    edad.addEventListener("blur", validarEdad);

    
    formulario.addEventListener("submit", (ev) => {validarNombre, validarEdad, validacionFormulario});
    

});
