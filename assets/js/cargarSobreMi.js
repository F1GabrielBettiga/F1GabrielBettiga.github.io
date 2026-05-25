async function cargarSobreMi() {
    const contenedor = document.getElementById("sobre-mi-container");

    if (!contenedor) return;

    try {
        const respuesta = await fetch("sobreMi.html");

        if (!respuesta.ok) {
            throw new Error("No se pudo cargar sobreMi.html");
        }

        const html = await respuesta.text();
        contenedor.innerHTML = html;

        renderizarSobreMi();

    } catch (error) {
        console.error("Error al cargar la sección Sobre mí:", error);
    }
}

document.addEventListener("DOMContentLoaded", cargarSobreMi);