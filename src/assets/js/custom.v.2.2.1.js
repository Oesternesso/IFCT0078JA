let fibonacciSecuencia = [0, 1];
let secuencia = 2; 

var seccionBotones = document.getElementById('seccionBotones');
var botonFibonacci = document.createElement('button');
botonFibonacci.textContent = 'Aumentar secuencia';
botonFibonacci.id = 'botonFibonacci';
seccionBotones.appendChild(botonFibonacci);

var parrafo = document.getElementById('parrafoSecundario');
parrafo.textContent = 'Secuencia:';

botonFibonacci.onclick = () => {
  let siguiente = fibonacciSecuencia[secuencia - 1] + fibonacciSecuencia[secuencia - 2];
  fibonacciSecuencia.push(siguiente);
  secuencia++;

  parrafo.textContent = 'Secuencia: ' + fibonacciSecuencia.join(', ');
};

