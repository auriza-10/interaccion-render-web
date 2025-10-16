// obtener refernencias del canvas.
const canvas = document.getElementById("lienzo");

// sincronizar dimensiones del canvas con el viewport.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

console.log(canvas);

// definir si es 2d o 3d.
const ctx = canvas.getContext('2d');

//rectangulo
ctx.fillStyle = 'red'; 
ctx.lineWidth = 6;

// definir el rectángulo.
// ctx.rect(x, y, width, height);
var altoRect= 100;
var anchoRect= 300;
ctx.rect(canvas.width/2 - anchoRect/2, canvas.height/2 - altoRect/2, anchoRect, altoRect); // posición y dimensiones del rectángulo

// renderizar el rectángulo.
ctx.fill();

// circulo al extremo
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.lineWidth = 6;

// definir el círculo.
// ctx.arc(x, y, radius, starAngle, endAngle);
var radioCirculo= 50;
ctx.arc(canvas.width - radioCirculo - 10, canvas.height - radioCirculo - 10, radioCirculo, 0, 2 * Math.PI); // posición y dimensiones del círculo

// renderizar el círculo.
ctx.fill();

// circulo extremo izquierdo
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.lineWidth = 6;

// definir el círculo.
// ctx.arc(x, y, radius, starAngle, endAngle);
var radioCirculo= 100;
ctx.arc(radioCirculo + 10, canvas.height - radioCirculo - 10, radioCirculo, 0, 2 * Math.PI); // posición y dimensiones del círculo

// renderizar el círculo.
ctx.fill();

// rectangulo al extremo
ctx.beginPath();
ctx.fillStyle = 'purple';
ctx.lineWidth = 6;

// definir el rectángulo.
// ctx.rect(x, y, width, height);
var altoRect= 150;
var anchoRect= 200;
ctx.rect(10, 10, anchoRect, altoRect); // posición y dimensiones del rectángulo

// renderizar el rectángulo.
ctx.fill();

// línea diagonal
ctx.beginPath();
ctx.strokeStyle = 'black'; // color de la línea
ctx.lineWidth = 4;
ctx.moveTo(0, 0); // punto inicial
ctx.lineTo(canvas.width, canvas.height); // punto final
ctx.stroke();
