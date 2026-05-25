async function cargarProyectos() {
    const contenedor = document.getElementById("proyectos-container");

    if (!contenedor) return;

    try {
        const respuesta = await fetch("proyectos.html");

        if (!respuesta.ok) {
            throw new Error("No se pudo cargar proyectos.html");
        }

        const html = await respuesta.text();
        contenedor.innerHTML = html;

        renderizarProyectos();

    } catch (error) {
        console.error("Error al cargar la sección Proyectos:", error);
    }
}

document.addEventListener("DOMContentLoaded", cargarProyectos);