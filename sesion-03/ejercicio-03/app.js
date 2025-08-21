console.log("S03. Ejercicio 03");

console.log(gsap);

gsap.to(
    ".rectangulo",
    {
        x: 500,
        duration: 5, //segundos
        ease: "bounce.inOut",

    }
);

window.addEventListener("mousedown", function() {
    gsap.to(
    ".rectangulo",
    {
        x: 500,
        duration: 5, //segundos
        ease: "bounce.inOut",

    }
);
    
});