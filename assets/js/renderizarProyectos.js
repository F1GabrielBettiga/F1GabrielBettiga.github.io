function renderizarProyectos() {
    if (typeof configuracionProyectos === "undefined") {
        console.error("No se encontró configuracionProyectos.");
        return;
    }

    const seccion = document.getElementById("proyectos");

    if (!seccion) return;

    if (!configuracionProyectos.mostrarSeccion) {
        seccion.classList.add("hidden");
        return;
    }

    renderizarEncabezadoProyectos();
    renderizarTarjetasProyectos();
}

function renderizarEncabezadoProyectos() {
    const titulo = document.getElementById("proyectos-titulo");
    const subtitulo = document.getElementById("proyectos-subtitulo");

    if (titulo) titulo.textContent = configuracionProyectos.titulo;
    if (subtitulo) subtitulo.textContent = configuracionProyectos.subtitulo;
}

function renderizarTarjetasProyectos() {
    const contenedor = document.getElementById("proyectos-listado");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    configuracionProyectos.proyectos.forEach(proyecto => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-proyecto";

        if (proyecto.color) {
            tarjeta.style.setProperty("--color-proyecto", proyecto.color);
        }

        tarjeta.addEventListener("click", () => {
            if (proyecto.urlDetalle) {
                window.location.href = proyecto.urlDetalle;
            }
        });

        const etiquetasHtml = proyecto.etiquetas.map(etiqueta => {
            return `<span class="etiqueta-proyecto">${etiqueta}</span>`;
        }).join("");

        tarjeta.innerHTML = `
            <div class="contenedor-imagen-proyecto">
                <img 
                    class="imagen-proyecto" 
                    src="${proyecto.imagen}" 
                    alt="${proyecto.alt || proyecto.titulo}"
                >
            </div>

            <div class="contenido-proyecto">
                <h3 class="titulo-tarjeta-proyecto">${proyecto.titulo}</h3>

                <p class="descripcion-proyecto">${proyecto.descripcion}</p>

                <div class="contenedor-etiquetas-proyecto">
                    ${etiquetasHtml}
                </div>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}