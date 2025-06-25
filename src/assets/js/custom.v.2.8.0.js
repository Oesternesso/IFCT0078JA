let textoInput = document.getElementById('campoInput');
let mensajeInput = document.getElementById('mensajeInput');


textoInput.oninput = () => {
    mensajeInput.textContent = textoInput.value;

    if (textoInput.value.length <= 3) {
        mensajeInput.classList.add('error');
    } else {
        mensajeInput.classList.remove('error');
    }
};