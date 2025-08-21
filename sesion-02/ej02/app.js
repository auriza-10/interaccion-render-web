console.log('Ejercicio 01. Render imagen 2d.');

//1. comfigurar canvas.
const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 2. cargar imagen.
var img= new Image();

// 2.1 Especificar cual imagen cargar.
var path = "./imagenes/nomin.jpeg";
img.src = path;

// 3. Renderizar imagen.
img.onload= function() {
    console.log('cargo mi imagen');


// 4. Renderizar imagen
//ctx.drawImage(img, x, yield, width, height);
// image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
ctx.drawImage(img, 50, 50, 820, 600);

}