console.log("Sesion 05. Ejercicio 01: Geometrías");
console.log(THREE);

//configurar canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Creamos nuestros elemetos básicos
//Escena, Cámara, Mesh, Renderer
//Escena
const scene = new THREE.Scene();

//Cámara
//const camera = new THREE.Camera(FocusEvent, SVGPreserveAspectRatio, near, far);
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);

//Mesh
//Geometría
const geometry = new THREE.TorusKnotGeometry();

// Material
const material = new THREE.MeshBasicMaterial({color: "#ff6600"});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.z = -5;
mesh.rotation.x = 45;

//Renderer
const renderer = new THREE.WebGLRenderer({ canvas : canvas});
renderer.setSize(canvas.width, canvas.height);

//Dar instrucción de renderizar o imprimir nuestro primer frame
renderer.render(scene, camera);


// Tip para animar nuestro mesh:
function animate() {
   requestAnimationFrame(animate);

   mesh.rotation.x += 0.01;
   mesh.rotation.y += 0.01;

   renderer.render(scene, camera);
}
animate();

