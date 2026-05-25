const configuracionExperienciaTitulos = {
    mostrarSeccion: true,

    titulo: "Experiencia y Educación",
    subtitulo: "Mi recorrido profesional y académico detallado.",

    items: [
        {
            titulo: "Técnico Superior en Programación",
            fecha: "2020 - 2025",
            institucion: "UTN",
            descripcion: "Tecnicatura universitaria con formación integral en programación, análisis de sistemas, bases de datos, metodologías de desarrollo, lógica, documentación técnica y resolución de problemas informáticos. La carrera me permitió construir una base sólida para comprender, diseñar y desarrollar soluciones de software desde una mirada técnica y funcional.",
            tipo: "educacion",
            orden: "2020-03-01",
            certificado: true,
            imagenCertificado: "assets/img/certificados/Titulo-UTN.png"
        },
        {
            titulo: "Analista de Sistemas / Soporte a Sistemas ",
            fecha: "Sept 2022 - Ago 2025",
            institucion: "Texcom",
            descripcion: "Participación en el desarrollo, mantenimiento y mejora de aplicaciones internas en entorno .NET, colaborando en el análisis de requerimientos, corrección de incidencias, creación de pantallas, vistas, formularios y soporte a funcionalidades utilizadas por usuarios internos. Intervine en la migración de una aplicación desde Visual Basic a .NET y en el desarrollo de módulos para el sistema CPR, orientado al seguimiento de rollos de tela dentro del proceso productivo mediante carga con código de barras, datos de producción y estados del rollo. También trabajé con SQL Server mediante consultas, validaciones de datos y soporte a Stored Procedures. De forma complementaria, brindé soporte técnico a usuarios, gestión de incidentes, administración de usuarios en Active Directory y mantenimiento básico de infraestructura IT.",
            tipo: "experiencia",
            orden: "2022-09-02",
            certificado: false,
            imagenCertificado: ""
        },
        {
            titulo: "Ciencia de Datos e IA",
            fecha: "Mar 2026 - En curso",
            institucion: "Instituto IEA",
            descripcion: "Carrera enfocada en análisis de datos, modelos predictivos e inteligencia artificial.",
            tipo: "educacion",
            orden: "2026-03-01",
            certificado: false,
            imagenCertificado: ""
        },
        {
            titulo: "Curso C# Nivel 4",
            fecha: "Dic 2025 - Ene 2026",
            institucion: "MaxiPrograma",
            descripcion: "Curso donde profundicé en el desarrollo web con .NET, trabajando con ASP.NET MVC, Entity Framework, Identity, Razor y SQL Server para crear aplicaciones con persistencia de datos, seguridad, vistas dinámicas y una estructura más profesional en capas.",
            tipo: "educacion",
            orden: "2025-12-01",
            certificado: true,
            imagenCertificado: "assets/img/certificados/Curso_CsharpNivel4.png"
        },
        {
            titulo: "Curso C# Nivel 3",
            fecha: "Sept 2025 - Dic 2025",
            institucion: "MaxiPrograma",
            descripcion: "Curso donde profundicé en el desarrollo web con C# y .NET, reforzando conocimientos de HTML, CSS, JavaScript, Bootstrap y ASP.NET WebForms. Me permitió aplicar conceptos de POO en aplicaciones web con interfaz, navegación, formularios y lógica de negocio.",
            tipo: "educacion",
            orden: "2025-09-01",
            certificado: true,
            imagenCertificado: "assets/img/certificados/Curso_CsharpNivel3.png"
        },
        {
            titulo: "Curso C# Nivel 2",
            fecha: "Ago 2025 - Sept 2025",
            institucion: "MaxiPrograma",
            descripcion: "Curso orientado a profundizar la programación orientada a objetos con C# y .NET, desarrollando aplicaciones de escritorio con interfaz gráfica, conexión a bases de datos SQL y una estructura más cercana a proyectos reales.",
            tipo: "educacion",
            orden: "2025-08-01",
            certificado: true,
            imagenCertificado: "assets/img/certificados/Curso_CsharpNivel2.png"
        },
        {
            titulo: "Curso de Bases de Datos",
            fecha: "Mar 2026 - Abr 2026",
            institucion: "MaxiPrograma",
            descripcion: "Formación enfocada en bases de datos relacionales y lenguaje SQL, abordando conceptos de diseño, administración y consulta de datos. Me permitió reforzar el manejo de información, estructuras relacionales y operaciones fundamentales sobre bases de datos.",
            tipo: "educacion",
            orden: "2026-02-01",
            certificado: true,
            imagenCertificado: "assets/img/certificados/Curso_SQL.png"
        },
        {
            titulo: "Pasante en Sistemas",
            fecha: "Sept 2022 - Feb 2023",
            institucion: "Texcom",
            descripcion: "Colaboración en el área de infraestructura IT, realizando soporte a usuarios mediante sistema de tickets, diagnóstico y reparación de PCs de oficina y producción, instalación de Windows y Windows Server, manejo básico de Active Directory, instalación de cableado, cámaras, antenas WiFi/endpoints, armado de patcheras, gestión de insumos y control de stock de hardware.",
            tipo: "experiencia",
            orden: "2022-09-01",
            certificado: false,
            imagenCertificado: ""
        },
        {
            titulo: "Curso Armado y Reparación de PC",
            fecha: "Ene 2016 - Dic 2016",
            institucion: "Centro de Formación Profesional N°403 Tigre",
            descripcion: "Formación práctica en diagnóstico, armado, reparación y mantenimiento de computadoras.",
            tipo: "educacion",
            orden: "2016-01-01",
            certificado: true,
            imagenCertificado: "assets/img/certificados/Certificado-ReparacionDePc.png"

        },
        {
            titulo: "Inglés básico (A1)",
            fecha: "Ago 2025 – Dic 2025",
            institucion: "LEA Institute",
            descripcion: "Formación inicial en inglés, enfocada en vocabulario, comprensión lectora y comunicación básica. Conocimientos en proceso de mejora continua.",
            tipo: "educacion",
            orden: "2025-08-08",
            certificado: false,
            imagenCertificado: ""
        },
        {
            titulo: "Desarrollador Web Freelance",
            fecha: "Feb 2026 - Actualidad",
            institucion: "Proyectos freelance",
            descripcion: "Desarrollo de soluciones web para emprendimientos y clientes, enfocadas en resolver necesidades concretas de gestión, reservas, pedidos y ventas. Entre los proyectos trabajados se incluyen una landing page para Paseos Isaías, orientada a mostrar viajes disponibles y facilitar reservas por WhatsApp; una aplicación web de pedidos para una panchería, con carrito, personalización de productos, cupones, métodos de pago, cálculo de envío y redirección automática a WhatsApp; y una aplicación en desarrollo para BPF Motos, pensada para la gestión interna de stock, productos, ventas, pagos combinados, usuarios y registro de operaciones. Estos proyectos me permiten aplicar desarrollo frontend, lógica de negocio, diseño responsive, configuración dinámica y soluciones adaptadas al presupuesto y necesidad de cada cliente.",
            tipo: "experiencia",
            orden: "2026-02-01",
            certificado: false,
            imagenCertificado: ""
        }
    ]
};