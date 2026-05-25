async function cargarExperienciaTitulos() {
    const contenedor = document.getElementById("experiencia-titulos-container");

    if (!contenedor) return;

    try {
        const respuesta = await fetch("experienciaTitulos.html");

        if (!respuesta.ok) {
            throw new Error("No se pudo cargar experienciaTitulos.html");
        }

        const html = await respuesta.text();
        contenedor.innerHTML = html;

        renderizarExperienciaTitulos();

    } catch (error) {
        console.error("Error al cargar la sección Experiencia y Educación:", error);
    }
}

document.addEventListener("DOMContentLoaded", cargarExperienciaTitulos);