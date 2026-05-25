function renderizarServicios() {
    if (typeof configuracionServicios === "undefined") {
        console.error("No se encontró configuracionServicios.");
        return;
    }

    const seccion = document.getElementById("servicios");

    if (!seccion) return;

    if (!configuracionServicios.mostrarSeccion) {
        seccion.classList.add("hidden");
        return;
    }

    renderizarEncabezadoServicios();
    renderizarTarjetasServicios();
    renderizarCtaServicios();
}

function renderizarEncabezadoServicios() {
    const titulo = document.getElementById("servicios-titulo");
    const descripcion = document.getElementById("servicios-descripcion");

    if (titulo) titulo.textContent = configuracionServicios.titulo;
    if (descripcion) descripcion.textContent = configuracionServicios.descripcion;
}

function renderizarTarjetasServicios() {
    const contenedor = document.getElementById("servicios-listado");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    configuracionServicios.items.forEach(servicio => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-servicio";

        tarjeta.innerHTML = `
            <div class="icono-servicio">
                <span class="material-symbols-outlined">${servicio.icono}</span>
            </div>

            <h3 class="titulo-tarjeta-servicio">${servicio.titulo}</h3>

            <p class="descripcion-tarjeta-servicio">${servicio.descripcion}</p>
        `;

        contenedor.appendChild(tarjeta);
    });
}

function renderizarCtaServicios() {
    const cta = document.getElementById("servicios-cta");
    const texto = document.getElementById("servicios-cta-texto");
    const boton = document.getElementById("servicios-cta-boton");
    const botonTexto = document.getElementById("servicios-cta-boton-texto");
    const botonIcono = document.getElementById("servicios-cta-icono");

    if (!cta) return;

    if (!configuracionServicios.cta || !configuracionServicios.cta.mostrar) {
        cta.classList.add("hidden");
        return;
    }

    if (texto) texto.textContent = configuracionServicios.cta.texto;
    if (botonTexto) botonTexto.textContent = configuracionServicios.cta.textoBoton;
    if (botonIcono) botonIcono.textContent = configuracionServicios.cta.icono || "send";

    if (boton) {
        boton.href = configuracionServicios.cta.link || "#contacto";
    }
}