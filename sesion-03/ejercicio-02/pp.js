console.log("Sesion 03 - Ejercicio 02");

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
ctx.strokeStyle = 'blue'; // color de la línea
ctx.lineWidth = 20; // grosor de la línea
ctx.ellipse(500, 350, 100, 100, 0, 0, 2 * Math.PI);
ctx.stroke();

// 5. Agrupar en una función
// con parametros para dibujar circulos en diferentes posiciones
// sin repetir todo el código
function dibujarCirculo(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = 'blue'; // color de la línea
    ctx.lineWidth = 20; // grosor de la línea
    ctx.ellipse(x, y, 100, 100, 0, 0, Math.PI*2);
    ctx.stroke();
}   

dibujarCirculo(200, 350);
dibujarCirculo(800, 350);
dibujarCirculo(500, 350);

const circulo = {
    colorLinea: 'blue',
    grosorLinea: 20,
    radio: 100,
    rotacion: 0,
    anguloInicial:0,
    anguloFinal: Math.PI*2,
    x: 400,
    y: 200,
    dibujar: function(x, y) {
        ctx.beginPath();
        ctx.strokeStyle = circulo.colorLinea; // color de la línea
        ctx.lineWidth = circulo.grosorLinea; // grosor de la línea
        ctx.ellipse(x, y, circulo.radio, circulo.radio, circulo.rotacion, circulo.anguloInicial, circulo.anguloFinal);
        ctx.stroke();

    }
}

circulo.dibujar(500, 500);

// Crear eventListener
window.addEventListener("mousedown", function (eventData) {
    circulo.dibujar(eventData.clientX, eventData.clientY);
});

