document.addEventListener("DOMContentLoaded", () => {
    const contenedorHero = document.getElementById("contenedorHero");

    if (!contenedorHero) {
        console.error("No se encontró el contenedor con ID contenedorHero.");
        return;
    }

    const rutaHero = "hero.html";

    fetch(rutaHero)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("Error al cargar hero.html");
            }

            return respuesta.text();
        })
        .then(html => {
            contenedorHero.innerHTML = html;

            if (typeof renderizarHero === "function") {
                renderizarHero();
            }
        })
        .catch(error => {
            console.error("Fallo al cargar la sección Hero:", error);
        });
});