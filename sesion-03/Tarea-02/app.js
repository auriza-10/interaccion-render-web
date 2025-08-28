
console.log("Tarea-02");
console.log(gsap);

const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Nube 1
ctx.beginPath();
ctx.fillStyle = "#fff";
ctx.arc(200, 150, 30, 0, Math.PI * 2);
ctx.arc(240, 140, 30, 0, Math.PI * 2);
ctx.arc(280, 150, 30, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

// Nube 2
ctx.beginPath();
ctx.fillStyle = "#fff";
ctx.arc(600, 120, 25, 0, Math.PI * 2);
ctx.arc(630, 110, 25, 0, Math.PI * 2);
ctx.arc(670, 120, 25, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

// Nube 3
ctx.beginPath();
ctx.fillStyle = "#fff";
ctx.arc(1000, 180, 35, 0, Math.PI * 2);
ctx.arc(1040, 170, 35, 0, Math.PI * 2);
ctx.arc(1080, 180, 35, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

//suelo
ctx.beginPath();
ctx.rect(0, canvas.height - 400, canvas.width, 700); 
ctx.fillStyle = "#e9a615ff";
ctx.fill();
ctx.closePath();

// carretera
ctx.beginPath();
ctx.rect(0, canvas.height - 200, canvas.width, 700); 
ctx.fillStyle = "#515151ff";
ctx.fill();
for (let x = 0; x < canvas.width; x += 100) {
  ctx.fillStyle = "#fff";
  ctx.fillRect(x, 700, 50, 20);
}
ctx.closePath();

// Cerro 1
ctx.beginPath();
ctx.moveTo(1200, canvas.height - 400);   
ctx.lineTo(1500, canvas.height - 700);  
ctx.lineTo(1800, canvas.height - 400);  
ctx.closePath();
ctx.fillStyle = "#654321";
ctx.fill();

// Cerro 2
ctx.beginPath();
ctx.moveTo(-200, canvas.height - 400);   
ctx.lineTo(100, canvas.height - 900);  
ctx.lineTo(400, canvas.height - 400);  
ctx.closePath();
ctx.fillStyle = "#704820ff";
ctx.fill();

// cactus 1
ctx.beginPath();
ctx.fillStyle = "#228B22"; 
ctx.fillRect(800, 380, 50, 210);      
ctx.fillRect(750, 400, 25, 80);       
ctx.fillRect(750, 460, 55, 25);       
ctx.fillRect(870, 420, 25, 80);      
ctx.fillRect(830, 470, 45, 30);       
ctx.closePath();

// cactus 2
ctx.beginPath();
ctx.fillStyle = "#228B22"; 
ctx.fillRect(300, 250, 60, 200);
ctx.fillRect(250, 270, 30, 100); 
ctx.fillRect(250, 350, 50, 30);  
ctx.fillRect(410, 290, 30, 100); 
ctx.fillRect(360, 360, 50, 30);  
ctx.closePath();

// cactus 3
ctx.beginPath();
ctx.fillStyle = "#228B22"; 
ctx.fillRect(1250, 220, 40, 200);
ctx.fillRect(1200, 260, 20, 70); 
ctx.fillRect(1200, 320, 50, 30); 
ctx.fillRect(1330, 290, 20, 70);
ctx.fillRect(1290, 330, 50, 30);  
ctx.closePath();


// Movimiento en X 
window.addEventListener("mousedown", function() {
    gsap.to(
        ".circulo",
        {
            x: 1360,   
            backgroundColor: "#ca5100ff",     
            duration: 8,     
            ease: "power2.inOut",

            onComplete: function(){
                gsap.to(
                    ".circulo",
                    {
                        x:0,
                        backgroundColor: "#efff40",
                        duration: 3,
                        ease: "sine.out",
                    }
                )
            }
        }
    )
});


// Movimiento en Y
window.addEventListener("mousedown", function() {
    gsap.to(
        ".circulo",
        {
            y: -550,         
            duration: 4,
            ease: "power2.out",
            onComplete: function(){
                gsap.to(
                    ".circulo",
                    {
                        y: 0, 
                        duration: 4,
                        ease: "power2.in",
                        onComplete: function(){
                            gsap.to(
                                ".circulo",
                                {
                                    y:0,
                                    duration: 1,
                                    ease: "power1.inOut",
                                }
                            )
                        }
                    }
                )
            }
        }
    )
});

// Cmabio del fondo
window.addEventListener("mousedown", function() {
gsap.to("body", {
    backgroundColor: "#87ceeb", 
    duration: 4,                 
    ease: "power1.inOut",
    onComplete: function() {
        gsap.to("body", {
            backgroundColor: "#ff7f50", 
            duration: 1,                 
            ease: "power1.inOut",           
            }
          )
       }
   });
});

