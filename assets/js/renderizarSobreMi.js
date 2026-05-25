function renderizarSobreMi() {
    if (typeof configuracionSobreMi === "undefined") {
        console.error("No se encontró configuracionSobreMi.");
        return;
    }

    if (!configuracionSobreMi.mostrarSeccion) {
        const seccion = document.getElementById("sobre-mi");
        if (seccion) seccion.classList.add("hidden");
        return;
    }

    renderizarTextosSobreMi();
    renderizarDatosSobreMi();
    renderizarTecnologiasSobreMi();
}

function renderizarTextosSobreMi() {
    const titulo = document.getElementById("sobre-mi-titulo");
    const subtitulo = document.getElementById("sobre-mi-subtitulo");
    const contenedorParrafos = document.getElementById("sobre-mi-parrafos");

    if (titulo) titulo.textContent = configuracionSobreMi.titulo;
    if (subtitulo) subtitulo.textContent = configuracionSobreMi.subtitulo;

    if (!contenedorParrafos) return;

    contenedorParrafos.innerHTML = "";

    configuracionSobreMi.parrafos.forEach(parrafo => {
        const p = document.createElement("p");
        p.textContent = parrafo;
        contenedorParrafos.appendChild(p);
    });
}

function renderizarDatosSobreMi() {
    const ubicacion = document.getElementById("sobre-mi-ubicacion");
    const educacion = document.getElementById("sobre-mi-educacion");

    if (ubicacion) ubicacion.textContent = configuracionSobreMi.ubicacion;
    if (educacion) educacion.textContent = configuracionSobreMi.educacion;
}

function renderizarTecnologiasSobreMi() {
    const tituloTecnologias = document.getElementById("sobre-mi-titulo-tecnologias");
    const contenedorTecnologias = document.getElementById("sobre-mi-tecnologias");

    if (tituloTecnologias) {
        tituloTecnologias.textContent = configuracionSobreMi.tituloTecnologias;
    }

    if (!contenedorTecnologias) return;

    contenedorTecnologias.innerHTML = "";

    configuracionSobreMi.tecnologias.forEach(tecnologia => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-tecnologia";

        if (tecnologia.color) {
            tarjeta.style.setProperty("--color-tecnologia", tecnologia.color);
        }

        tarjeta.innerHTML = `
            <img 
                class="icono-tecnologia" 
                src="${tecnologia.imagen}" 
                alt="${tecnologia.alt || tecnologia.nombre}"
            >
            <span class="nombre-tecnologia">${tecnologia.nombre}</span>
        `;

        contenedorTecnologias.appendChild(tarjeta);
    });
}