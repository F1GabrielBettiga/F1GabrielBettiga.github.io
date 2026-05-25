/**

 * Carga dinámica del archivo navbar.html e integración con configuracionGeneral.js
 */

document.addEventListener('DOMContentLoaded', () => {
    const contenedorGlobal = document.getElementById('contenedorNavbar');

    if (!contenedorGlobal) {
        console.error('No se encontró el contenedor con ID "contenedorNavbar"');
        return;
    }

    const rutaNavbar = 'navbar.html';

    fetch(rutaNavbar)
        .then(respuesta => {
            if (!respuesta.ok) throw new Error('Error al cargar la navbar');
            return respuesta.text();
        })
        .then(html => {
            contenedorGlobal.innerHTML = html;

            // 1. Renderizar Logo
            const contenedorLogo = document.getElementById('logo-navbar');
            if (contenedorLogo) {
                contenedorLogo.textContent = datosPersonales.logoTexto || configuracionNavbar.logoNavbar;
            }

            // 2. Renderizar Enlaces (Desktop y Mobile)
            renderizarEnlaces();

            // 3. Inicializar Lógica de Interacción
            if (typeof inicializarMenuMovil === 'function') {
                inicializarMenuMovil();
            }

            if (configuracionNavbar.mostrarEfectoScroll) {
                inicializarScrollNavbar();
            }

            // 4. Inicializar Observador de Secciones para Scroll
            if (configuracionNavbar.mostrarIndicadorActivo) {
                inicializarObservadorSecciones();
            }
        })
        .catch(error => console.error('Fallo en la carga dinámica:', error));
});

/**
 * Genera dinámicamente los elementos de la lista de navegación
 */
function renderizarEnlaces() {
    const contenedorEscritorio = document.getElementById('enlaces-navbar-escritorio');
    const contenedorMobile = document.getElementById('enlaces-navbar-mobile');
    const enlaces = configuracionNavbar.enlaces;

    if (!enlaces) return;

    enlaces.forEach(enlace => {
        const esContacto = enlace.id === 'contacto';

        // Enlace Desktop
        if (contenedorEscritorio) {
            const a = document.createElement('a');
            a.href = enlace.ruta;

            // Clase base y condicional para contacto
            let clases = "enlace-nav text-sm font-medium transition-all duration-300 ";
            if (esContacto) {
                clases += "enlace-contacto ml-4 px-6 py-2.5 rounded-full";
            } else {
                clases += "text-white/70 hover:text-white hover:bg-white/5 px-4 py-2 rounded-full";
            }

            a.className = clases;
            a.dataset.seccion = enlace.id;
            a.textContent = enlace.nombre;
            contenedorEscritorio.appendChild(a);
        }

        // Enlace Mobile
        if (contenedorMobile) {
            const a = document.createElement('a');
            a.href = enlace.ruta;

            let clasesMobile = "enlace-nav-movil flex items-center px-4 py-3.5 rounded-2xl transition-all duration-300 ";
            if (esContacto) {
                clasesMobile += "enlace-contacto mt-4 text-center justify-center";
            } else {
                clasesMobile += "text-white/60 hover:text-white hover:bg-white/5";
            }

            a.className = clasesMobile;
            a.dataset.seccion = enlace.id;
            a.textContent = enlace.nombre;
            contenedorMobile.appendChild(a);
        }
    });
}

/**
 * Controla el aspecto de la navbar al hacer scroll
 */
function inicializarScrollNavbar() {
    const navbar = document.getElementById('navbar-principal');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }, { passive: true });
}

/**
 * Utiliza IntersectionObserver para detectar qué sección está en pantalla
 * y actualizar el indicador de la navbar automáticamente.
 */
function inicializarObservadorSecciones() {
    const enlaces = configuracionNavbar.enlaces;
    if (!enlaces) return;

    const opciones = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Detecta la sección cuando está en la parte superior/media
        threshold: 0
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                actualizarEstadoActivo(id);
            }
        });
    };

    const observer = new IntersectionObserver(callback, opciones);

    // Observar cada sección definida en la configuración
    enlaces.forEach(enlace => {
        const seccion = document.getElementById(enlace.id);
        if (seccion) observer.observe(seccion);
    });
}

/**
 * Actualiza las clases CSS de los links según la sección activa
 */
function actualizarEstadoActivo(idSeccion) {
    const todosLosEnlaces = document.querySelectorAll('.enlace-nav, .enlace-nav-movil');

    todosLosEnlaces.forEach(el => {
        // Ignorar el botón de contacto si no se quiere marcar como "activo" para no romper su gradiente
        if (el.classList.contains('enlace-contacto')) return;

        if (el.dataset.seccion === idSeccion) {
            el.classList.add('active');
            if (el.classList.contains('enlace-nav')) {
                el.classList.remove('text-white/70');
                el.classList.add('text-white');
            }
        } else {
            el.classList.remove('active');
            if (el.classList.contains('enlace-nav')) {
                el.classList.add('text-white/70');
                el.classList.remove('text-white');
            }
        }
    });
}