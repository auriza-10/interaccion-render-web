console.log(THREE);
console.log(gsap);


const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);
renderer.setClearColor("rgba(0, 0, 0, 1)");
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
camera.position.set(0, 30, 0);
camera.lookAt(scene.position);

// quiero que todos esten alrededor del sol
const geo1 = new THREE.SphereGeometry(3, 64, 64); // sol
const geo2= new THREE.SphereGeometry(0.5, 64, 64); // luna
const geo3= new THREE.SphereGeometry(0.7, 64, 64); // mercurio
const geo4= new THREE.SphereGeometry(0.9, 64, 64); // venus
const geo5= new THREE.SphereGeometry(1, 64, 64); // tierra
const geo6= new THREE.SphereGeometry(0.8, 64, 64); // marte
const geo7= new THREE.SphereGeometry(2.5, 64, 64); // jupiter
const geo8= new THREE.SphereGeometry(2, 64, 64); // saturno
const geo9= new THREE.SphereGeometry(1.7, 64, 64); // urano
const geo10= new THREE.SphereGeometry(1.6, 64, 64); // neptuno


const material = new THREE.MeshStandardMaterial({
    color: "rgba(255, 255, 255, 1)",
});

const sol = new THREE.Mesh(geo1, material);
scene.add(sol);

const luna = new THREE.Mesh(geo2, material);
scene.add(luna);
luna.position.z = -5;
luna.position.x = 5;

const mercurio = new THREE.Mesh(geo3, material);
scene.add(mercurio);
mercurio.position.z = -5;
mercurio.position.x = 8;

const venus= new THREE.Mesh(geo4, material);
scene.add(venus);
venus.position.z = -5;
venus.position.x = 11;

const tierra = new THREE.Mesh(geo5, material);
scene.add(tierra);
tierra.position.z = -5;
tierra.position.x = 14;

const marte = new THREE.Mesh(geo6, material);
scene.add(marte);
marte.position.z = -5;
marte.position.x = 17;

const jupiter = new THREE.Mesh(geo7, material);
scene.add(jupiter);
jupiter.position.z = -5;
jupiter.position.x = 22;

const saturno = new THREE.Mesh(geo8, material);
scene.add(saturno);
saturno.position.z = -5;
saturno.position.x = 27;

const urano = new THREE.Mesh(geo9, material);     
scene.add(urano);
urano.position.z = -5;
urano.position.x = 32;

const neptuno = new THREE.Mesh(geo10, material);
scene.add(neptuno);
neptuno.position.z = -5;
neptuno.position.x = 37;





// 3.2 Crear luces.
const frontLight = new THREE.PointLight("rgba(223, 222, 222, 1)", 300, 100);
frontLight.position.set(7, 3, 3);
scene.add(frontLight);

const rimLight = new THREE.PointLight("rgba(0, 4, 255, 1)", 50, 100);
rimLight.position.set(-7, -3, -7);
scene.add(rimLight);

//// A) Cargar múltiples texturas para los planetas.
const manager = new THREE.LoadingManager();

manager.onLoad = function () {
   console.log('¡Todas las texturas cargadas!');
   createMaterial();
};
 
// texture loader para nuestros assets
const loader = new THREE.TextureLoader(manager);


// Texturas
const solTex = {
   albedo: loader.load('./assets/texturas/sol/albedo.png'),
   metalness: loader.load('./assets/texturas/sol/metallic.png'),
    ao: loader.load('./assets/texturas/sol/ao.png'),
   normal: loader.load('./assets/texturas/sol/normal.png'),
};



// Variables globales para materiales
var solMaterial;

function createMaterial() {
   solMaterial = new THREE.MeshStandardMaterial({
       map: solTex.albedo,
       aoMap: solTex.ao,
       metalnessMap: solTex.metalness,
       normalMap: solTex.normal,
       side: THREE.FrontSide,

   });


   // Material inicial
   sol.material = solMaterial;
}

//// B) Rotación al scrollear.
var scroll = {
   y: 0,
   lerpedY: 0,
   speed: 0.05,
   cof: 0.07
};



function updateMeshRotation() {
   sol.rotation.y = scroll.lerpedY;
}

function lerpScrollY() {
   scroll.lerpedY += (scroll.y - scroll.lerpedY) * scroll.cof;
}

//// C) Movimiento de cámara con mouse
var mouse = {
   x: 0,
   y: 0,
   normalOffset: { x: 0, y: 0 },
   lerpNormalOffset: { x: 0, y: 0 },
   cof: 0.07,
   gazeRange: { x: 17, y: 13 }
};

function updateMouseData(eventData) {
   updateMousePosition(eventData);
   calculateNormalOffset();
}
function updateMousePosition(eventData) {
   mouse.x = eventData.clientX;
   mouse.y = eventData.clientY;
}
function calculateNormalOffset() {
   let windowCenter = { x: canvas.width / 2, y: canvas.height / 2 };
   mouse.normalOffset.x = ((mouse.x - windowCenter.x) / canvas.width) * 2;
   mouse.normalOffset.y = ((mouse.y - windowCenter.y) / canvas.height) * 2;
}
window.addEventListener("mousemove", updateMouseData);

function updateCameraPosition() {
   camera.position.x = mouse.normalOffset.x * mouse.gazeRange.x;
   camera.position.y = -mouse.normalOffset.y * mouse.gazeRange.y;
}



function animate() {
    requestAnimationFrame(animate);

    sol.rotation.x -= 0.005;
    lerpScrollY();
    updateMeshRotation();
    //updateCameraPosition();
    camera.lookAt(sol.position);
    renderer.render(scene, camera);
}

animate();


// 1. Crear una función con las instrucciones para actualizar el tamaño de nuestro canvas.

function updateCanvasSize() {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
}

// 2. Crear otra función para actualizar la resolución de nuestro renderizador.

function updateRenderer() {
   renderer.setSize(canvas.width, canvas.height);

   // actualizar pixel ratio (para pantallas retina, pero limitar a 2 para rendimiento)
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

// 3. Crear otra función para actualizar la relación aspecto de la cámara.

function updateCameraAspect() {
   camera.aspect = canvas.width / canvas.height;
   camera.updateProjectionMatrix();
}

// 4. Definir un event listener al “resize” para ejecutar las 3 funciones que creamos en los pasos anteriores.

window.addEventListener("resize", function() {
   updateCanvasSize();
   updateRenderer();
   updateCameraAspect();
});