document.addEventListener("DOMContentLoaded", () => {
    renderizarDetalleProyecto();
});

function renderizarDetalleProyecto() {
    const parametros = new URLSearchParams(window.location.search);
    const idProyecto = parametros.get("id");

    if (!idProyecto) {
        mostrarProyectoNoEncontrado();
        return;
    }

    const proyecto = configuracionProyectos.proyectos.find(p => p.id === idProyecto);

    if (!proyecto) {
        mostrarProyectoNoEncontrado();
        return;
    }

    cargarTextosProyecto(proyecto);
    cargarFotosProyecto(proyecto);
    cargarDescripcionExtendidaProyecto(proyecto);
    cargarTecnologiasProyecto(proyecto);
    cargarAccionProyecto(proyecto);
    cargarBotonCv();
    configurarBotonesCarrusel();
}

function cargarTextosProyecto(proyecto) {
    const categoria = document.getElementById("detalle-proyecto-categoria");
    const titulo = document.getElementById("detalle-proyecto-titulo");
    const descripcion = document.getElementById("detalle-proyecto-descripcion");

    if (categoria) categoria.textContent = proyecto.categoria || "Proyecto";

    if (titulo) {
        titulo.innerHTML = obtenerTituloConDestacado(proyecto.titulo);
    }

    if (descripcion) {
        descripcion.textContent = proyecto.descripcion;
    }

    document.title = `${proyecto.titulo} - Gabriel Bettiga`;
}

function obtenerTituloConDestacado(titulo) {
    const partes = titulo.split(" ");

    if (partes.length <= 1) return titulo;

    const ultimaPalabra = partes.pop();
    return `${partes.join(" ")} <span class="destacado">${ultimaPalabra}</span>`;
}

function cargarFotosProyecto(proyecto) {
    const contenedor = document.getElementById("detalle-proyecto-carrusel");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    const fotos = proyecto.fotos && proyecto.fotos.length > 0
        ? proyecto.fotos
        : [{ titulo: proyecto.titulo, url: proyecto.imagen }];

    fotos.forEach(foto => {
        const slide = document.createElement("article");
        slide.className = "detalle-slide";

        slide.innerHTML = `
            <div class="detalle-slide-card">
                <img src="${foto.url}" alt="${foto.titulo || proyecto.titulo}">

                <div class="detalle-slide-overlay">
                    <span class="detalle-slide-titulo-azul">${foto.titulo || proyecto.titulo}</span>
                </div>
            </div>
        `;

        const tarjetaImagen = slide.querySelector(".detalle-slide-card");

        if (tarjetaImagen) {
            tarjetaImagen.addEventListener("click", () => {
                abrirModalImagenProyecto(foto, proyecto);
            });
        }

        contenedor.appendChild(slide);
    });

    inicializarModalImagenProyecto();
}

function cargarDescripcionExtendidaProyecto(proyecto) {
    const contenedor = document.getElementById("detalle-proyecto-descripcion-extendida");

    if (!contenedor) return;

    if (!proyecto.descripcionDetalle) {
        contenedor.classList.add("oculto");
        return;
    }

    contenedor.classList.remove("oculto");
    contenedor.innerHTML = proyecto.descripcionDetalle;
}

function cargarTecnologiasProyecto(proyecto) {
    const contenedor = document.getElementById("detalle-proyecto-tecnologias");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    const tecnologias = proyecto.etiquetas || [];

    if (tecnologias.length === 0) {
        contenedor.innerHTML = `
            <p class="mensaje-sin-tecnologias">No hay tecnologías cargadas para este proyecto.</p>
        `;
        return;
    }

    tecnologias.forEach(nombreTecnologia => {
        const tecnologiaBase = buscarTecnologia(nombreTecnologia);

        const item = document.createElement("div");
        item.className = "detalle-tecnologia-item";
        item.style.setProperty("--color-tecnologia", tecnologiaBase.color || "#00dbe9");

        item.innerHTML = `
            <div class="detalle-tecnologia-icono">
                <img 
                    src="${tecnologiaBase.imagen}" 
                    alt="Logo de ${nombreTecnologia}"
                    class="detalle-tecnologia-logo"
                >
            </div>

            <span class="detalle-tecnologia-nombre">${nombreTecnologia}</span>
        `;

        contenedor.appendChild(item);
    });
}

function buscarTecnologia(nombre) {
    const mapa = {
        ".NET": {
            imagen: "assets/img/logos/logo-.net.png",
            color: "#8b5cf6"
        },
        "C#": {
            imagen: "assets/img/logos/logo-Cshap.png",
            color: "#a855f7"
        },
        "C/C++": {
            imagen: "assets/img/logos/logo-c++.png",
            color: "#3b82f6"
        },
        "SQL": {
            imagen: "assets/img/logos/logo-sql.png",
            color: "#dc2626"
        },
        "HTML5": {
            imagen: "assets/img/logos/logo-html5.png",
            color: "#f97316"
        },
        "CSS3": {
            imagen: "assets/img/logos/logo-css.png",
            color: "#38bdf8"
        },
        "JavaScript": {
            imagen: "assets/img/logos/logo-js.png",
            color: "#facc15"
        },
        "TypeScript": {
            imagen: "assets/img/logos/logo-typeScript.png",
            color: "#3178c6"
        },
        "React": {
            imagen: "assets/img/logos/logo-react.png",
            color: "#22d3ee"
        },
        "Tailwind": {
            imagen: "assets/img/logos/logo-tailwind.png",
            color: "#38bdf8"
        },
        "Bootstrap": {
            imagen: "assets/img/logos/logo-bootstrap.png",
            color: "#8b5cf6"
        },
        "Java": {
            imagen: "assets/img/logos/logo-java.webp",
            color: "#ef4444"
        },
        "Git": {
            imagen: "assets/img/logos/logo-git.png",
            color: "#f97316"
        },
        "APIs": {
            imagen: "assets/img/logos/logo-api.png",
            color: "#84cc16"
        }
    };

    return mapa[nombre] || {
        imagen: "assets/img/logos/logo-api.png",
        color: "#00dbe9"
    };
}

function cargarAccionProyecto(proyecto) {
    const card = document.getElementById("detalle-proyecto-accion-card");
    const descripcion = document.getElementById("detalle-proyecto-accion-descripcion");
    const boton = document.getElementById("detalle-proyecto-accion-boton");
    const textoBoton = document.getElementById("detalle-proyecto-accion-texto");

    if (!card) return;

    if (!proyecto.accion || !proyecto.accion.mostrar) {
        card.classList.add("oculto");
        return;
    }

    const tipo = proyecto.accion.tipo || "demo";

    if (descripcion) {
        descripcion.textContent = tipo === "github"
            ? "Accedé al repositorio del proyecto para ver el código fuente, estructura y documentación disponible."
            : "Explorá la aplicación funcionando en vivo desde el enlace configurado para este proyecto.";
    }

    if (boton) {
        boton.href = proyecto.accion.url || "#";
    }

    if (textoBoton) {
        textoBoton.textContent = proyecto.accion.texto || "Ver proyecto";
    }
}

function cargarBotonCv() {
    const botonCv = document.getElementById("boton-flotante-cv");

    if (!botonCv) return;

    if (typeof datosPersonales !== "undefined" && datosPersonales.rutaCv) {
        botonCv.href = datosPersonales.rutaCv;
    }
}

function configurarBotonesCarrusel() {
    const carrusel = document.getElementById("detalle-proyecto-carrusel");
    const btnIzquierda = document.getElementById("btn-carrusel-izquierda");
    const btnDerecha = document.getElementById("btn-carrusel-derecha");

    if (!carrusel) return;

    if (btnIzquierda) {
        btnIzquierda.addEventListener("click", () => {
            carrusel.scrollBy({ left: -700, behavior: "smooth" });
        });
    }

    if (btnDerecha) {
        btnDerecha.addEventListener("click", () => {
            carrusel.scrollBy({ left: 700, behavior: "smooth" });
        });
    }
}

function abrirModalImagenProyecto(foto, proyecto) {
    const modal = document.getElementById("modal-imagen-proyecto");
    const imagen = document.getElementById("modal-imagen-proyecto-img");
    const titulo = document.getElementById("modal-imagen-proyecto-titulo");

    if (!modal || !imagen || !titulo) return;

    imagen.src = foto.url;
    imagen.alt = foto.titulo || proyecto.titulo;
    titulo.textContent = foto.titulo || proyecto.titulo;

    modal.classList.remove("oculto");
    document.body.style.overflow = "hidden";
}

function cerrarModalImagenProyecto() {
    const modal = document.getElementById("modal-imagen-proyecto");
    const imagen = document.getElementById("modal-imagen-proyecto-img");

    if (!modal) return;

    modal.classList.add("oculto");
    document.body.style.overflow = "";

    if (imagen) {
        imagen.src = "";
        imagen.alt = "";
    }
}

function inicializarModalImagenProyecto() {
    const modal = document.getElementById("modal-imagen-proyecto");
    const botonCerrar = document.getElementById("cerrar-modal-imagen-proyecto");

    if (!modal) return;

    if (botonCerrar) {
        botonCerrar.onclick = cerrarModalImagenProyecto;
    }

    modal.onclick = (e) => {
        if (e.target === modal) {
            cerrarModalImagenProyecto();
        }
    };

    window.onkeydown = (e) => {
        if (e.key === "Escape" && !modal.classList.contains("oculto")) {
            cerrarModalImagenProyecto();
        }
    };
}

function mostrarProyectoNoEncontrado() {
    const main = document.querySelector(".detalle-proyecto-main");

    if (!main) return;

    main.innerHTML = `
        <section class="detalle-proyecto-header">
            <div class="detalle-categoria">
                <span></span>
                <p>Error</p>
            </div>

            <h1>Proyecto <span class="destacado">no encontrado</span></h1>

            <p>No se encontró el proyecto solicitado. Volvé al portfolio y seleccioná otro proyecto.</p>

            <a href="index.html#proyectos" class="detalle-accion-boton" style="max-width: 260px; margin-top: 2rem;">
                Volver al portfolio
            </a>
        </section>
    `;
}