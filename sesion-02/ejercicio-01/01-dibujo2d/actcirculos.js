const canvas = document.getElementById("lienzo");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Definir contexto 2D
const ctx = canvas.getContext('2d');

// Estilo de los círculos
ctx.strokeStyle = 'white';
ctx.lineWidth = 3;


ctx.beginPath();
ctx.ellipse(200, 180, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 210, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 240, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 270, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 300, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 330, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 360, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 390, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 410, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 440, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 470, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();


  //1. Eacuchar que el mouse se mueve
  window.addEventListener("mousemove", function (eventData) {
//console.log('hola X:', eventData.x);
//console.log('hola Y:', eventData.y);

// Limpiar Canvas
// ctx.clearRect(x, y, width, height);
ctx.clearRect(0, 0, canvas.width, canvas.height);


ctx.beginPath();
ctx.ellipse(200, 180, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 210, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 240, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 270, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 300, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 330, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 360, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 390, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 410, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 440, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 470, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.ellipse(eventData.x, eventData.y, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();
});

// 2. Escuchar el mouse presionado
window.addEventListener("mousedown", function (eventData) {
  console.log("mouse down");

   // 2.1 Actializar los estilos
ctx.strokeStyle = 'red';

   // 2.2 Renderizar otra vez nuestras figuras

// Limpiar Canvas
// ctx.clearRect(x, y, width, height);
//ctx.clearRect(0, 0, canvas.width, canvas.height);


ctx.beginPath();
ctx.ellipse(200, 180, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 210, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 240, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 270, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 300, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 330, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 360, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 390, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 410, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 440, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 470, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();
});

// 3. Escuchar cuando soltamos el click
window.addEventListener("mouseup", function (eventData) {
  console.log("mouse up");

  ctx.strokeStyle = 'white';

   // 2.2 Renderizar otra vez nuestras figuras

// Limpiar Canvas
// ctx.clearRect(x, y, width, height);
//ctx.clearRect(0, 0, canvas.width, canvas.height);


ctx.beginPath();
ctx.ellipse(200, 180, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 210, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 240, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 270, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 300, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 330, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 360, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 390, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 410, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 440, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(200, 470, 120, 120, 0, 0, 2 * Math.PI);
ctx.stroke();
});


//1. Crear la referencia al botón de HTML
const button = document.getElementById("boton");
console.log(boton);

// 2. Agregar un "event listener" a ese botono
boton.addEventListener("mousedown", function () {
  console.log("mouse down en el botón");

  //Definimos estilos
  ctx.fillStyle = 'red';

  //Iniciamos trazo
  ctx.beginPath();

  // definimos figura
  ctx.rect(50, 100, 300, 50);

  //renderizamos
  ctx.fill();


});



