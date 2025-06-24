var parrafo = document.getElementById('parrafoSecundario');
var seccionBotones = document.getElementById('seccionBotones');
let contador = 0;
let initialText = parrafo.textContent;

function contadorActual() {
    parrafo.textContent = `${initialText} ${contador}`;
}

let aumentar = document.createElement('button');
aumentar.textContent = `+`;
aumentar.onclick = () => {
    contador++;
    contadorActual();
};

let disminuir = document.createElement('button');
disminuir.textContent = '-';
disminuir.onclick = () => {
    contador--;
    contadorActual();
};


document.getElementById('seccionBotones').appendChild(aumentar);
document.getElementById('seccionBotones').appendChild(disminuir);