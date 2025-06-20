const anioActual = new Date().getFullYear();
var anioNacimiento = Number(prompt("Introduzca su año de nacimiento"));
var miAlert = alert;

function CalculoEdad(){
    // return alert("La edad es: "+ anioActual - anioNacimiento);
    return miAlert(`La edad es: ${anioActual - anioNacimiento}`);
}

CalculoEdad();











