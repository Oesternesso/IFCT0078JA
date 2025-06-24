let botonLista = document.createElement('button');
botonLista.id = 'botonAgregarElemento';
botonLista.textContent = 'Agregar elemento a la lista';
document.getElementById('seccionBotones').appendChild(botonLista);

let lista = document.getElementById('miLista');

let elementosLista = 0;

botonLista.onclick = () => {
let nuevoEl = document.createElement('li');

  nuevoEl.textContent = `Nuevo elemento ${elementosLista}`;

  lista.appendChild(nuevoEl);

  elementosLista++;
};


