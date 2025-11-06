console.log('main.js');

// 04. Mostrarlas en ciclo.
/* 
1. Crear una lista con la ubicación de las imágenes a renderizar.
2. Actualizar nuestra función para que lea un valor de esta lista para renderizar nuestra imagen.
3. Definir una variable “índice” que nos indique qué imagen debe renderizar nuestra función.
4. Avanzar 1 posición el valor del índice cada vez que creamos una imagen.
5. Usar este índice para definir qué valor en la lista queremos leer.
6. Reiniciar el índice al alcanzar el máximo.
*/

var imageList = [
    "./assets/p1.jpg",
    "./assets/p2.jpg",
    "./assets/p3.jpg",
    "./assets/p4.jpg",
    "./assets/p5.jpg",
    "./assets/p6.jpg",
];

var index = 0;

// 01. Renderizar 1 imagen.
/*
1. Crear etiqueta <img> virtual.
2. Cargar imagen desde una fuente (src).
3. Definir su estilo / apariencia (CSS).
ancho / alto.
posición (x / y).
otros: esquinas redondeadas, bordes, sombra proyectada, etc.


4. Agregarla al <Documento>.
5. Agrupar estas instrucciones en una función.
*/

function createFloatImage(posX, posY) {
    const img = document.createElement('img');
    img.src = imageList[index];
    img.style.width = "227px";
    img.style.height = "150px";
    img.style.top = `${posY - 75}px`;
    img.style.left = posX - (113.5) + "px";
    img.style.position = "absolute";
    img.style.opacity= 0;
    document.body.appendChild(img);

    gsap.to(img, {
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    })


    index = index + 1;
    if (index >= imageList.length){
        index = 0;
    }

    setTimeout(function() {
        gsap.to(img, {
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            onComplete: function() {
                img.remove();
            }
        });
    }, 1000);
}


// 02. Renderizar “n” imágenes.
window.addEventListener('mousemove', function (eventData) {
    createFloatImage(eventData.clientX, eventData.clientY);
});


// 03. Posicionarlas según el mouse.
// 05. Desaparecerlas después de “x” tiempo.
// 06. Hacer su animación de salida.


// 07. Hacer su animación de entrada.
// 08. Renderizarlas cada “x” distancia.
// 09. Renderizarlas adelante y atrás de cada letra.
