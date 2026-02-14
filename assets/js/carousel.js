// assets/js/carousel.js
document.addEventListener("DOMContentLoaded", () => {
  const mainImg = document.getElementById("carouselMainImage");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");
  const counter = document.getElementById("carouselCounter");
  const thumbs = Array.from(document.querySelectorAll(".carousel-thumb"));

  // Si esta página no tiene carrusel, no hacemos nada.
  if (!mainImg || thumbs.length === 0) return;

  // Lista de imágenes (sale de data-full)
  const images = thumbs.map((t) => t.dataset.full).filter(Boolean);

  // Si no pusiste data-full, fallback: usa el src del <img> interno
  if (images.length === 0) {
    thumbs.forEach((t) => {
      const img = t.querySelector("img");
      if (img?.src) images.push(img.src);
    });
  }

  let currentIndex = 0;

  const setActiveThumb = (index) => {
    thumbs.forEach((t, i) => {
      const isActive = i === index;

      // Activo: borde primary, ring
      t.classList.toggle("border-2", isActive);
      t.classList.toggle("border-primary", isActive);
      t.classList.toggle("ring-2", isActive);
      t.classList.toggle("ring-primary/20", isActive);

      // Inactivo: opacidad + borde suave
      if (!isActive) {
        t.classList.add("opacity-60");
        t.classList.remove("border-2", "border-primary", "ring-2", "ring-primary/20");
        t.classList.add("border", "border-white/10");
      } else {
        t.classList.remove("opacity-60");
      }
    });
  };

  const render = () => {
    const total = images.length;
    const url = images[currentIndex];

    if (url) mainImg.src = url;
    if (counter) counter.textContent = `${currentIndex + 1} / ${total}`;

    setActiveThumb(currentIndex);

    // scroll suave para que se vea la miniatura activa
    thumbs[currentIndex]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const goTo = (index) => {
    if (images.length === 0) return;
    currentIndex = (index + images.length) % images.length; // loop infinito
    render();
  };

  // Click en miniaturas
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => goTo(i));
  });

  // Botones
  prevBtn?.addEventListener("click", () => goTo(currentIndex - 1));
  nextBtn?.addEventListener("click", () => goTo(currentIndex + 1));

  // Teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") goTo(currentIndex - 1);
    if (e.key === "ArrowRight") goTo(currentIndex + 1);
  });

  // Estado inicial: si el mainImg ya tiene src, intenta ubicarlo
  const initialSrc = mainImg.getAttribute("src");
  const initialIndex = images.findIndex((x) => x === initialSrc);
  if (initialIndex >= 0) currentIndex = initialIndex;

  render();
});
