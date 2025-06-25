let botonCambiarEstilo = document.getElementById("botonCambiarEstilo");
let parrafoPrincipal = document.getElementById("parrafoPrincipal");
let h1 = document.querySelector("h1");
 
let botonH1 = document.createElement("button");
botonH1.id = "botonH1"; 
botonH1.textContent = "Cambiar estilo H1 "; 

document.getElementById("seccionBotones")?.appendChild(botonH1);
 
botonCambiarEstilo.onclick = () => {
  parrafoPrincipal.classList.toggle("destacado");
};
 
botonH1.onclick = () => {

  let color1 = Math.floor(Math.random() * 256);
  let color2 = Math.floor(Math.random() * 256);
  let color3 = Math.floor(Math.random() * 256);
 
  h1.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
};