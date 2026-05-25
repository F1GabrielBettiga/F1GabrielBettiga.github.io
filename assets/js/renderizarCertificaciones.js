function renderizarCertificaciones() {
    if (typeof configuracionExperienciaTitulos === "undefined") {
        console.error("No se encontró configuracionExperienciaTitulos.");
        return;
    }

    const contenedor = document.getElementById("certificaciones-listado");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    const certificados = configuracionExperienciaTitulos.items
        .filter(item => item.certificado === true && item.imagenCertificado)
        .sort((a, b) => new Date(b.orden) - new Date(a.orden));

    certificados.forEach(certificado => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-certificado";

        tarjeta.innerHTML = `
            <div class="imagen-certificado-contenedor">
                <img 
                    class="imagen-certificado"
                    src="${certificado.imagenCertificado}" 
                    alt="${certificado.titulo}"
                >
            </div>

            <div class="contenido-certificado">
                <h3 class="titulo-certificado">${certificado.titulo}</h3>
                <p class="institucion-certificado">${certificado.institucion}</p>
            </div>
        `;

        tarjeta.addEventListener("click", () => {
            abrirModalCertificado(certificado);
        });

        contenedor.appendChild(tarjeta);
    });

    inicializarModalCertificaciones();
}

function abrirModalCertificado(certificado) {
    const modal = document.getElementById("modal-certificado");
    const imagen = document.getElementById("modal-certificado-imagen");
    const titulo = document.getElementById("modal-certificado-titulo");
    const institucion = document.getElementById("modal-certificado-institucion");

    if (!modal || !imagen || !titulo || !institucion) return;

    imagen.src = certificado.imagenCertificado;
    imagen.alt = certificado.titulo;
    titulo.textContent = certificado.titulo;
    institucion.textContent = certificado.institucion;

    modal.classList.remove("oculto");
    document.body.style.overflow = "hidden";
}

function cerrarModalCertificado() {
    const modal = document.getElementById("modal-certificado");
    const imagen = document.getElementById("modal-certificado-imagen");

    if (!modal) return;

    modal.classList.add("oculto");
    document.body.style.overflow = "";

    if (imagen) {
        imagen.src = "";
    }
}

function inicializarModalCertificaciones() {
    const modal = document.getElementById("modal-certificado");
    const botonCerrar = document.querySelector(".boton-cerrar-certificado");

    if (!modal) return;

    if (botonCerrar) {
        botonCerrar.addEventListener("click", cerrarModalCertificado);
    }

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            cerrarModalCertificado();
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("oculto")) {
            cerrarModalCertificado();
        }
    });
}