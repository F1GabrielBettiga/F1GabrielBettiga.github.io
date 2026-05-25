function renderizarHero() {
    if (typeof datosPersonales === "undefined" || typeof configuracionHero === "undefined") {
        console.error("No se encontró datosPersonales o configuracionHero.");
        return;
    }

    renderizarInsigniaHero();
    renderizarTituloHero();
    renderizarDescripcionHero();
    renderizarEtiquetasHero();
    renderizarBotonCvHero();
    renderizarImagenHero();
    renderizarInsigniasImagenHero();
}

function renderizarInsigniaHero() {
    const contenedorInsignia = document.getElementById("hero-insignia");

    if (!contenedorInsignia) return;

    if (!configuracionHero.mostrarInsignia) return;

    contenedorInsignia.innerHTML = `
        <span class="punto-disponible"></span>
        <span id="hero-insignia-texto">${configuracionHero.insignia}</span>
    `;

    contenedorInsignia.classList.remove("hidden");
    contenedorInsignia.classList.add("elemento-revelado");
}

function renderizarTituloHero() {
    const titulo = document.getElementById("hero-titulo");

    if (!titulo) return;

    const textoTitulo = configuracionHero.titulo;
    const palabraDestacada = configuracionHero.palabraDestacada;

    if (palabraDestacada && textoTitulo.includes(palabraDestacada)) {
        titulo.innerHTML = textoTitulo.replace(
            palabraDestacada,
            `<span class="hero-palabra-destacada">${palabraDestacada}</span>`
        );
    } else {
        titulo.textContent = textoTitulo;
    }

    titulo.classList.add("elemento-revelado");
    titulo.style.animationDelay = "0.15s";
}

function renderizarDescripcionHero() {
    const descripcion = document.getElementById("hero-descripcion");

    if (!descripcion) return;

    descripcion.textContent = configuracionHero.descripcion || datosPersonales.descripcion;
    descripcion.classList.add("elemento-revelado");
    descripcion.style.animationDelay = "0.3s";
}

function renderizarEtiquetasHero() {
    const contenedorEtiquetas = document.getElementById("hero-etiquetas");

    if (!contenedorEtiquetas) return;
    if (!configuracionHero.mostrarEtiquetas) return;

    contenedorEtiquetas.innerHTML = "";

    configuracionHero.etiquetas.forEach(etiqueta => {
        const item = document.createElement("div");
        item.className = "etiqueta-hero elemento-revelado";
        item.style.animationDelay = "0.45s";

        item.innerHTML = `
            <span class="material-symbols-outlined">${etiqueta.icono}</span>
            <span class="text-sm font-medium">${etiqueta.texto}</span>
        `;

        contenedorEtiquetas.appendChild(item);
    });
}

function renderizarBotonCvHero() {
    const botonCv = document.getElementById("hero-boton-cv");
    const textoBotonCv = document.getElementById("hero-boton-cv-texto");

    if (!botonCv || !textoBotonCv) return;

    if (!configuracionHero.mostrarBotonCv) return;

    botonCv.href = datosPersonales.rutaCv;
    textoBotonCv.textContent = configuracionHero.textoBotonCv;
    botonCv.classList.remove("hidden");
    botonCv.classList.add("elemento-revelado");
    botonCv.style.animationDelay = "0.65s";
}

function renderizarImagenHero() {
    const contenedorImagen = document.getElementById("hero-contenedor-imagen");
    const imagen = document.getElementById("hero-imagen");

    if (!contenedorImagen || !imagen) return;

    if (!configuracionHero.mostrarImagen) return;

    imagen.src = datosPersonales.fotoPerfil;
    imagen.alt = `Foto de ${datosPersonales.nombre}`;

    contenedorImagen.classList.remove("hidden");
    contenedorImagen.classList.add("flex", "elemento-revelado");
    contenedorImagen.style.animationDelay = "0.35s";
}

function renderizarInsigniasImagenHero() {
    const contenedor = document.getElementById("hero-insignias-imagen");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    configuracionHero.insigniasImagen.forEach((insignia, indice) => {
        const item = document.createElement("div");
        item.className = `insignia-imagen ${insignia.posicion}`;
        item.style.animationDelay = `${0.2 + indice * 0.4}s`;

        if (insignia.tipo === "estado") {
            item.innerHTML = `
                <div class="insignia-caja flex items-center gap-2 px-4 py-2 rounded-full">
                    <div class="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
                    <span class="text-white font-bold text-sm tracking-widest uppercase">${insignia.texto}</span>
                </div>
            `;
        } else if (insignia.tipo === "icono") {
            item.innerHTML = `
                <div class="insignia-caja p-3 rounded-lg flex items-center gap-2">
                    <span class="material-symbols-outlined text-cyan-300 text-xl">${insignia.icono}</span>
                    <span class="text-xs font-bold uppercase tracking-widest">${insignia.texto}</span>
                </div>
            `;
        } else {
            item.innerHTML = `
                <div class="insignia-caja px-5 py-3 rounded-xl">
                    <span class="text-cyan-300 font-bold text-lg tracking-tight">${insignia.texto}</span>
                </div>
            `;
        }

        contenedor.appendChild(item);
    });
}