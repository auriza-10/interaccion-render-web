const canvas = document.getElementById("lienzo");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black'; 
ctx.lineWidth = 78; 

// ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
ctx.ellipse(250, 200, 120, 120, 0, 0, 2 * Math.PI);

ctx.stroke();

// círculo 2
ctx.beginPath();

ctx.strokeStyle = 'black'; 
ctx.lineWidth = 35; 

const totalCircles = 2;

// Radios de los círculos
const bigRadius = 140;  
const smallRadius = 70; 

for (let i = 0; i < totalCircles; i++) {

  // Condicional para alternar el tamaño de los círculos
  const radius = i === 0 ? bigRadius : smallRadius; 
  
  ctx.beginPath();
  ctx.ellipse(572, 200, radius, radius, 0, 0, 2 * Math.PI);

  ctx.stroke();
}

// círculo 3
ctx.beginPath();

ctx.strokeStyle = 'black'; 
ctx.lineWidth = 19; 

const totalCirculo = 4;

const radio = [150, 115, 75, 35];

for (let i = 0; i < totalCirculo; i++) {
    const radius = radio[i];
 

  ctx.beginPath();
  ctx.ellipse(572, 523, radius, radius, 0, 0, 2 * Math.PI);

  ctx.stroke(); 
  
}

// círculo 4
ctx.beginPath();

ctx.strokeStyle = 'black'; 
ctx.lineWidth = 9; 

const totalCirculos = 8;

const radios = [153, 133, 113, 93, 73, 53, 33, 13];

for (let i = 0; i < totalCirculos; i++) {
  const radius = radios[i];
  
  ctx.beginPath();
  ctx.ellipse(250, 523, radius, radius, 0, 0, 2 * Math.PI);
  ctx.stroke(); 
}
