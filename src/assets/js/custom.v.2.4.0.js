let botonTexto = document.createElement("button");
botonTexto.id = "botonCambiarTexto";
botonTexto.textContent = "Cambiar texto del párrafo";
document.getElementById("seccionBotones").appendChild(botonTexto);


botonTexto.onclick = () => parrafoPrincipal.textContent = "El texto ha cambiado por javascript";