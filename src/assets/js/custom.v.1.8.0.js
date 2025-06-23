var numero = Number(prompt("Introduzca un número"));
var suma = 0;

[...numero.toString()].forEach(op => {
    suma += parseInt(op);
    }
);
console.log(suma);