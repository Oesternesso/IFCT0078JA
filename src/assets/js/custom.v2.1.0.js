const boton = document.createElement('button');
boton.textContent ='Cambiar color';
boton.id = 'botonCambioColor';

boton.addEventListener ('click', function(){
    let colorRandom = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6 , '0');
    document.body.style.backgroundColor = colorRandom;
});

document.getElementById('seccionBotones').appendChild(boton);