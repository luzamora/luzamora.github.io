document.addEventListener("DOMContentLoaded", () => {
    
    // ======================================================================
    // DATOS GLOBALES: Lista Completa de Proyectos (AÑADE AQUÍ TODOS TUS PROYECTOS)
    // ======================================================================
    const PROJECTS_FULL_LIST = [
        {
            id: "olivia",
            title: "Oliv.ia ~ Sistema de Recomendación de Restaurantes con IA",
            description: "Oliv.ia es una aplicación web desarrollada con Streamlit que integra análisis de datos y procesamiento del lenguaje natural (NLP) para ofrecer recomendaciones personalizadas de restaurantes.",
            link: "/olivia/",
            date: "2025-10-15", 
            preview_image: "images/olivia.jpg",
            is_featured: true 
        },
        {
            id: "diseno",
            title: "Branding y Diseño Gráfico",
            description: "Branding y diseño para clientes locales.",
            link: "diseno.html",
            date: "2025-07-20",
            preview_image: "images/diseno1.jpg",
            is_featured: true
        },
        {
            id: "fotografia",
            title: "Proyecto Fotografía",
            description: "Serie de retratos en estudio con iluminación natural.",
            link: "/Fotografía/",
            date: "2025-05-01",
            preview_image: "images/imagenAnalogica1 .jpeg",
            is_featured: true
        },
        {
            id: "otro-proyecto-1",
            title: "Simulador de Redes Neuronales",
            description: "Visualización interactiva de conceptos de Machine Learning.",
            link: "simulador.html",
            date: "2024-11-20",
            preview_image: "images/imagenAnalogica3.jpg",
            is_featured: false
        },
        {
            id: "proyecto-web-antiguo",
            title: "Landing Page para Cliente X",
            description: "Diseño y desarrollo de una página de aterrizaje moderna y responsiva.",
            link: "landing-x.html",
            date: "2024-03-10",
            preview_image: "images/imagenAnalogica3.jpg",
            is_featured: false
        }
    ];

    // Datos auxiliares para páginas de proyecto (se mantienen si tienes páginas de detalle que los usan)
    const ALL_PROJECT_DATA = {
        "olivia": {
            title: "Oliv.ia: Sistema de Recomendación de Restaurantes con IA",
            layout_images: [
                { title: "Dashboard principal", image: "images/olivia-p1.jpg" }, 
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

    const animarDescifrado = () => { 
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
        if (introScreen && contenido) { 
            document.body.style.overflow = "hidden";
            await animarDescifrado();
            
            setTimeout(() => {
                introScreen.classList.add('fade-out');
                
                setTimeout(() => {
                    introScreen.style.display = "none";
                    contenido.style.display = "block";
                    document.body.style.overflow = "auto";
                    localStorage.setItem('animacionVista', 'true');
                }, 1000); 
            }, 800);
        }
    };

    if (introScreen && contenido) {
        const animacionYaVista = localStorage.getItem('animacionVista');
        
        if (animacionYaVista) {
            introScreen.style.display = "none";
            contenido.style.display = "block";
            document.body.style.overflow = "auto";
        } else {
            iniciarSecuencia();
        }
    }


    // ----------------------------------------------------------------------
    // 2. LÓGICA PARA GENERAR LA PÁGINA DE PROYECTOS (proyectos.html)
    // ----------------------------------------------------------------------
    const allProjectsContainer = document.getElementById("all-projects-container");

    if (allProjectsContainer) {
        // 1. Ordenar los proyectos por fecha (más nuevo primero)
        const sortedProjects = PROJECTS_FULL_LIST.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });

        // 2. Generar el HTML
        sortedProjects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project-full-item", "fade-in");
            
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = new Date(project.date).toLocaleDateString('es-ES', dateOptions);

            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p class="project-date">${formattedDate}</p>
                <p>${project.description}</p>
                <a href="${project.link}" class="btn-ver-mas">Ver detalles</a>
            `;
            
            allProjectsContainer.appendChild(projectElement);
        });
    }

    // ----------------------------------------------------------------------
    // 3. BLOQUE CONDICIONAL DINÁMICO para generar el layout (Páginas de Proyecto)
    // ----------------------------------------------------------------------
    // Se mantiene esta sección por si tienes páginas de detalle de proyecto que la usan.
    const container = document.getElementById("projectLayout"); 
    const mainWrapper = document.querySelector(".layout-wrapper");

    if (container && mainWrapper) {
        
        const projectId = mainWrapper.getAttribute('data-project-id'); 
        const projectData = ALL_PROJECT_DATA[projectId];

        if (projectData && projectData.layout_images.length >= 7) {
            
            const images = projectData.layout_images; 

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