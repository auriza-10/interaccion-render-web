console.log("S03. Ejercicio 03");

console.log(gsap);



window.addEventListener("mousedown", function() {
    gsap.to(
    ".rectangulo",
    {
        x: 500,
        duration: 5, //segundos
        ease: "power1.inOut",
        onComplete: function(){
            gsap.to(
                ".rectangulo",
                {
                    y: 0,
                    x: 1000,
                    duration: 5,
                    ease: "power1.inOut",
                }
            )
        }

    }
);
    
});