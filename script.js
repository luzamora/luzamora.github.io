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
  
  const projects = [
  { title: "Proyecto 1", image: "https://picsum.photos/800/400?random=1" },
  { title: "Proyecto 2", image: "https://picsum.photos/800/400?random=2" },
  { title: "Proyecto 3", image: "https://picsum.photos/800/400?random=3" },
  { title: "Proyecto 4", image: "https://picsum.photos/600/400?random=4" },
  { title: "Proyecto 5", image: "https://picsum.photos/600/400?random=5" },
  { title: "Proyecto 6", image: "https://picsum.photos/600/400?random=6" },
  { title: "Proyecto 7", image: "https://picsum.photos/600/400?random=7" },
];

const container = document.getElementById("projectLayout");

/* ---- Fila superior (2 grandes) ---- */
const rowTop = document.createElement("div");
rowTop.classList.add("row", "row-top");
rowTop.appendChild(createCard(projects[0]));
rowTop.appendChild(createCard(projects[1]));

/* ---- Fila inferior (1 grande + 4 en cuadrícula) ---- */
const rowBottom = document.createElement("div");
rowBottom.classList.add("row", "row-bottom");

// Izquierda
rowBottom.appendChild(createCard(projects[2]));

// Derecha
const rightGrid = document.createElement("div");
rightGrid.classList.add("right-grid");
rightGrid.appendChild(createCard(projects[3]));
rightGrid.appendChild(createCard(projects[4]));
rightGrid.appendChild(createCard(projects[5]));
rightGrid.appendChild(createCard(projects[6]));
rowBottom.appendChild(rightGrid);

container.appendChild(rowTop);
container.appendChild(rowBottom);

/* ---- Función para crear tarjeta ---- */
function createCard(project) {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="project-info">
      <h3>${project.title}</h3>
    </div>
  `;
  return card;
}


