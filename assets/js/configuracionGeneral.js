// ======================================================
// 1. DATOS PERSONALES GENERALES
// ======================================================

const datosPersonales = {
    nombre: "Gabriel Bettiga",
    logoTexto: "Gabriel Bettiga",

    subtitulo: ".NET Developer",

    descripcionProfesional:
        "Desarrollador de software con experiencia en el ecosistema Microsoft. Especializado en crear arquitecturas robustas, APIs escalables y soluciones empresariales con un enfoque en la calidad del código y la experiencia del usuario.",

    email: "f1gabriel_bettiga@outlook.es",

    telefonoVisible: "+54 9 11 4917-7021",
    telefonoWhatsapp: "5491149177021",

    linkedinTexto: "www.linkedin.com/in/gustavo-bettiga",
    linkedinUrl: "https://www.linkedin.com/in/gustavo-bettiga/",

    githubTexto: "https://github.com/F1GabrielBettiga",
    githubUrl: "https://github.com/F1GabrielBettiga",

    portfolio: "https://f1gabrielbettiga.github.io/",

    ubicacion: "Buenos Aires, Argentina",

    rutaCv: "assets/documentos/CV-BettigaGustavoGabriel.pdf",
    fotoPerfil: "assets/img/profile.jpg"
};


// ======================================================
// 2. HERO
// ======================================================

const configuracionHero = {
    insignia: "Disponible para nuevos desafíos",

    titulo: "Transformo ideas en software",
    palabraDestacada: "software",

    descripcion: datosPersonales.descripcionProfesional,

    textoBotonCv: "Descargar CV",

    mostrarBotonCv: true,
    mostrarInsignia: true,
    mostrarEtiquetas: true,
    mostrarImagen: true,

    etiquetas: [
        {
            texto: ".NET",
            icono: "settings_ethernet"
        },
        {
            texto: "React",
            icono: "data_object"
        },
        {
            texto: "SQL Server",
            icono: "database"
        }
    ],

    insigniasImagen: [
        {
            texto: "C#",
            tipo: "texto",
            posicion: "superior-derecha"
        },
        {
            texto: ".NET",
            tipo: "estado",
            posicion: "inferior-izquierda"
        },
        {
            texto: "SQL",
            tipo: "icono",
            icono: "database",
            posicion: "inferior-derecha"
        }
    ]
};


// ======================================================
// 3. NAVBAR
// ======================================================

const configuracionNavbar = {
    logoNavbar: datosPersonales.logoTexto,

    mostrarBotonContacto: true,
    mostrarEfectoScroll: true,
    mostrarIndicadorActivo: true,

    enlaces: [
        { nombre: "Inicio", id: "inicio", ruta: "#inicio" },
        { nombre: "Sobre mí", id: "sobre-mi", ruta: "#sobre-mi" },
        { nombre: "Servicios", id: "servicios", ruta: "#servicios" },
        { nombre: "Proyectos", id: "proyectos", ruta: "#proyectos" },
        { nombre: "Experiencia", id: "experiencia", ruta: "#experiencia" },
        { nombre: "Certificados", id: "certificados", ruta: "#certificados" },
        { nombre: "Contacto", id: "contacto", ruta: "#contacto" }
    ]
};


// ======================================================
// 4. SOBRE MÍ
// ======================================================

const configuracionSobreMi = {
    mostrarSeccion: true,

    titulo: "Sobre mí",
    subtitulo: "Mi camino en desarrollo de software.",

    parrafos: [
        "Soy Técnico Superior en Programación egresado de la UTN, con experiencia en el área de sistemas trabajando en Texcom, donde participé en el mantenimiento y evolución de aplicaciones internas, desarrollo de pantallas, consultas a base de datos, soporte a usuarios y resolución de incidencias.",

        "Durante esa experiencia también formé parte de la migración de una aplicación desde Visual Basic a .NET, implementando vistas, manejo de datos entre controladores y pantallas, ajustes funcionales y mejoras sobre sistemas utilizados en procesos internos de la empresa.",

        "Para seguir fortaleciendo mi perfil como desarrollador, realicé cursos de C#, .NET y SQL, y actualmente me encuentro estudiando la carrera de Ciencia de Datos e Inteligencia Artificial. Además, estoy mejorando mis conocimientos en React para ampliar mi stack y poder desarrollar interfaces más modernas y dinámicas.",

        "En paralelo, desarrollo proyectos freelance para clientes, como una aplicación web de pedidos para una panchería, una landing page para Paseos Isaías orientada a la gestión de reservas de viajes, y actualmente una aplicación de ventas para un local de motos dedicado a la venta de repuestos. Estos proyectos me permiten aplicar mis conocimientos en casos reales, combinando desarrollo web, lógica de negocio, diseño responsive e integración con WhatsApp."
    ],

    ubicacion: datosPersonales.ubicacion,

    educacion: "UTN - Técnico Superior en Programación",

    tituloTecnologias: "Tecnologías que utilizo",

    tecnologias: [
        {
            nombre: ".NET",
            imagen: "assets/img/logos/logo-.net.png",
            alt: "Logo de .NET",
            color: "#8b5cf6"
        },
        {
            nombre: "C/C++",
            imagen: "assets/img/logos/logo-c++.png",
            alt: "Logo de C++",
            color: "#3b82f6"
        },
        {
            nombre: "C#",
            imagen: "assets/img/logos/logo-Cshap.png",
            alt: "Logo de C#",
            color: "#a855f7"
        },
        {
            nombre: "Java",
            imagen: "assets/img/logos/logo-java.webp",
            alt: "Logo de Java",
            color: "#ef4444"
        },
        {
            nombre: "SQL",
            imagen: "assets/img/logos/logo-sql.png",
            alt: "Logo de SQL Server",
            color: "#dc2626"
        },
        {
            nombre: "HTML5",
            imagen: "assets/img/logos/logo-html5.png",
            alt: "Logo de HTML5",
            color: "#f97316"
        },
        {
            nombre: "CSS",
            imagen: "assets/img/logos/logo-css.png",
            alt: "Logo de CSS3",
            color: "#38bdf8"
        },
        {
            nombre: "JavaScript",
            imagen: "assets/img/logos/logo-js.png",
            alt: "Logo de JavaScript",
            color: "#facc15"
        },
        {
            nombre: "TypeScript",
            imagen: "assets/img/logos/logo-typeScript.png",
            alt: "Logo de TypeScript",
            color: "#3178c6"
        },
        {
            nombre: "Git",
            imagen: "assets/img/logos/logo-git.png",
            alt: "Logo de Git",
            color: "#f97316"
        },
        {
            nombre: "Tailwind",
            imagen: "assets/img/logos/logo-tailwind.png",
            alt: "Logo de Tailwind CSS",
            color: "#38bdf8"
        },
        {
            nombre: "React",
            imagen: "assets/img/logos/logo-react.png",
            alt: "Logo de React",
            color: "#22d3ee"
        },
        {
            nombre: "Bootstrap",
            imagen: "assets/img/logos/logo-bootstrap.png",
            alt: "Logo de Bootstrap",
            color: "#8b5cf6"
        },
        {
            nombre: "APIs",
            imagen: "assets/img/logos/logo-api.png",
            alt: "Icono de APIs",
            color: "#84cc16"
        }
    ]
};


// ======================================================
// 5. SERVICIOS
// ======================================================

const configuracionServicios = {
    mostrarSeccion: true,

    titulo: "En qué puedo ayudarte",

    descripcion:
        "Desarrollo aplicaciones web completas, desde la base de datos hasta la interfaz, aplicando buenas prácticas y arquitectura en capas.",

    items: [
        {
            titulo: "Desarrollo Web a Medida",
            icono: "code",
            descripcion:
                "Creación de aplicaciones, sitios web y landing pages adaptadas a cada proyecto, combinando tecnologías como .NET, React, JavaScript, HTML, CSS y Tailwind según la necesidad del cliente."
        },
        {
            titulo: "RESTful API Design",
            icono: "api",
            descripcion:
                "Diseño e implementación de APIs estructuradas y documentadas para facilitar la integración entre diferentes sistemas y servicios."
        },
        {
            titulo: "Publicación y Deploy",
            icono: "cloud_upload",
            descripcion:
                "Configuración de entornos productivos y automatización de despliegues para garantizar una entrega continua y ordenada."
        },
        {
            titulo: "Database Optimization",
            icono: "database",
            descripcion:
                "Modelado de datos eficiente y optimización de consultas SQL para mejorar los tiempos de respuesta de las aplicaciones."
        },
        {
            titulo: "Identity & Security",
            icono: "admin_panel_settings",
            descripcion:
                "Implementación de autenticación, autorización y gestión de roles para proteger datos y controlar accesos dentro del sistema."
        }
    ],

    cta: {
        mostrar: true,
        texto:
            "¿Tenés una consulta o propuesta? Si querés ver más sobre mis proyectos o ponerte en contacto conmigo, podés escribirme sin problema.",
        textoBoton: "Contactarme",
        icono: "send",
        link: "#contacto"
    }
};


// ======================================================
// 6. CONTACTO
// ======================================================

const configuracionContacto = {
    mostrarSeccion: true,

    etiqueta: "Contacto",
    titulo: "Conectemos",

    descripcion:
        "Estoy disponible para nuevas oportunidades y proyectos. Si querés contactarme, acá tenés mis datos.",

    estado: {
        mostrar: true,
        texto: "Disponible"
    },

    datos: [
        {
            label: "Email",
            valor: datosPersonales.email,
            icono: "alternate_email",
            tipo: "email",
            url: `mailto:${datosPersonales.email}`
        },
        {
            label: "WhatsApp / Teléfono",
            valor: datosPersonales.telefonoVisible,
            icono: "chat",
            tipo: "link",
            url: `https://wa.me/${datosPersonales.telefonoWhatsapp}`
        },
        {
            label: "LinkedIn",
            valor: datosPersonales.linkedinTexto,
            icono: "hub",
            tipo: "link",
            url: datosPersonales.linkedinUrl
        },
        {
            label: "GitHub",
            valor: datosPersonales.githubTexto,
            icono: "terminal",
            tipo: "link",
            url: datosPersonales.githubUrl
        },
        {
            label: "Ubicación",
            valor: datosPersonales.ubicacion,
            icono: "location_on",
            tipo: "texto",
            url: ""
        }
    ],

    botones: {
        cv: {
            mostrar: true,
            texto: "Descargar CV",
            url: datosPersonales.rutaCv
        },
        linkedin: {
            mostrar: true,
            texto: "Ir a LinkedIn",
            url: datosPersonales.linkedinUrl
        }
    }
};