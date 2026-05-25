async function cargarServicios() {
    const contenedor = document.getElementById("servicios-container");

    if (!contenedor) return;

    try {
        const respuesta = await fetch("servicios.html");

        if (!respuesta.ok) {
            throw new Error("No se pudo cargar servicios.html");
        }

        const html = await respuesta.text();
        contenedor.innerHTML = html;

        renderizarServicios();

    } catch (error) {
        console.error("Error al cargar la sección Servicios:", error);
    }
}

document.addEventListener("DOMContentLoaded", cargarServicios);