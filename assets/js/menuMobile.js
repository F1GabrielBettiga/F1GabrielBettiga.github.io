/**
 * funcionamiento del menú hamburguesa y navegación
 */

function inicializarMenuMovil() {
    const botonMenu = document.getElementById('boton-menu-movil');
    const menuDesplegable = document.getElementById('menu-movil-desplegable');
    const iconoHamburguesa = document.getElementById('icono-hamburguesa');
    const iconoCerrar = document.getElementById('icono-cerrar');
    const enlaces = document.querySelectorAll('.enlace-nav-movil');

    if (!botonMenu || !menuDesplegable) return;

    // Función para alternar el menú
    const toggleMenu = () => {
        const estaAbierto = !menuDesplegable.classList.contains('hidden');

        if (estaAbierto) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    };

    const abrirMenu = () => {
        menuDesplegable.classList.remove('hidden');

        if (iconoHamburguesa) {
            iconoHamburguesa.classList.add('hidden');
        }

        if (iconoCerrar) {
            iconoCerrar.classList.remove('hidden');
        }

        document.body.classList.add('menu-abierto');

        // Animación de entrada para los links uno a uno
        const links = menuDesplegable.querySelectorAll('.enlace-nav-movil');

        links.forEach((link, index) => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(10px)';

            setTimeout(() => {
                link.style.transition = 'all 0.4s ease';
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 100 + (index * 50));
        });
    };

    const cerrarMenu = () => {
        menuDesplegable.classList.add('hidden');

        if (iconoHamburguesa) {
            iconoHamburguesa.classList.remove('hidden');
        }

        if (iconoCerrar) {
            iconoCerrar.classList.add('hidden');
        }

        document.body.classList.remove('menu-abierto');
    };

    // Evento click en el botón hamburguesa
    botonMenu.addEventListener('click', (evento) => {
        evento.stopPropagation();
        toggleMenu();
    });

    // Cerrar al hacer clic en un enlace
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => {
            cerrarMenu();
        });
    });

    // Cerrar al hacer clic fuera del menú
    document.addEventListener('click', (evento) => {
        const clickFueraDelMenu = !menuDesplegable.contains(evento.target);
        const clickFueraDelBoton = !botonMenu.contains(evento.target);
        const menuEstaAbierto = !menuDesplegable.classList.contains('hidden');

        if (menuEstaAbierto && clickFueraDelMenu && clickFueraDelBoton) {
            cerrarMenu();
        }
    });

    // Ajustar menú al redimensionar ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1280 && !menuDesplegable.classList.contains('hidden')) {
            cerrarMenu();
        }
    });
}