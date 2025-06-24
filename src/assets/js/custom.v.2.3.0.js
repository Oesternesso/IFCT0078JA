
var botonToggle = document.createElement('button');
botonToggle.textContent = "Ocultar contenido"
document.getElementById('seccionBotones').appendChild(botonToggle);
let el = document.getElementById('parrafoPrincipal');

botonToggle.onclick = () => {
    if (el.style.visibility == "hidden") {
        el.style.visibility = "visible"
    } else {
        el.style.visibility = "hidden"
    };
};
