document.addEventListener("DOMContentLoaded", () => {
    
    // ----------------------------------------------------------------------
    // LÓGICA DE INTRODUCCIÓN Y ANIMACIÓN (Página de Inicio)
    // Usa sessionStorage para que se vea una vez por sesión (al cerrar el navegador se reinicia).
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
            // Bloquea el scroll mientras la animación está activa
            document.body.style.overflow = "hidden";
            
            // Inicia la animación de descifrado
            await animarDescifrado();
            
            // Inicia el desvanecimiento de la pantalla de introducción
            setTimeout(() => {
                introScreen.classList.add('fade-out');
                
                // Finaliza: oculta la pantalla de intro y muestra el contenido principal
                setTimeout(() => {
                    introScreen.style.display = "none";
                    contenido.style.display = "block";
                    document.body.style.overflow = "auto"; // Habilita el scroll
                    
                    // Guarda el estado en sessionStorage para saltarla en navegación interna
                    sessionStorage.setItem('animacionVistaSesion', 'true'); 
                }, 1000); 
            }, 800);
        }
    };

    if (introScreen && contenido) {
        // Comprueba si la animación ya se vio en esta SESIÓN de navegador
        const animacionYaVistaSesion = sessionStorage.getItem('animacionVistaSesion');
        
        if (!animacionYaVistaSesion) { // Si NO se ha visto en esta sesión
            iniciarSecuencia();
        } else {
            // Si ya se vio en esta sesión (navegación interna), carga el contenido directamente
            introScreen.style.display = "none";
            contenido.style.display = "block";
            document.body.style.overflow = "auto";
        }
    }
});