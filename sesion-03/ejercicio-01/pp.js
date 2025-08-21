console.log("Sesion 03 - Ejercicio 01");

//1. Referencia a <canvas>
const canvas = document.getElementById("lienzo");
console.log(canvas);

//2. Definir componentes
const ctx = canvas.getContext('2d');
console.log(ctx);

//3. Definir resolución
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 4. Instrucciones para dibujar un círculo
ctx.beginPath();
ctx.strokeStyle = 'green'; // color de la línea
ctx.lineWidth = 20; // grosor de la línea
ctx.ellipse(500, 350, 100, 100, 0, 0, 2 * Math.PI);
ctx.stroke();

// 5. Agrupar en una función
// con parametros para dibujar circulos en diferentes posiciones
// sin repetir todo el código
function dibujarCirculo(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = 'green'; // color de la línea
    ctx.lineWidth = 20; // grosor de la línea
    ctx.ellipse(x, y, 100, 100, 0, 0, Math.PI*2);
    ctx.stroke();
}   

dibujarCirculo(200, 350);
dibujarCirculo(800, 350);
dibujarCirculo(500, 350);

// 6. Escuchar el evento de mousemove oara dibujar circulos
window.addEventListener("mousemove", function (pantoja) {
    dibujarCirculo(pantoja.x, pantoja.y);
});
