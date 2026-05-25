const configuracionProyectos = {
    mostrarSeccion: true,

    titulo: "Proyectos",
    subtitulo: "Mis aplicaciones y desarrollos.",

    proyectos: [
        {
            id: "sistema-cpr-texcom",
            titulo: "Sistema CPR – Texcom",
            categoria: "Sistema interno empresarial",
            descripcion: "Sistema interno de producción utilizado en Texcom para el seguimiento de rollos de tela dentro del circuito productivo y la migración parcial desde una aplicación de escritorio hacia .NET MVC.",
            descripcionDetalle: `
            <div class="detalle-descripcion-extendida">
            <h2>Sobre el proyecto</h2>

            <p>
                Este proyecto corresponde a un sistema interno de producción utilizado en la empresa textil Texcom.
                La aplicación permitía realizar el seguimiento de los rollos de tela dentro del circuito productivo,
                registrando su información, estado y ubicación a medida que avanzaban por los distintos sectores de la planta:
                crudo, tintorería, local y depósito.
            </p>

            <p>
                El sistema originalmente funcionaba como una aplicación de escritorio y posteriormente se inició un proceso
                de migración hacia una aplicación web basada en .NET MVC.
            </p>

            <h3>Mi participación</h3>

            <p>
                Dentro del equipo participé principalmente en tareas de soporte a sistemas y colaboración con el área de desarrollo.
                Mi intervención se centró en la implementación de algunas pantallas y vistas específicas del sistema,
                carga y visualización de datos mediante código de barras, ajustes sobre funcionalidades existentes,
                consultas a base de datos y modificaciones puntuales de Stored Procedures en SQL Server.
            </p>

            <div class="detalle-aportes-grid">
                <div>
                    <strong>Seguimiento productivo</strong>
                    <span>Registro de rollos de tela con tipo, peso, estado y condición.</span>
                </div>

                <div>
                    <strong>Código de barras</strong>
                    <span>Carga rápida de información mediante lector.</span>
                </div>

                <div>
                    <strong>Ubicación</strong>
                    <span>Visualización del recorrido del rollo dentro del proceso industrial.</span>
                </div>

                <div>
                    <strong>Migración</strong>
                    <span>Colaboración en el pasaje de aplicación desktop a entorno web MVC.</span>
                </div>

                <div>
                    <strong>Base de datos</strong>
                    <span>Consultas SQL y modificaciones de Stored Procedures en SQL Server.</span>
                </div>

                <div>
                    <strong>Vistas</strong>
                    <span>Desarrollo y ajustes de pantallas específicas del sistema.</span>
                </div>

                <div>
                    <strong>Soporte</strong>
                    <span>Análisis de incidencias y trabajo conjunto con usuarios finales.</span>
                </div>
            </div>

            <p class="detalle-nota-proyecto">
                Debido a tratarse de un sistema propietario de la empresa, no se dispone de material completo ni código fuente público.
                Las imágenes mostradas corresponden únicamente a algunas pantallas conservadas a modo ilustrativo.
                La participación fue parcial dentro del proyecto general, colaborando en funcionalidades concretas y soporte técnico
                durante el proceso de migración y mantenimiento del sistema.
            </p>
        </div>
    `,
            imagen: "assets/img/proyectos/proyecto-CPR/LoginNuevo.jpg",
            alt: "Sistema CPR – Texcom",
            color: "#06b6d4",
            etiquetas: [
                "C#",
                ".NET",
                "SQL",
                "HTML5",
                "CSS3",
                "Bootstrap"
            ],
            urlDetalle: "detalleProyecto.html?id=sistema-cpr-texcom",

            fotos: [
                {
                    titulo: "Login nuevo",
                    url: "assets/img/proyectos/proyecto-CPR/LoginNuevo.jpg"
                },
                {
                    titulo: "Login anterior",
                    url: "assets/img/proyectos/proyecto-CPR/Loginviejo.jpeg"
                },
                {
                    titulo: "Catálogo nuevo",
                    url: "assets/img/proyectos/proyecto-CPR/CatalogoNuevo.jpeg"
                },
                {
                    titulo: "Catálogo anterior",
                    url: "assets/img/proyectos/proyecto-CPR/CatalogoViejo.jpeg"
                }
            ],

            accion: {
                mostrar: false,
                texto: "",
                url: "",
                tipo: ""
            }
        },

        {
            id: "pedidos-automatizados",
            titulo: "Panchería - Sistema de Pedidos",
            categoria: "Sistema de pedidos web",
            descripcion: "Aplicación web para un emprendimiento gastronómico, orientada a gestionar pedidos, productos, ingredientes, métodos de entrega, cupones, cálculo de envío por distancia y envío automático del pedido por WhatsApp.",
            descripcionDetalle: `
        <div class="detalle-descripcion-extendida">
            <h2>Sobre el proyecto</h2>

            <p>
                Este proyecto consiste en una aplicación web de pedidos desarrollada para un emprendimiento gastronómico.
                El objetivo fue crear una solución práctica para que los clientes puedan consultar el menú, armar su pedido,
                personalizar productos y enviarlo directamente por WhatsApp con toda la información necesaria.
            </p>

            <p>
                La aplicación permite visualizar el menú, agregar productos al carrito, elegir cantidades, sumar o quitar ingredientes,
                aplicar cupones, seleccionar método de pago y definir el tipo de entrega. Para el envío a domicilio, se trabajó con
                coordenadas y servicios de mapas como OpenStreetMap / Nominatim para estimar la distancia entre el local y la dirección
                del cliente, permitiendo calcular automáticamente el costo de envío según las reglas configuradas.
            </p>

            <p>
                También se trabajó una experiencia visual adaptable, con modo día/noche, diseño responsive y mensajes claros según el estado
                del local. Si el local está cerrado, el usuario puede seguir viendo el menú, pero no puede finalizar el pedido. De la misma forma,
                si el envío a domicilio no está dentro del horario configurado, se informa al usuario y se bloquea esa opción.
            </p>

            <h3>Funcionalidades principales</h3>

            <div class="detalle-aportes-grid">
                <div>
                    <strong>Menú dinámico</strong>
                    <span>Visualización de productos organizados con imágenes, precios, descripciones y categorías.</span>
                </div>

                <div>
                    <strong>Carrito de pedidos</strong>
                    <span>Permite agregar productos, modificar cantidades, eliminar ítems y revisar el resumen antes de finalizar.</span>
                </div>

                <div>
                    <strong>Personalización</strong>
                    <span>El usuario puede agregar ingredientes extra o quitar ingredientes del producto antes de confirmarlo.</span>
                </div>

                <div>
                    <strong>Extras y adicionales</strong>
                    <span>Uso de modales para seleccionar agregados, extras y variantes del producto de forma ordenada.</span>
                </div>

                <div>
                    <strong>Modo día/noche</strong>
                    <span>Interfaz con cambio visual entre tema claro y oscuro para mejorar la experiencia de uso.</span>
                </div>

                <div>
                    <strong>Métodos de entrega</strong>
                    <span>Opciones configurables como retiro en local, envío a domicilio y consumo en mesa.</span>
                </div>

                <div>
                    <strong>Cálculo de envío</strong>
                    <span>Cálculo del costo de envío según la distancia entre el local y el domicilio del cliente, tomando coordenadas y aplicando reglas configuradas por kilómetro.</span>
                </div>

                <div>
                    <strong>Mapas y coordenadas</strong>
                    <span>Uso de servicios de mapas como OpenStreetMap / Nominatim para obtener coordenadas a partir de una dirección y calcular la distancia estimada del envío.</span>
                </div>

                <div>
                    <strong>Horarios de envío</strong>
                    <span>Control de disponibilidad para envío a domicilio según el horario configurado.</span>
                </div>

                <div>
                    <strong>Local abierto/cerrado</strong>
                    <span>Cuando el local está cerrado, el menú se puede visualizar, pero no se permite enviar el pedido.</span>
                </div>

                <div>
                    <strong>Cupones</strong>
                    <span>Aplicación de cupones de descuento según las condiciones definidas para el pedido.</span>
                </div>

                <div>
                    <strong>Pago en efectivo</strong>
                    <span>Cálculo de descuentos o beneficios cuando el cliente selecciona pago en efectivo.</span>
                </div>

                <div>
                    <strong>Pago con tarjeta</strong>
                    <span>Cálculo de recargos o ajustes según el método de pago seleccionado.</span>
                </div>

                <div>
                    <strong>WhatsApp automático</strong>
                    <span>El pedido final se arma en un mensaje preconfigurado y se redirige al cliente a WhatsApp para enviarlo.</span>
                </div>

                <div>
                    <strong>Configuración editable</strong>
                    <span>Gran parte del comportamiento del sistema se controla desde archivos de configuración para facilitar cambios.</span>
                </div>
            </div>

            <p class="detalle-nota-proyecto">
                Este proyecto fue desarrollado pensando en un caso real de uso para un emprendimiento gastronómico.
                La solución evita depender de una base de datos o panel complejo, priorizando una estructura liviana,
                configurable y fácil de mantener para cambios de productos, precios, horarios, cupones y métodos de entrega.
            </p>
        </div>
    `,
            imagen: "assets/img/proyectos/proyecto-Pancheria/Home.jpg",
            alt: "Panchería - Sistema de Pedidos",
            color: "#f43f5e",
            etiquetas: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "Tailwind"
            ],
            urlDetalle: "detalleProyecto.html?id=pedidos-automatizados",

            fotos: [
                {
                    titulo: "Home",
                    url: "assets/img/proyectos/proyecto-Pancheria/Home.jpg"
                },
                {
                    titulo: "Menú",
                    url: "assets/img/proyectos/proyecto-Pancheria/Menu.jpg"
                },
                {
                    titulo: "Menú con filtros",
                    url: "assets/img/proyectos/proyecto-Pancheria/MenuFiltro.jpg"
                },
                {
                    titulo: "Carrito de detalles",
                    url: "assets/img/proyectos/proyecto-Pancheria/CarritoDetalles.jpg"
                },
                {
                    titulo: "Agregar producto",
                    url: "assets/img/proyectos/proyecto-Pancheria/ModalAgregar.jpg"
                },
                {
                    titulo: "Extras del producto",
                    url: "assets/img/proyectos/proyecto-Pancheria/ModalExtras.jpg"
                },
                {
                    titulo: "Agregar item",
                    url: "assets/img/proyectos/proyecto-Pancheria/AgregarIteam.jpg"
                },
                {
                    titulo: "Cupones",
                    url: "assets/img/proyectos/proyecto-Pancheria/Cupones.jpg"
                },
                {
                    titulo: "Envío a domicilio",
                    url: "assets/img/proyectos/proyecto-Pancheria/EnvioDomicilio.jpg"
                },
                {
                    titulo: "Método efectivo",
                    url: "assets/img/proyectos/proyecto-Pancheria/MetodoEfectivo.jpg"
                },
                {
                    titulo: "Método tarjeta",
                    url: "assets/img/proyectos/proyecto-Pancheria/MetodoTarjeta.jpg"
                },
                {
                    titulo: "Local Cerrado",
                    url: "assets/img/proyectos/proyecto-Pancheria/LocalCerrado.jpg"
                },
                {
                    titulo: "Modo día",
                    url: "assets/img/proyectos/proyecto-Pancheria/ModoDia.jpg"
                }
            ],

            accion: {
                mostrar: true,
                texto: "Ver demo en vivo",
                url: "https://f1gabrielbettiga.github.io/pancheria-web/index.html",
                tipo: "demo"
            }
        },

        {
            id: "paseos-isaias",
            titulo: "Paseos Isaías",
            categoria: "Landing page freelance",
            descripcion: "Landing page desarrollada para un emprendimiento de viajes, enfocada en mostrar salidas disponibles, explicar el proceso de reserva y facilitar el contacto directo por WhatsApp.",
            descripcionDetalle: `
        <div class="detalle-descripcion-extendida">
            <h2>Sobre el proyecto</h2>

            <p>
                Paseos Isaías es una landing page desarrollada para un emprendimiento de viajes que necesitaba una solución simple,
                funcional y acorde a su presupuesto. El objetivo principal fue crear una página clara, rápida de navegar y orientada
                a que las personas puedan consultar o reservar viajes de forma directa.
            </p>

            <p>
                Luego de conversar con el cliente y entender sus necesidades, se definió una estructura enfocada en mostrar los viajes
                disponibles, explicar cómo reservar, brindar información del servicio y facilitar el contacto mediante WhatsApp.
                La idea fue evitar una solución compleja y priorizar una herramienta práctica que realmente pudiera utilizarse en el día a día.
            </p>

            <p>
                La página fue desarrollada como sitio estático, sin base de datos ni panel administrativo, ya que el emprendimiento maneja
                pocos viajes por mes. Por ese motivo, las actualizaciones de contenido se realizan directamente sobre el código cuando el
                cliente lo necesita.
            </p>

            <h3>Funcionalidades principales</h3>

            <div class="detalle-aportes-grid">
                <div>
                    <strong>Viajes disponibles</strong>
                    <span>Sección para mostrar las salidas activas con información visual y datos principales.</span>
                </div>

                <div>
                    <strong>Detalle de viaje</strong>
                    <span>Vista con más información sobre cada paseo para que el usuario pueda conocer mejor la propuesta.</span>
                </div>

                <div>
                    <strong>Reserva por WhatsApp</strong>
                    <span>Botones y formularios que preparan el mensaje automáticamente para enviar la consulta por WhatsApp.</span>
                </div>

                <div>
                    <strong>Cómo reservar</strong>
                    <span>Sección explicativa para guiar al usuario en el proceso de consulta y reserva.</span>
                </div>

                <div>
                    <strong>Contacto y redes</strong>
                    <span>Accesos directos a WhatsApp y redes sociales del emprendimiento.</span>
                </div>

                <div>
                    <strong>Diseño responsive</strong>
                    <span>Interfaz adaptada para que la página se vea correctamente en celular, tablet y escritorio.</span>
                </div>
            </div>

            <p class="detalle-nota-proyecto">
                Por una cuestión de presupuesto del cliente, el deploy se realizó en GitHub Pages como alternativa gratuita.
                Al tratarse de una landing page sin base de datos, esta solución encajaba correctamente con las necesidades del proyecto.
                Todos los textos, imágenes y contenido fueron proporcionados por el cliente.
            </p>
        </div>
    `,
            imagen: "assets/img/proyectos/proyecto-PaseosIsaias/Home.jpg",
            alt: "Paseos Isaías",
            color: "#f59e0b",
            etiquetas: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "Tailwind"
            ],
            urlDetalle: "detalleProyecto.html?id=paseos-isaias",

            fotos: [
                {
                    titulo: "Home",
                    url: "assets/img/proyectos/proyecto-PaseosIsaias/Home.jpg"
                },
                {
                    titulo: "Viajes disponibles",
                    url: "assets/img/proyectos/proyecto-PaseosIsaias/ViajesDisponibles.png"
                },
                {
                    titulo: "Vista de viajes",
                    url: "assets/img/proyectos/proyecto-PaseosIsaias/VistaDeViajes.png"
                },
                {
                    titulo: "Pasos para reservar",
                    url: "assets/img/proyectos/proyecto-PaseosIsaias/PasosParaReservar.png"
                },
                {
                    titulo: "Información del micro",
                    url: "assets/img/proyectos/proyecto-PaseosIsaias/InformacionMicro.png"
                },
                {
                    titulo: "Sección de contacto",
                    url: "assets/img/proyectos/proyecto-PaseosIsaias/seccionContactame.png"
                }
            ],

            accion: {
                mostrar: true,
                texto: "Ver demo en vivo",
                url: "https://saucofernandaviajes-spec.github.io/paseos-isaias/index.html",
                tipo: "demo"
            }
        },

        {
            id: "resenas-peliculas",
            titulo: "Plataforma de Reseñas de Películas",
            categoria: "Aplicación web MVC",
            descripcion: "Aplicación web de reseñas de películas con registro de usuarios, inicio de sesión, roles, gestión de contenido y creación de reseñas con puntuación y comentarios.",
            descripcionDetalle: `
        <div class="detalle-descripcion-extendida">
            <h2>Sobre el proyecto</h2>

            <p>
                Esta aplicación es una plataforma web de reseñas de películas creada con el objetivo de practicar y aplicar
                un flujo completo de desarrollo web: desde la persistencia de datos y la arquitectura del proyecto hasta
                la interfaz de usuario y la experiencia de uso.
            </p>

            <p>
                El sistema permite a los usuarios registrarse, iniciar sesión y participar dejando reseñas y puntuaciones
                sobre películas disponibles en la cartelera. La aplicación está organizada en módulos y pantallas para
                separar claramente las responsabilidades, incluyendo navegación por secciones, listados, vistas de detalle
                y formularios de alta, edición y eliminación.
            </p>

            <h3>Funcionalidades principales</h3>

            <p>
                Se implementó autenticación y autorización con ASP.NET Identity para controlar el acceso según el rol del
                usuario, diferenciando funcionalidades de usuario común y administrador.
            </p>

            <div class="detalle-aportes-grid">
                <div>
                    <strong>Autenticación</strong>
                    <span>Registro, login, logout y manejo de sesión con ASP.NET Identity.</span>
                </div>

                <div>
                    <strong>Roles y permisos</strong>
                    <span>Separación de accesos entre usuario común y administrador.</span>
                </div>

                <div>
                    <strong>Películas</strong>
                    <span>Listado de cartelera, vista de detalle y gestión administrativa.</span>
                </div>

                <div>
                    <strong>Reseñas</strong>
                    <span>Creación de reseñas con puntuación, comentario y visualización en el detalle de la película.</span>
                </div>

                <div>
                    <strong>Categorías</strong>
                    <span>Administración de categorías y asociación con películas.</span>
                </div>

                <div>
                    <strong>Usuarios</strong>
                    <span>Gestión de usuarios desde panel administrador y edición de perfil.</span>
                </div>

                <div>
                    <strong>Persistencia</strong>
                    <span>Uso de Entity Framework y SQL Server, con relaciones entre entidades y validaciones.</span>
                </div>

                <div>
                    <strong>Interacción dinámica</strong>
                    <span>Uso de Fetch API / AJAX para acciones sin recargar la página, como la creación de reseñas mediante modal y vista parcial.</span>
                </div>
            </div>
        </div>
    `,
            imagen: "assets/img/proyectos/proyecto-ResenasdePeliculas/Home.jpg",
            alt: "Plataforma de Reseñas de Películas",
            color: "#8b5cf6",
            etiquetas: [
                "C#",
                ".NET",
                "SQL",
                "HTML5",
                "CSS3",
                "JavaScript",
                "Bootstrap"
            ],
            urlDetalle: "detalleProyecto.html?id=resenas-peliculas",

            fotos: [
                {
                    titulo: "Home",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/Home.jpg"
                },
                {
                    titulo: "Inicio de sesión",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/InicioSesion.jpg"
                },
                {
                    titulo: "Registro de usuario",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/Registrarse.jpg"
                },
                {
                    titulo: "Catálogo de películas",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/GestionDePeliculas.jpg"
                },
                {
                    titulo: "Crear película",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/CrearPlataforma.jpg"
                },
                {
                    titulo: "Editar película",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/EditarPelicula.jpg"
                },
                {
                    titulo: "Eliminar película",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/EliminarPelicula.jpg"
                },
                {
                    titulo: "Detalle de película",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/DetallesPelicula1.jpg"
                },
                {
                    titulo: "Detalle de película con reseñas",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/DetallesPelicula2.jpg"
                },
                {
                    titulo: "Crear reseña",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/CrearReseña.jpg"
                },
                {
                    titulo: "Mis reseñas",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/MisReseñas.jpg"
                },
                {
                    titulo: "Mi perfil",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/MiPerfil.jpg"
                },
                {
                    titulo: "Actualizar clave",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/MiPerfilActualizarClave.jpg"
                },
                {
                    titulo: "Panel administrador",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/MiPerfilAdmin.jpg"
                },
                {
                    titulo: "Administración de géneros",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/AdministracionGeneros.jpg"
                },
                {
                    titulo: "Añadir película",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/AñadirPelicula.jpg"
                },
                {
                    titulo: "Pantalla de error",
                    url: "assets/img/proyectos/proyecto-ResenasdePeliculas/PantallaDeError.jpg"
                }
            ],

            accion: {
                mostrar: true,
                texto: "Ver repositorio",
                url: "https://github.com/F1GabrielBettiga/ProyectoFinal4",
                tipo: "github"
            }
        },

        {
            id: "ecommerce",
            titulo: "E-Commerce",
            categoria: "Aplicación web",
            descripcion: "Sistema web tipo E-Commerce desarrollado en ASP.NET WebForms, con catálogo de artículos, registro de usuarios, favoritos y panel administrativo para gestionar productos, categorías y usuarios.",
            descripcionDetalle: `
        <div class="detalle-descripcion-extendida">
            <h2>Sobre el proyecto</h2>

            <p>
                Este proyecto consiste en un sistema web tipo E-Commerce desarrollado como aplicación ASP.NET WebForms.
                Fue creado con el objetivo de implementar un flujo completo de gestión de productos y usuarios,
                simulando el funcionamiento básico de una tienda online donde existe un área pública para clientes
                y un panel administrativo para la gestión del contenido.
            </p>

            <p>
                La aplicación permite visualizar artículos disponibles, registrarse, iniciar sesión y administrar
                información personal dentro del sistema. El sistema se encuentra dividido en secciones claramente separadas:
                navegación pública, área de usuario y panel de administración.
            </p>

            <p>
                Se implementó autenticación y autorización para controlar el acceso a las distintas pantallas, permitiendo
                que cada tipo de usuario vea solamente las funcionalidades que le corresponden. Además se trabajó la
                persistencia de datos, validaciones de formularios y navegación entre páginas manteniendo la sesión activa.
            </p>

            <h3>Funcionalidades principales</h3>

            <p>
                Desde la parte del usuario, es posible explorar el catálogo de artículos, filtrarlos por categoría,
                agregarlos a favoritos y acceder a su perfil. Por otro lado, el administrador dispone de un panel completo
                para gestionar el sistema: puede crear, modificar y eliminar productos, categorías y usuarios.
            </p>

            <div class="detalle-aportes-grid">
                <div>
                    <strong>Autenticación</strong>
                    <span>Registro, login, logout y manejo de sesión de usuario.</span>
                </div>

                <div>
                    <strong>Roles</strong>
                    <span>Diferenciación entre usuario cliente y administrador.</span>
                </div>

                <div>
                    <strong>Artículos</strong>
                    <span>Listado público, vista detallada y CRUD completo desde panel administrador.</span>
                </div>

                <div>
                    <strong>Categorías</strong>
                    <span>Organización de productos por categoría.</span>
                </div>

                <div>
                    <strong>Favoritos</strong>
                    <span>El usuario puede guardar artículos de interés.</span>
                </div>

                <div>
                    <strong>Usuarios</strong>
                    <span>Gestión administrativa de usuarios y edición de perfil.</span>
                </div>

                <div>
                    <strong>Validaciones</strong>
                    <span>Control de formularios y datos antes de persistir información.</span>
                </div>

                <div>
                    <strong>Persistencia</strong>
                    <span>Base de datos SQL Server integrada a la aplicación.</span>
                </div>
            </div>
        </div>
    `,
            imagen: "assets/img/proyectos/proyecto-Ecommerce/Home.jpg",
            alt: "E-Commerce",
            color: "#3b82f6",
            etiquetas: [
                "C#",
                ".NET",
                "SQL",
                "HTML5",
                "CSS3",
                "JavaScript",
                "Bootstrap"
            ],
            urlDetalle: "detalleProyecto.html?id=ecommerce",

            fotos: [
                {
                    titulo: "Home",
                    url: "assets/img/proyectos/proyecto-Ecommerce/Home.jpg"
                },
                {
                    titulo: "Home detalles",
                    url: "assets/img/proyectos/proyecto-Ecommerce/HomeDetalles.jpg"
                },
                {
                    titulo: "Login",
                    url: "assets/img/proyectos/proyecto-Ecommerce/Login.jpg"
                },
                {
                    titulo: "Registro de usuario",
                    url: "assets/img/proyectos/proyecto-Ecommerce/Registrarse.jpg"
                },
                {
                    titulo: "Mi perfil",
                    url: "assets/img/proyectos/proyecto-Ecommerce/MiPerfil.jpg"
                },
                {
                    titulo: "Mis favoritos",
                    url: "assets/img/proyectos/proyecto-Ecommerce/MisFavoritos.jpg"
                },
                {
                    titulo: "Administración de artículos",
                    url: "assets/img/proyectos/proyecto-Ecommerce/AdministracionArticulos.jpg"
                },
                {
                    titulo: "Administración de categorías",
                    url: "assets/img/proyectos/proyecto-Ecommerce/AdministracionCategorias.jpg"
                },
                {
                    titulo: "Administración de marcas",
                    url: "assets/img/proyectos/proyecto-Ecommerce/AdministracionMarcas.jpg"
                },
                {
                    titulo: "Administración de usuarios",
                    url: "assets/img/proyectos/proyecto-Ecommerce/AdministracionUsuarios.jpg"
                },
                {
                    titulo: "Editar artículo",
                    url: "assets/img/proyectos/proyecto-Ecommerce/EditarArticulo.jpg"
                },
                {
                    titulo: "Editar usuario",
                    url: "assets/img/proyectos/proyecto-Ecommerce/EditarUsuario.jpg"
                },
                {
                    titulo: "Ver detalles",
                    url: "assets/img/proyectos/proyecto-Ecommerce/VerDetalles.jpg"
                },
                {
                    titulo: "Pantalla de error",
                    url: "assets/img/proyectos/proyecto-Ecommerce/PantallaDeError.jpg"
                }
            ],

            accion: {
                mostrar: true,
                texto: "Ver repositorio",
                url: "https://github.com/F1GabrielBettiga/ProyectoFinal3",
                tipo: "github"
            }
        },

        {
            id: "gestion-articulos-desktop",
            titulo: "Gestión de Artículos (Desktop)",
            categoria: "Aplicación de escritorio",
            descripcion: "Aplicación de escritorio desarrollada en C# con Windows Forms para la gestión de artículos, incluyendo ABM, filtros, visualización de detalles, imágenes y persistencia en base de datos.",
            descripcionDetalle: `
        <div class="detalle-descripcion-extendida">
            <h2>Sobre el proyecto</h2>

            <p>
                Este proyecto es una aplicación de escritorio desarrollada en Windows Forms para la gestión de artículos.
                Fue creada en C# como práctica completa de un sistema tipo ABM, incluyendo alta, baja, modificación,
                visualización de detalles y conexión a base de datos.
            </p>

            <p>
                El objetivo fue construir una aplicación realista de administración de productos, trabajando la interacción
                con grillas, validaciones, filtros de búsqueda, carga de imágenes y un flujo de uso claro para el usuario.
            </p>

            <p>
                La pantalla principal muestra un listado en tabla con los artículos cargados, incluyendo código, nombre,
                descripción, marca, categoría y precio. Desde esa vista se pueden ejecutar acciones rápidas para agregar,
                modificar, eliminar y ver detalles de cada artículo.
            </p>

            <h3>Funcionalidades principales</h3>

            <p>
                Además de la gestión básica de artículos, se implementaron filtros para facilitar la búsqueda dentro del
                catálogo y una previsualización de imagen asociada al producto seleccionado.
            </p>

            <div class="detalle-aportes-grid">
                <div>
                    <strong>Listado completo</strong>
                    <span>Grilla con información clave del artículo, como código, marca, categoría y precio.</span>
                </div>

                <div>
                    <strong>ABM de artículos</strong>
                    <span>Alta, modificación y eliminación de productos desde botones dedicados.</span>
                </div>

                <div>
                    <strong>Vista de detalles</strong>
                    <span>Pantalla para visualizar información del artículo seleccionado sin editarlo.</span>
                </div>

                <div>
                    <strong>Filtros</strong>
                    <span>Filtro rápido por texto y filtro avanzado por campo, operador y valor.</span>
                </div>

                <div>
                    <strong>Imágenes</strong>
                    <span>Previsualización de imagen del artículo al seleccionar un registro.</span>
                </div>

                <div>
                    <strong>Validaciones</strong>
                    <span>Control de datos antes de guardar cambios para evitar inconsistencias.</span>
                </div>

                <div>
                    <strong>Persistencia</strong>
                    <span>Conexión a base de datos para guardar y consultar artículos, marcas y categorías.</span>
                </div>

                <div>
                    <strong>Arquitectura</strong>
                    <span>Separación de responsabilidades entre dominio, acceso a datos e interfaz.</span>
                </div>
            </div>
        </div>
    `,
            imagen: "assets/img/proyectos/proyecto-GestionDeArtículosDesktop/Home.jpg",
            alt: "Gestión de Artículos Desktop",
            color: "#10b981",
            etiquetas: [
                "C#",
                ".NET",
                "SQL"
            ],
            urlDetalle: "detalleProyecto.html?id=gestion-articulos-desktop",

            fotos: [
                {
                    titulo: "Home",
                    url: "assets/img/proyectos/proyecto-GestionDeArtículosDesktop/Home.jpg"
                },
                {
                    titulo: "Alta de artículo",
                    url: "assets/img/proyectos/proyecto-GestionDeArtículosDesktop/AltaDeArticulo.jpg"
                },
                {
                    titulo: "Modificar artículo",
                    url: "assets/img/proyectos/proyecto-GestionDeArtículosDesktop/ModificarArticulo.jpg"
                },
                {
                    titulo: "Eliminar artículo",
                    url: "assets/img/proyectos/proyecto-GestionDeArtículosDesktop/EliminarArticulo.jpg"
                },
                {
                    titulo: "Detalle del producto",
                    url: "assets/img/proyectos/proyecto-GestionDeArtículosDesktop/DetalleProducto.jpg"
                }
            ],

            accion: {
                mostrar: true,
                texto: "Ver repositorio",
                url: "https://github.com/F1GabrielBettiga/Proyecto-Final-Nivel-2-Maxi-Programa",
                tipo: "github"
            }
        }
    ]
};