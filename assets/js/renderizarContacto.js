function renderizarContacto() {
    if (typeof configuracionContacto === "undefined") {
        console.error("No se encontró configuracionContacto.");
        return;
    }

    const seccion = document.getElementById("seccion-contacto");

    if (!seccion) return;

    if (!configuracionContacto.mostrarSeccion) {
        seccion.classList.add("hidden");
        return;
    }

    renderizarTextosContacto();
    renderizarEstadoContacto();
    renderizarDatosContacto();
    renderizarBotonesContacto();
}

function renderizarTextosContacto() {
    const etiqueta = document.getElementById("contacto-etiqueta");
    const titulo = document.getElementById("contacto-titulo");
    const descripcion = document.getElementById("contacto-descripcion");

    if (etiqueta) etiqueta.textContent = configuracionContacto.etiqueta;
    if (titulo) titulo.textContent = configuracionContacto.titulo;
    if (descripcion) descripcion.textContent = configuracionContacto.descripcion;
}

function renderizarEstadoContacto() {
    const estado = document.getElementById("contacto-estado");
    const estadoTexto = document.getElementById("contacto-estado-texto");

    if (!estado) return;

    if (!configuracionContacto.estado || !configuracionContacto.estado.mostrar) {
        estado.classList.add("hidden");
        return;
    }

    if (estadoTexto) {
        estadoTexto.textContent = configuracionContacto.estado.texto;
    }
}

function renderizarDatosContacto() {
    const contenedor = document.getElementById("contacto-listado");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    configuracionContacto.datos.forEach(dato => {
        const esLink = dato.tipo === "link" || dato.tipo === "email";

        const elemento = document.createElement(esLink ? "a" : "div");
        elemento.className = "tarjeta-contacto";

        if (esLink) {
            elemento.href = dato.url;
            elemento.target = dato.tipo === "email" ? "_self" : "_blank";
            elemento.rel = "noopener noreferrer";
        }

        elemento.innerHTML = `
            <div class="icono-contacto">
                <span class="material-symbols-outlined">${dato.icono}</span>
            </div>

            <div>
                <p class="label-contacto">${dato.label}</p>
                <p class="valor-contacto">${dato.valor}</p>
            </div>
        `;

        contenedor.appendChild(elemento);
    });
}

function renderizarBotonesContacto() {
    const botonCv = document.getElementById("contacto-boton-cv");
    const botonCvTexto = document.getElementById("contacto-boton-cv-texto");

    const botonLinkedin = document.getElementById("contacto-boton-linkedin");
    const botonLinkedinTexto = document.getElementById("contacto-boton-linkedin-texto");

    if (botonCv && configuracionContacto.botones.cv) {
        if (!configuracionContacto.botones.cv.mostrar) {
            botonCv.classList.add("hidden");
        } else {
            botonCv.href = configuracionContacto.botones.cv.url;
            if (botonCvTexto) botonCvTexto.textContent = configuracionContacto.botones.cv.texto;
        }
    }

    if (botonLinkedin && configuracionContacto.botones.linkedin) {
        if (!configuracionContacto.botones.linkedin.mostrar) {
            botonLinkedin.classList.add("hidden");
        } else {
            botonLinkedin.href = configuracionContacto.botones.linkedin.url;
            if (botonLinkedinTexto) botonLinkedinTexto.textContent = configuracionContacto.botones.linkedin.texto;
        }
    }
}