const botonClick = document.getElementById("botónCambioColor");

botonClick.addEventListener ('click', function(){
    let colorRandom = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6 , '0');
    document.body.style.backgroundColor = colorRandom;
});