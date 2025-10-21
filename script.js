document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById("tituloAnimado");
    const textoFinal = "LUZAMORA";
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let actual = new Array(textoFinal.length).fill("");
  
    let i = 0;
  
    const descifrar = () => {
      const intervalo = setInterval(() => {
        for (let j = i; j < textoFinal.length; j++) {
          actual[j] = caracteres[Math.floor(Math.random() * caracteres.length)];
        }
        titulo.textContent = actual
          .map((char, index) => (index < i ? textoFinal[index] : char))
          .join("");
  
        if (Math.random() < 0.3) {
          i++;
          if (i > textoFinal.length) {
            clearInterval(intervalo);
            titulo.textContent = textoFinal;
            setTimeout(() => {
              document.getElementById("introScreen").style.transition = "opacity 1s";
              document.getElementById("introScreen").style.opacity = "0";
              setTimeout(() => {
                document.getElementById("introScreen").style.display = "none";
                document.getElementById("contenido").style.display = "block";
                document.body.style.overflow = "auto";
              }, 1000);
            }, 800);
          }
        }
      }, 60); // Más lento
    };
  
    descifrar();
  
    // CARRUSEL
    document.querySelectorAll('.carrusel-container').forEach(container => {
      const carrusel = container.querySelector('.carrusel');
      const slides = carrusel.children;
      let index = 0;
  
      container.querySelector('.left').addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        carrusel.style.transform = `translateX(-${index * 100}%)`;
      });
      container.querySelector('.right').addEventListener('click', () => {
        index = (index + 1) % slides.length;
        carrusel.style.transform = `translateX(-${index * 100}%)`;
      });
    });
  });
  