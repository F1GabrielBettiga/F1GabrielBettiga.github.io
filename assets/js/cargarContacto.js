async function cargarContacto() {
    const contenedor = document.getElementById("contacto-container");

    if (!contenedor) return;

    try {
        const respuesta = await fetch("contacto.html");

        if (!respuesta.ok) {
            throw new Error("No se pudo cargar contacto.html");
        }

        const html = await respuesta.text();
        contenedor.innerHTML = html;

        renderizarContacto();

    } catch (error) {
        console.error("Error al cargar la sección Contacto:", error);
    }
}

document.addEventListener("DOMContentLoaded", cargarContacto);