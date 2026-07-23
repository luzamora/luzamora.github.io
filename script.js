document.addEventListener("DOMContentLoaded", () => {
    
    // ----------------------------------------------------------------------
    // 1. LÓGICA DE INTRODUCCIÓN Y ANIMACIÓN
    // ----------------------------------------------------------------------
    const introScreen = document.getElementById("introScreen");
    const contenido = document.getElementById("contenido");
    const titulo = document.getElementById("tituloAnimado");
    const overlay = document.querySelector('.hero-overlay');
    const bgVideo = document.querySelector('.bg-video');
    
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
                    
                    setTimeout(() => {
                        if (overlay) overlay.classList.add('show-items');
                        if (bgVideo) bgVideo.classList.add('video-visible');
                    }, 100);
                    
                    sessionStorage.setItem('animacionVistaSesion', 'true'); 
                }, 1000); 
            }, 800);
        }
    };

    if (introScreen && contenido) {
        const animacionYaVistaSesion = sessionStorage.getItem('animacionVistaSesion');
        
        if (!animacionYaVistaSesion) {
            iniciarSecuencia();
        } else {
            introScreen.style.display = "none";
            contenido.style.display = "block";
            document.body.style.overflow = "auto";
            if (overlay) overlay.classList.add('show-items');
            if (bgVideo) bgVideo.classList.add('video-visible');
        }
    }

    // ----------------------------------------------------------------------
    // 2. MENÚ HAMBURGUESA (RESPONSIVE)
    // ----------------------------------------------------------------------
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-menu');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            toggle.classList.toggle('is-active');
            
            // Bloquea el scroll del fondo cuando el menú está abierto en móvil
            if (nav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                toggle.classList.remove('is-active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // ----------------------------------------------------------------------
    // 3. LÓGICA DEL FORMULARIO MODAL
    // ----------------------------------------------------------------------
    const modal = document.getElementById("contactModal");
    const btnAbrir = document.querySelector(".btn-landing");
    const btnCerrar = document.getElementById("closeModal");

    if (btnAbrir && modal) {
        btnAbrir.onclick = (e) => {
            e.preventDefault();
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        };
    }

    if (btnCerrar && modal) {
        btnCerrar.onclick = () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
});