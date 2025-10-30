document.addEventListener("DOMContentLoaded", () => {
    
    // ======================================================================
    // DATOS GLOBALES: Array único con la información de los proyectos
    // ======================================================================
    const ALL_PROJECT_DATA = {
        "olivia": {
            title: "Oliv.ia: Sistema de Recomendación de Restaurantes con IA",
            layout_images: [
                // **REEMPLAZA ESTOS CON LAS 7 RUTAS DE IMÁGENES REALES DE OLIV.IA**
                { title: "Dashboard principal", image: "images/imagenAnalogica3.jpg" }, 
                { title: "Mapa de resultados", image: "images/olivia-p2.jpg" },
                { title: "Resumen de reseñas", image: "images/olivia-p3.jpg" },
                { title: "Gráfico de sentimiento", image: "images/olivia-p4.jpg" },
                { title: "Tabla de datos", image: "images/olivia-p5.jpg" },
                { title: "Visualización de tendencias", image: "images/olivia-p6.jpg" },
                { title: "Logo y branding", image: "images/olivia-p7.jpg" },
            ]
        },
        "fotografia": {
            title: "Proyecto Fotografía: Serie de Retratos en Estudio",
            layout_images: [
                // **REEMPLAZA ESTOS CON LAS 7 RUTAS DE IMÁGENES REALES DE FOTOGRAFÍA**
                { title: "Retrato en blanco y negro", image: "https://res.cloudinary.com/daxumuyx8/image/upload/v1761847212/analog_1_ilnm0t.jpg" },
                { title: "Retrato de perfil", image: "https://res.cloudinary.com/daxumuyx8/image/upload/v1761847212/analog_1_zhstek.jpg" },
                { title: "Close-up", image: "https://res.cloudinary.com/daxumuyx8/image/upload/v1761847214/analog_2_t8zmry.jpg" },
                { title: "Retrato corporal 1", image: "https://res.cloudinary.com/daxumuyx8/image/upload/v1761847214/analog_3_apo7wv.jpg" },
                { title: "Retrato corporal 2", image: "https://res.cloudinary.com/daxumuyx8/image/upload/v1761847215/analog_5_yfu8mo.jpg" },
                { title: "Detalle de iluminación", image: "https://res.cloudinary.com/daxumuyx8/image/upload/v1761847217/analog_3_xtv2jw.jpg" },
                { title: "Making of", image: "https://res.cloudinary.com/daxumuyx8/image/upload/v1761847266/analog_7_if3dbk.jpg" },
            ]
        }
    };


    // ----------------------------------------------------------------------
    // 1. LÓGICA DE INTRODUCCIÓN Y ANIMACIÓN (Página de Inicio)
    // ----------------------------------------------------------------------
    const introScreen = document.getElementById("introScreen");
    const contenido = document.getElementById("contenido");
    const titulo = document.getElementById("tituloAnimado");
    const textoFinal = "LUZAMORA";
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
    let i = 0;

    const animarDescifrado = () => { /* ... (Función Promise se mantiene igual) ... */
        return new Promise(resolve => {
            const intervalo = setInterval(() => {
                let textoIntermedio = '';
                for (let j = 0; j < textoFinal.length; j++) {
                    if (j < i) {
                        textoIntermedio += textoFinal[j];
                    } else {
                        textoIntermedio += caracteres[Math.floor(Math.random() * caracteres.length)];
                    }
                }
                titulo.textContent = textoIntermedio;

                if (Math.random() < 0.25) { 
                    i++;
                }

                if (i > textoFinal.length) {
                    clearInterval(intervalo);
                    titulo.textContent = textoFinal;
                    resolve();
                }
            }, 60);
        });
    };

    const iniciarSecuencia = async () => {
        // Solo ejecuta la intro si estamos en la página que tiene los elementos
        if (introScreen && contenido) { 
            document.body.style.overflow = "hidden";
            await animarDescifrado();
            
            setTimeout(() => {
                introScreen.classList.add('fade-out');
                
                setTimeout(() => {
                    introScreen.style.display = "none";
                    contenido.style.display = "block";
                    document.body.style.overflow = "auto";
                }, 1000); 
            }, 800);
        }
    };

    iniciarSecuencia();


    // ----------------------------------------------------------------------
    // 2. LÓGICA DEL CARRUSEL (Reutilizable en todas las páginas)
    // ----------------------------------------------------------------------
    document.querySelectorAll('.carrusel-container').forEach(container => {
        const carrusel = container.querySelector('.carrusel');
        const slides = carrusel.children;
        let index = 0;

        const updateCarrusel = (newIndex) => {
            index = newIndex;
            carrusel.style.transform = `translateX(-${index * 100}%)`;
        };

        // Escucha de eventos para los botones
        container.querySelector('.left').addEventListener('click', () => {
            let newIndex = (index - 1 + slides.length) % slides.length;
            updateCarrusel(newIndex);
        });
        
        container.querySelector('.right').addEventListener('click', () => {
            let newIndex = (index + 1) % slides.length;
            updateCarrusel(newIndex);
        });
    });

    // ----------------------------------------------------------------------
    // 3. BLOQUE CONDICIONAL DINÁMICO para generar el layout (Páginas de Proyecto)
    // ----------------------------------------------------------------------
    const container = document.getElementById("projectLayout"); 
    const mainWrapper = document.querySelector(".layout-wrapper");

    // Solo se ejecuta si el contenedor existe Y el wrapper (con el data-id) existe
    if (container && mainWrapper) {
        
        const projectId = mainWrapper.getAttribute('data-project-id'); 
        const projectData = ALL_PROJECT_DATA[projectId];

        if (projectData && projectData.layout_images.length >= 7) {
            
            const images = projectData.layout_images; 

            /* ---- Función para crear tarjeta ---- */
            function createCard(imageData) {
                const card = document.createElement("div");
                card.classList.add("project-card");
                card.innerHTML = `
                    <img src="${imageData.image}" alt="${imageData.title}">
                    <div class="project-info">
                        <h3>${imageData.title}</h3>
                    </div>
                `;
                return card;
            }

            // --- Generación del Layout Dinámico (Usa el array 'images' del proyecto actual) ---
            
            const rowTop = document.createElement("div");
            rowTop.classList.add("row", "row-top");
            rowTop.appendChild(createCard(images[0]));
            rowTop.appendChild(createCard(images[1]));

            const rowBottom = document.createElement("div");
            rowBottom.classList.add("row", "row-bottom");

            rowBottom.appendChild(createCard(images[2]));

            const rightGrid = document.createElement("div");
            rightGrid.classList.add("right-grid");
            rightGrid.appendChild(createCard(images[3]));
            rightGrid.appendChild(createCard(images[4]));
            rightGrid.appendChild(createCard(images[5]));
            rightGrid.appendChild(createCard(images[6]));
            rowBottom.appendChild(rightGrid);

            container.appendChild(rowTop);
            container.appendChild(rowBottom);
        } else {
            console.error(`Error de datos: No se encontraron datos para el ID "${projectId}" o faltan imágenes (se necesitan 7).`);
        }
    }
});