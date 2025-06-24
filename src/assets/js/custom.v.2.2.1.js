let fibonacciSecuencia = [0, 1];
let contador = 2; 

var seccionBotones = document.getElementById('seccionBotones');
var botonFibonacci = document.createElement('button');
botonFibonacci.textContent = 'Aumentar secuencia';
seccionBotones.appendChild(botonFibonacci);

var parrafo = document.getElementById('parrafoSecundario');
parrafo.textContent = 'Secuencia:';

botonFibonacci.onclick = () => {
  let siguiente = fibonacciSecuencia[contador - 1] + fibonacciSecuencia[contador - 2];
  fibonacciSecuencia.push(siguiente);
  contador++;

  parrafo.textContent = 'Secuencia: ' + fibonacciSecuencia.join(', ');
};

