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
 