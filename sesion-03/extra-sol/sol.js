// obtener refernencias del canvas.
const canvas = document.getElementById("lienzo");

// sincronizar dimensiones del canvas con el viewport.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

console.log(canvas);

// definir si es 2d o 3d.
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black'; // color de la línea
ctx.lineWidth = 15; // grosor de la línea

ctx.beginPath();
ctx.moveTo(220, 580); // esquina superior izquierda del tache
ctx.lineTo(755, 150); // esquina inferior derecha del tache
ctx.moveTo(220, 150); // esquina superior derecha del tache
ctx.lineTo(755, 580); // esquina inferior izquierda del tache
ctx.stroke();

ctx.beginPath();
ctx.moveTo(487, 150); // línea vertical arriba
ctx.lineTo(487, 580); // línea vertical abajo
ctx.moveTo(220, 365); // línea horizontal izquierda
ctx.lineTo(755, 365); // línea horizontal derecha
ctx.stroke();


ctx.beginPath();
ctx.fillStyle = 'white';
ctx.ellipse(487, 365, 100, 100, 0, 0, 2 * Math.PI);
ctx.fill();


ctx.beginPath();
ctx.ellipse(487, 365, 70, 70, 0, 0, 2 * Math.PI);
ctx.stroke();
