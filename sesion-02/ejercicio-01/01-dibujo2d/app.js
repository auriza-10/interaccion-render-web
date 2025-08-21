// obtener refernencias del canvas.
const canvas = document.getElementById("lienzo");

// sincronizar dimensiones del canvas con el viewport.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

console.log(canvas);

// definir si es 2d o 3d.
const ctx = canvas.getContext('2d');

// definir los estilos de la línea.
ctx.strokeStyle = 'red'; // color de la línea
ctx.lineWidth = 2; // grosor de la línea

// definir los puntos que hace la línea.
// ctx.moveTo(x, y);
ctx.moveTo(190, 144); // punto inicial
ctx.lineTo(390, 144); // punto final

ctx.moveTo(190, 244); // punto inicial de la segunda línea
ctx.lineTo(390, 244); // punto final de la segunda línea

ctx.moveTo(190, 344); // punto inicial de la tercera línea
ctx.lineTo(390, 344); // punto final de la tercera línea

// renderizar la línea.
ctx.stroke();

// definir estilos del rectángulo.
ctx.beginPath(); // iniciar un nuevo camino
ctx.fillStyle = 'blue'; // color de relleno
ctx.lineWidth = 6; // grosor del borde
ctx.strokeStyle = 'black'; // color del borde

// definir el rectángulo.
// ctx.rect(x, y, width, height);
ctx.rect(450, 140, 300, 100); // posición y dimensiones del rectángulo


// renderizar el rectángulo.
ctx.fill(); // rellena el rectángulo
ctx.stroke(); // dibuja el borde del rectángulo

// sintaxis elipse o círculo
ctx.beginPath(); // iniciar un nuevo camino

// estilos de la elipse
ctx.strokeStyle = 'green'; // color del borde
ctx.fillStyle = 'yellow'; // color de relleno

// definimos la elipse
// ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
ctx.ellipse(50, 150, 30, 30, 0, 0, Math.PI * 1.5);

// renderizamos la elipse
ctx.fill();
ctx.stroke();



