const canvas = document.getElementById("lienzo");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

// Definir contexto 2D
const ctx = canvas.getContext('2d');

// Estilo de los círculos
ctx.strokeStyle = 'white'; 
ctx.lineWidth = 3; 

// Número de círculos
const totalCircles = 11;

// Tamaño fijo para los círculos
const radius = 150; 

// Coordenadas fijas en el eje X 
const centerX = canvas.width / 2;

// Espaciado entre los círculos en el eje Y
const spaceY = 30; 

// hacer la escalera de círculos
for (let i = 0; i < totalCircles; i++) {

  // Desplazamiento en el eje Y 
  const offsetY = i * spaceY; 

  // Dibuja el círculo con la misma posición X y un desplazamiento en Y
  ctx.beginPath();
  ctx.ellipse(centerX, canvas.height / 2 - (totalCircles * spaceY / 2) + offsetY, radius, radius, 0, 0, 2 * Math.PI);
  // Renderizar el círculo
  ctx.stroke(); 
}
