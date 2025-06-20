
let frutas = ["manzana", "naranja", "sandía", "melón", "plátano"];

console.log("Frutas indispensables:");
frutas.forEach(fruta=>{
    console.log(fruta);
});
let nuevaFruta = "paraguayo";
frutas.push(nuevaFruta);

 console.log("Con nuevas frutas:");
    frutas.forEach(fruta=>{
        console.log(fruta);
});