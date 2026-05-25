function renderizarExperienciaTitulos() {
    if (typeof configuracionExperienciaTitulos === "undefined") {
        console.error("No se encontró configuracionExperienciaTitulos.");
        return;
    }

    const seccion = document.getElementById("experiencia-titulos");

    if (!seccion) return;

    if (!configuracionExperienciaTitulos.mostrarSeccion) {
        seccion.classList.add("hidden");
        return;
    }

    renderizarEncabezadoExperienciaTitulos();
    renderizarItemsExperienciaTitulos();
    activarAnimacionScrollExperienciaTitulos();
}

function renderizarEncabezadoExperienciaTitulos() {
    const titulo = document.getElementById("experiencia-titulos-titulo");
    const subtitulo = document.getElementById("experiencia-titulos-subtitulo");

    if (titulo) titulo.textContent = configuracionExperienciaTitulos.titulo;
    if (subtitulo) subtitulo.textContent = configuracionExperienciaTitulos.subtitulo;
}

function renderizarItemsExperienciaTitulos() {
    const contenedor = document.getElementById("experiencia-titulos-listado");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    const itemsOrdenados = [...configuracionExperienciaTitulos.items].sort((a, b) => {
        return new Date(b.orden) - new Date(a.orden);
    });

    itemsOrdenados.forEach((item, index) => {
        const articulo = document.createElement("article");

        const posicion = index % 2 === 0 ? "item-izquierda" : "item-derecha";
        const icono = item.tipo === "experiencia" ? "work" : "school";

        articulo.className = `item-experiencia-titulo ${posicion}`;

        articulo.innerHTML = `
            <div class="bloque-info-timeline">
                <h3 class="titulo-item-experiencia">${item.titulo}</h3>
                <span class="fecha-item-experiencia">${item.fecha}</span>
                <p class="entidad-item-experiencia">${item.institucion}</p>
            </div>

            <div class="nodo-timeline">
                <span class="material-symbols-outlined">${icono}</span>
            </div>

            <div class="bloque-descripcion-timeline">
                <div class="tarjeta-descripcion-timeline">
                    <p class="descripcion-item-experiencia">${item.descripcion}</p>
                </div>
            </div>
        `;

        contenedor.appendChild(articulo);
    });
}
function activarAnimacionScrollExperienciaTitulos() {
    const tarjetas = document.querySelectorAll(".item-experiencia-titulo");

    if (!tarjetas.length) return;

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    tarjetas.forEach(tarjeta => observador.observe(tarjeta));
}