async function cargarCertificaciones() {
    const contenedor = document.getElementById("certificaciones-container");

    if (!contenedor) return;

    try {
        const respuesta = await fetch("certificaciones.html");

        if (!respuesta.ok) {
            throw new Error("No se pudo cargar certificaciones.html");
        }

        const html = await respuesta.text();
        contenedor.innerHTML = html;

        renderizarCertificaciones();

    } catch (error) {
        console.error("Error al cargar la sección Certificaciones:", error);
    }
}

document.addEventListener("DOMContentLoaded", cargarCertificaciones);