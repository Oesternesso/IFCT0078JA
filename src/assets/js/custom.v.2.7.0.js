let imagen = document.createElement('img');
imagen.src = 'https://static01.nyt.com/images/2024/10/01/multimedia/30mutombo-ESP-00/30Mutombo-zkvw-videoSixteenByNine3000.jpg';
imagen.alt = 'Foto de Dikembe Mutombo';
imagen.width = 600;
imagen.height = 300;
imagen.style.visibility = "hidden";
imagen.title = 'Jugador de baloncesto con el dorsal 55, alzando el puño derecho y levantando el dedo índice mirando a la grada';

document.getElementById('contenedorImagen').appendChild(imagen);

let botonImagen = document.createElement('button');
botonImagen.id = 'botonMostrarImagen';
botonImagen.textContent = 'Mostrar imagen';
document.getElementById('seccionBotones').appendChild(botonImagen);

botonImagen.onclick = () => {
    if (imagen.style.visibility == "hidden") {
        imagen.style.visibility =  "visible"
    } else {
        imagen.style.visibility = "hidden"
    };
};