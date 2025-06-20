let palabra = prompt("Introduzca una palabra");
let contador = 0;

[...palabra.toLowerCase()].forEach(letra => ("aeiou".includes(letra) ? contador++ : null));

console.log("La palabra introducida" , palabra , "contiene" , contador , "vocales.");