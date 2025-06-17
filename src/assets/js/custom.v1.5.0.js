const celsius = Number(prompt("Introduzca grados Celsius para convertirlos a Farenheit"));
const farenheit = Number(prompt("Introduzca grados Farenheit para convertirlos a Celsius "));


function celsiusAFahrenheit(){
   let F = (celsius * 9/5) + 32;
   return console.log("La conversión Celsius a Fahrenheit es de" + F + "Fº");
   
}
celsiusAFahrenheit();

function farenheitACelsius(){
    let C = (farenheit - 32) * 5/9;
    return console.log("La conversión Fahrenheit a Celsius es de" + C + "Cº");

} 
farenheitACelsius();

