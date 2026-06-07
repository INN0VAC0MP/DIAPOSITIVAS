/**
 * Master Dataset containing structural schemas for all 90 workshop presentation slides
 */
const slidesData = [
    // --- DÍA 1: INTRODUCCIÓN A LAS PÁGINAS WEB Y LA IA (1 al 30) ---
    { id: 1, day: 1, title: "Bienvenidos al Mañana", subtitle: "Iniciamos el viaje del desarrollo moderno", icon: "fa-door-open", desc: "Alineación de objetivos de la jornada, metodologías ágiles e introducción al ecosistema." },
    { id: 2, day: 1, title: "Objetivos de Aprendizaje", subtitle: "Nuestra hoja de ruta clara", icon: "fa-bullseye", desc: "Aprenderás conceptos web esenciales, ingeniería de comandos funcionales y publicación remota." },
    { id: 3, day: 1, title: "¿Qué es una Página Web?", subtitle: "Desmitificando el código tradicional", icon: "fa-globe", desc: "Un documento digital estructurado accesible mediante protocolos de comunicación y servidores globales." },
    { id: 4, day: 1, title: "La Trinidad Web Esencial", subtitle: "Estructura, Estética e Interacción", icon: "fa-cubes", desc: "HTML5 edifica el esqueleto, CSS3 inyecta el estilo visual de marca, y JavaScript programa el cerebro interactivo." },
    { id: 5, day: 1, title: "Evolución Histórica Web", subtitle: "Desde la Web 1.0 hasta la Web3", icon: "fa-history", desc: "Pasamos de la lectura plana estática a la interacción social masiva, y ahora a entornos inteligentes con IA." },
    { id: 6, day: 1, title: "Importancia de la Presencia Digital", subtitle: "Por qué existir en internet hoy", icon: "fa-fingerprint", desc: "Una ventana al mundo disponible las 24 horas del día. Si tu proyecto no está en internet, no existe comercialmente." },
    { id: 7, day: 1, title: "Sitios Web vs Redes Sociales", subtitle: "El control absoluto de tu marca", icon: "fa-摆-nodes", desc: "Las redes rentan audiencias algorítmicas volátiles; un sitio web propio representa propiedad privada digital legítima." },
    { id: 8, day: 1, title: "Tipos de Sitios Web Modernos", subtitle: "Clasificación por objetivos de negocio", icon: "fa-sitemap", desc: "Desde landing pages directas hasta ecosistemas transaccionales multinivel y arquitecturas corporativas." },
    { id: 9, day: 1, title: "Sitios Corporativos Profesionales", subtitle: "La carta de presentación institucional", icon: "fa-building", desc: "Enfocados en construir credibilidad b2b/b2c, mostrar valores, servicios calificados e historia empresarial." },
    { id: 10, day: 1, title: "Tiendas Virtuales (E-commerce)", subtitle: "Monetización sin fronteras", icon: "fa-shopping-cart", desc: "Plataformas con catálogos dinámicos, gestión automatizada de inventarios y pasarelas de pago integradas." },
    { id: 11, day: 1, title: "Blogs y Sitios de Contenido", subtitle: "Estrategias de Inbound Marketing", icon: "fa-newspaper", desc: "Publicación de valor constante para posicionar orgánicamente en buscadores mediante indexación SEO." },
    { id: 12, day: 1, title: "Portafolios Digitales de Impacto", subtitle: "Tu currículum interactivo", icon: "fa-id-card", desc: "La mejor herramienta para freelancers y desarrolladores. Muestra tus casos de éxito de manera visual y premium." },
    { id: 13, day: 1, title: "Landing Pages de Alta Conversión", subtitle: "Arquitecturas de embudo directo", icon: "fa-filter", desc: "Páginas enfocadas en un único llamado a la acción: capturar datos de prospectos o vender un producto puntual." },
    { id: 14, day: 1, title: "Anatomía de una Web: El Menú", subtitle: "Sistemas de navegación usables", icon: "fa-compass", desc: "Estructuras accesibles (Navbar) que guían al usuario sin fricciones por las secciones prioritarias." },
    { id: 15, day: 1, title: "Anatomía de una Web: Sección Hero", subtitle: "La primera impresión en 3 segundos", icon: "fa-window-maximize", desc: "El bloque superior inicial. Debe contener un título impactante, un subtítulo descriptivo y una llamada a la acción clara." },
    { id: 16, day: 1, title: "Anatomía de una Web: Servicios", subtitle: "Comunicación de propuestas de valor", icon: "fa-concierge-bell", desc: "Distribución en bloques limpios que informan detalladamente soluciones específicas que resuelven dolores del cliente." },
    { id: 17, day: 1, title: "Anatomía de una Web: Testimonios", subtitle: "La psicología de la prueba social", icon: "fa-comments", desc: "Reseñas reales de clientes que reducen el riesgo percibido del comprador y disparan la confianza." },
    { id: 18, day: 1, title: "Anatomía de una Web: Formularios", subtitle: "El puente de contacto interactivo", icon: "fa-envelope-open-text", desc: "Campos validados donde los usuarios envían datos directos a los sistemas de seguimiento o bases de datos comerciales." },
    { id: 19, day: 1, title: "Anatomía de una Web: El Footer", subtitle: "El cierre estructural normativo", icon: "fa-shoe-prints", desc: "Pie de página con enlaces legales, datos de contacto consolidados, redes sociales y mapas del sitio." },
    { id: 20, day: 1, title: "¿Qué es la Inteligencia Artificial?", subtitle: "La revolución de los sistemas cognitivos", icon: "fa-robot", desc: "Algoritmos avanzados entrenados para procesar, razonar, aprender y generar soluciones contextuales automatizadas." },
    { id: 21, day: 1, title: "Entendiendo la IA Generativa", subtitle: "Modelos que crean desde cero", icon: "fa-wand-magic-sparkles", desc: "Sistemas capaces de producir texto, imágenes estéticas, lógica matemática y código funcional con base en órdenes humanas." },
    { id: 22, day: 1, title: "Casos de Uso de la IA en la Vida Real", subtitle: "Automatización omnipresente", icon: "fa-lightbulb", desc: "Desde diagnósticos médicos preventivos y predicciones financieras hasta la generación automática de software complejo." },
    { id: 23, day: 1, title: "La IA aplicada al Desarrollo Web", subtitle: "El nacimiento del programador aumentado", icon: "fa-code-branch", desc: "Modelos entrenados con billones de líneas de código que actúan como copilotos, resolviendo tareas técnicas complejas en segundos." },
    { id: 24, day: 1, title: "Beneficios de Co-crear con IA", subtitle: "Productividad multiplicada x10", icon: "fa-bolt", desc: "Eliminación del bloqueo de la hoja en blanco, optimización de velocidad de entrega y reducción extrema de costos de prototipado." },
    { id: 25, day: 1, title: "¿Qué es la Ingeniería de Prompts?", subtitle: "El arte de dar órdenes lógicas", icon: "fa-keyboard", desc: "La disciplina de estructurar textos con el contexto técnico idóneo para que los modelos de lenguaje den respuestas perfectas." },
    { id: 26, day: 1, title: "Fórmula de un Prompt Profesional", subtitle: "Estructura maestra para programar", icon: "fa-calculator", desc: "Asignación estricta de Rol + Contexto del problema + Tarea explícita paso a paso + Formato exacto de la salida esperada." },
    { id: 27, day: 1, title: "Ejemplos de Prompts Estructurados", subtitle: "Instrucciones de código efectivas", icon: "fa-terminal", desc: "Aprenderemos a pedir maquetaciones complejas usando jerarquías claras que eviten alucinaciones de la IA." },
    { id: 28, day: 1, title: "Actividad Práctica Guiada", subtitle: "Nuestra primera conversación técnica", icon: "fa-chalkboard-teacher", desc: "Interactuaremos con los modelos para definir el concepto, paleta de colores y arquitectura del proyecto escolar." },
    { id: 29, day: 1, title: "Resumen y Conclusiones del Día 1", subtitle: "Consolidando las bases teóricas", icon: "fa-bookmark", desc: "Ya sabes qué compone una web y cómo estructurar comandos iniciales eficientes. Mañana crearemos código vivo." },
    { id: 30, day: 1, title: "Desafío de Descanso", subtitle: "Preparándonos para la acción", icon: "fa-hourglass-half", desc: "Escribe en papel la idea del negocio que vas a desarrollar mañana y ten listos tus accesos a los modelos de IA." },

    // --- DÍA 2: CREANDO UNA WEB CON IA (31 al 60) ---
    { id: 31, day: 2, title: "Día 2: Bienvenidos al Desarrollo Vivo", subtitle: "Hoy creamos interfaces operativas", icon: "fa-laptop-code", desc: "Alineación metodológica para transformar ideas teóricas en bloques sintácticos reales de código frontend." },
    { id: 32, day: 2, title: "Configuración del Espacio de Trabajo", subtitle: "Herramientas listas para compilar", icon: "fa-sliders-h", desc: "Familiarización con editores modernos locales y la comunicación directa mediante interfaces de inteligencia artificial." },
    { id: 33, day: 2, title: "Prompt Maestro: Layout HTML5", subtitle: "Creando el armazón general", icon: "fa-file-code", desc: "Utilizaremos comandos especializados para obligar a la IA a escribir etiquetas semánticas sin meter vicios de código." },
    { id: 34, day: 2, title: "Estructura del Header Interactiva", subtitle: "Logotipos y barras integradas", icon: "fa-heading", desc: "Alineación de sistemas de navegación complejos que mantengan adaptabilidad ante colapsos móviles (menú hamburguesa)." },
    { id: 35, day: 2, title: "Construcción de la Sección Hero", subtitle: "Atracción visual garantizada", icon: "fa-star", desc: "Implementación de textos de gran tamaño combinados con botones de alta conversión generados algorítmicamente." },
    { id: 36, day: 2, title: "Maquetación del Menú Gastronómico", subtitle: "Sistemas para restaurantes y cafeterías", icon: "fa-utensils", desc: "Creación de listas ordenadas con descripciones, alérgenos y precios mediante técnicas de rejilla avanzada." },
    { id: 37, day: 2, title: "Alineación Estética mediante CSS Grid", subtitle: "Control total de dos dimensiones", icon: "fa-th", desc: "Uso de rejillas inteligentes para distribuir platos o productos de manera matemática y limpia en pantallas de escritorio." },
    { id: 38, day: 2, title: "Diseño Flexbox para Listas de Precios", subtitle: "Flexibilidad en una sola dimensión", icon: "fa-align-left", desc: "Espaciados proporcionales y alineación simétrica de nombres de platillos y sus respectivos costos monetarios." },
    { id: 39, day: 2, title: "Uso de Líneas Guías Líderes", subtitle: "Conectores visuales premium", icon: "fa-ellipsis-h", desc: "Técnicas CSS para unir platillos y precios mediante puntos suspendidos elegantes que mejoran la experiencia de usuario." },
    { id: 40, day: 2, title: "Implementación de Badges Flotantes", subtitle: "Destacando el inventario clave", icon: "fa-tag", desc: "Posicionamiento absoluto de etiquetas dinámicas como 'El Más Vendido' sobre elementos con posicionamiento relativo." },
    { id: 41, day: 2, title: "Introducción a Catálogos E-commerce", subtitle: "Vitrina comercial interactiva", icon: "fa-store", desc: "Estructuras modulares repetitivas adaptadas para mostrar fotografías, títulos, marcas y variaciones de productos." },
    { id: 42, day: 2, title: "Efectos Visuales Dinámicos (Hover)", subtitle: "Fascinación interactiva inmediata", icon: "fa-mouse-pointer", desc: "Uso de transiciones suaves CSS para generar sutiles acercamientos en imágenes (zoom effect) cuando pasa el cursor." },
    { id: 43, day: 2, title: "Maquetación de Precios Tachados", subtitle: "Estrategias psicológicas de oferta", icon: "fa-percentage", desc: "Estilos visuales para contrastar de manera limpia el costo original del producto frente al valor especial rebajado." },
    { id: 44, day: 2, title: "Diseño de la Barra Lateral de Filtros", subtitle: "Navegación de inventario eficiente", icon: "fa-sliders-h", desc: "Creación de bloques con selectores múltiples (checkboxes) para clasificar por tallas, colores, marcas o rangos." },
    { id: 45, day: 2, title: "Diseño del Panel de Carrito de Compras", subtitle: "Interfaz oculta deslizable", icon: "fa-shopping-bag", desc: "Estructuras laterales ('Slide-out Cart') fijas que aparecen de manera elegante para resumir la compra en curso." },
    { id: 46, day: 2, title: "Fichas Técnicas Multimedios", subtitle: "Galerías detalladas de producto", icon: "fa-images", desc: "Distribución armónica de una imagen principal complementada por rejillas de vistas alternativas en miniatura." },
    { id: 47, day: 2, title: "Tablas Comparativas de Servicios", subtitle: "Estructuración de planes comerciales", icon: "fa-table", desc: "Maquetación limpia de especificaciones operativas diferenciando opciones básicas, recomendadas y corporativas." },
    { id: 48, day: 2, title: "Diseño Destacado de Planes Recomendados", subtitle: "Direccionamiento visual estratégico", icon: "fa-arrow-up-right-from-square", desc: "Propiedades para hacer sobresalir un bloque del resto mediante sombras pronunciadas y sutiles incrementos de escala." },
    { id: 49, day: 2, title: "Maquetación de la Pasarela de Pago", subtitle: "La pantalla crítica del Checkout", icon: "fa-credit-card", desc: "Formularios limpios de alta seguridad visual para capturar datos de envío y campos estructurados bancarios." },
    { id: 50, day: 2, title: "Bloques de Reseñas de Clientes", subtitle: "Estética de opiniones verificadas", icon: "fa-user-check", desc: "Diseño de tarjetas de comentarios incorporando avatares redondeados, fechas de publicación e iconos decorativos." },
    { id: 51, day: 2, title: "Diseño de Interfaces para Chatbots", subtitle: "Asistencia virtual omnipresente", icon: "fa-comment-dots", desc: "Maquetación de consolas flotantes compactas e integradas de forma nativa en los extremos inferiores del lienzo web." },
    { id: 52, day: 2, title: "Estilos Fijos para la Burbuja de Chat", subtitle: "Posicionamiento absoluto inmóvil", icon: "fa-thumbtack", desc: "Uso de coordenadas fijas que garantizan la permanencia del punto de contacto durante scrolls profundos del usuario." },
    { id: 53, day: 2, title: "Cabeceras de Consola de Chat", subtitle: "Identidad visual del bot asistente", icon: "fa-info-circle", desc: "Estructuras con colores corporativos e indicadores luminosos que informan de inmediato la disponibilidad en línea." },
    { id: 54, day: 2, title: "Cuerpo de Conversación y Scroll Automático", subtitle: "El flujo de interacción libre", icon: "fa-stream", desc: "Estilos con desbordamiento vertical controlado para garantizar la visualización fluida de extensos flujos conversacionales." },
    { id: 55, day: 2, title: "Globos de Mensajes Asimétricos", subtitle: "Diseño de diálogos inteligibles", icon: "fa-bullhorn", desc: "Diferenciación cromática y alineaciones opuestas en la pantalla para separar los envíos del usuario de las respuestas de la IA." },
    { id: 56, day: 2, title: "Áreas de Entrada de Mensajes", subtitle: "Campos de texto de alta usabilidad", icon: "fa-pen-alt", desc: "Zonas inferiores de escritura acopladas horizontalmente con botones de acción que integran iconos vectoriales limpios." },
    { id: 57, day: 2, title: "Botones de Respuesta Rápida", subtitle: "Agilizando la navegación interactiva", icon: "fa-bolt", desc: "Diseño de comandos compactos ('Quick Replies') precargados que evitan la necesidad de escribir al usuario flojo." },
    { id: 58, day: 2, title: "Integración de Tipografías Premium", subtitle: "Identidad tipográfica elegante", icon: "fa-font", desc: "Carga remota de familias modernas (Google Fonts) que aumentan de forma inmediata la percepción de marca profesional." },
    { id: 59, day: 2, title: "Validación de Estilos en el Navegador", subtitle: "Inspección y depuración visual", icon: "fa-search-plus", desc: "Uso de herramientas nativas de desarrollo para verificar el correcto renderizado de clases y variables CSS creadas." },
    { id: 60, day: 2, title: "Resumen y Cierre del Día 2", subtitle: "Tu código local es una realidad", icon: "fa-check-double", desc: "Hemos estructurado y estilizado interfaces complejas con asistencia inteligente. Mañana daremos vida y publicaremos." },

    // --- DÍA 3: PUBLICACIÓN Y AUTOMATIZACIÓN (61 al 90) ---
    { id: 61, day: 3, title: "Día 3: El Nacimiento de tu Web", subtitle: "Hoy lanzamos tu proyecto al mundo entero", icon: "fa-cloud-upload-alt", desc: "Alineación operativa del último día: daremos interactividad con JavaScript y desplegaremos en servidores globales." },
    { id: 62, day: 3, title: "Lógica Viva con JavaScript", subtitle: "El motor de comportamiento dinámico", icon: "fa-brain", desc: "Pasamos del diseño estático a una aplicación viva. Conectaremos eventos reales que respondan a las acciones de los usuarios." },
    { id: 63, day: 3, title: "Control de Eventos: Abrir y Cerrar Chat", subtitle: "Interactividad en el clic", icon: "fa-toggle-on", desc: "Aprenderás a usar addEventListener en JavaScript para alternar clases de visibilidad CSS de la consola de soporte." },
    { id: 64, day: 3, title: "Captura de Entradas del Usuario", subtitle: "Procesando el texto de forma activa", icon: "fa-sign-in-alt", desc: "Lectura de cadenas de texto en inputs para inyectar nuevos globos de conversación dinámicos directo al árbol del DOM." },
    { id: 65, day: 3, title: "Lógicas de Validación en Formularios", subtitle: "Filtros de datos preventivos", icon: "fa-shield-alt", desc: "Validaremos campos vacíos y formatos de correo correctos mediante lógica condicional limpia antes de procesar envíos." },
    { id: 66, day: 3, title: "Simulación de Respuestas Asíncronas", subtitle: "Imitando procesos de pensamiento de IA", icon: "fa-history", desc: "Uso de temporizadores (setTimeout) en JavaScript para disparar respuestas automáticas programadas de forma realista." },
    { id: 67, day: 3, title: "Animación de Carga: Bot Escribiendo...", subtitle: "Psicología interactiva en la espera", icon: "fa-ellipsis-h", desc: "Implementación de animaciones basadas en keyframes CSS para crear la ilusión de procesamiento en vivo del asistente virtual." },
    { id: 68, day: 3, title: "Programación Interactiva del Carrito", subtitle: "Contadores numéricos en tiempo real", icon: "fa-plus-circle", desc: "Lógica matemática básica en JavaScript para acumular e incrementar dinámicamente indicadores flotantes de compra." },
    { id: 69, day: 3, title: "Introducción al Despliegue en la Nube", subtitle: "Saliendo del entorno local (localhost)", icon: "fa-server", desc: "Entender el flujo universal de subida de archivos: cómo el código se aloja en infraestructuras remotas seguras." },
    { id: 70, day: 3, title: "La Importancia Estratégica del Index.html", subtitle: "La regla de oro del servidor", icon: "fa-star-of-life", desc: "Por qué bautizar obligatoriamente en minúsculas el archivo raíz para que los servidores reconozcan la pantalla inicial de inmediato." },
    { id: 71, day: 3, title: "Ordenamiento del Árbol de Directorios", subtitle: "Estructuras limpias listas para producción", icon: "fa-folder-tree", desc: "Organización estricta de activos: empaquetado de imágenes en /images, estilos en /css y scripts lógicos en /js." },
    { id: 72, day: 3, title: "Conociendo las Plataformas de Hosting Modernas", subtitle: "Entornos rápidos y globales", icon: "fa-cloud", desc: "Análisis de infraestructura estática optimizada de alto rendimiento y capas gratuitas de por vida para proyectos iniciales." },
    { id: 73, day: 3, title: "Introducción Detallada a Netlify", subtitle: "Despliegue continuo al alcance de todos", icon: "fa-network-wired", desc: "Análisis de la plataforma líder de automatización web que permite subidas inmediatas con cero configuraciones de terminal." },
    { id: 74, day: 3, title: "Taller en Vivo: Arrastrar y Soltar Proyectos", subtitle: "De tu carpeta a internet en 5 segundos", icon: "fa-mouse", desc: "Demostración práctica: subiremos la landing page del taller simplemente arrastrando la carpeta raíz al navegador." },
    { id: 75, day: 3, title: "Análisis de la URL Pública Generada", subtitle: "Tu primer enlace mundial seguro", icon: "fa-link", desc: "Interpretación del subdominio gratuito provisto por la plataforma y la integración automática de certificados de seguridad SSL (HTTPS)." },
    { id: 76, day: 3, title: "Dominios Personalizados Profesionales", subtitle: "Eliminando la marca del proveedor", icon: "fa-at", desc: "Cómo adquirir nombres comerciales propios (.com, .net, .org) y enlazarlos mediante configuraciones sencillas de registros DNS." },
    { id: 77, day: 3, title: "Introducción a las Automatizaciones con IA", subtitle: "Sistemas autónomos post-visita", icon: "fa-robot", desc: "Cómo conectar los formularios de la página web con hojas de cálculo automatizadas o sistemas de envío masivo de correos." },
    { id: 78, day: 3, title: "Estrategias de Captura de Clientes Reales", subtitle: "Transformando visitas en dinero", icon: "fa-money-bill-wave", desc: "Modelos de conversión: cómo usar la landing page creada como un imán de clientes para tu agencia o servicios independientes." },
    { id: 79, day: 3, title: "Errores Comunes: Rutas Rotas", subtitle: "Por qué no cargan tus imágenes en internet", icon: "fa-exclamation-triangle", desc: "Depuración de direcciones absolutas frente a relativas. Solución definitiva al error de archivos que se ven en PC pero no en línea." },
    { id: 80, day: 3, title: "Errores Comunes: Problemas de Caché", subtitle: "Por qué tus cambios no se ven reflejados", icon: "fa-sync-alt", desc: "Técnicas de limpieza y recarga forzada del navegador para obligar al sistema a descargar las últimas actualizaciones de código." },
    { id: 81, day: 3, title: "Estrategia Comercial: Tu Marca Personal", subtitle: "El valor de ser la referencia técnica", icon: "fa-user-astronaut", desc: "Cómo posicionarte en la universidad y redes sociales como el experto absoluto en soluciones digitales asistidas por IA." },
    { id: 82, day: 3, title: "Cómo Cobrar por tus Páginas Web", subtitle: "Guía de cotización realista para principiantes", icon: "fa-coins", desc: "Parámetros de mercado para empaquetar servicios: cuánto cobrar por una landing, una corporativa o menús interactivos QR." },
    { id: 83, day: 3, title: "Lanzamiento de la Comunidad Exclusiva", subtitle: "Tu red de apoyo permanente", icon: "fa-users", desc: "Presentación oficial de nuestro canal de soporte de por vida para compartir ofertas de trabajo, recursos y actualizaciones." },
    { id: 84, day: 3, title: "Proceso para Obtener el Certificado Digital", subtitle: "Reclamando tu aval de competencia", icon: "fa-certificate", desc: "Explicación del llenado obligatorio del formulario de salida para el procesamiento automatizado del documento académico." },
    { id: 85, day: 3, title: "Anuncio del Programa Avanzado Profesional", subtitle: "Llevando el conocimiento al límite", icon: "fa-graduation-cap", desc: "Preventa prioritaria de nuestro entrenamiento inmersivo para dominar bases de datos, pasarelas de pago y automatizaciones robustas." },
    { id: 86, day: 3, title: "Ejecución del Sorteo en Vivo", subtitle: "Premiando la disciplina y asistencia", icon: "fa-gift", desc: "Selección aleatoria mediante el script del taller para entregar asesorías y herramientas premium a los ganadores." },
    { id: 87, day: 3, title: "Preguntas, Dudas y Respuestas Libres", subtitle: "Micrófono abierto para el aula de clase", icon: "fa-comments", desc: "Resolución personalizada de bloqueos técnicos y consultas estratégicas de los más de 200 estudiantes presentes." },
    { id: 88, day: 3, title: "Declaración Final del Taller", subtitle: "El código ya no es el límite", icon: "fa-rocket", desc: "Inspiración de cierre: la tecnología es democrática, la capacidad de resolver problemas estratégicos es tu verdadero valor humano." },
    { id: 89, day: 3, title: "Agradecimientos Especiales", subtitle: "Cierre institucional formal", icon: "fa-heart", desc: "Mención honorífica a las autoridades universitarias y centros de estudiantes que facilitaron el espacio educativo gratuito." },
    { id: 90, day: 3, title: "¡Éxito en tu Viaje de Desarrollo!", subtitle: "Fin oficial del Taller Web & IA", icon: "fa-flag-checkered", desc: "Guarda tus enlaces, descarga tus kits de recursos, mantente activo en la comunidad y sigue creando el futuro hoy." }
];

/**
 * Structural Schemas for Downloadable Resource Hub Cards
 */
const resourcesData = [
    { name: "ChatGPT", type: "IA Generativa", icon: "fa-robot", url: "https://chatgpt.com", badge: "Código & Ideas" },
    { name: "Gemini", type: "IA Generativa", icon: "fa-brain", url: "https://gemini.google.com", badge: "Lógica Avanzada" },
    { name: "Claude", type: "IA Generativa", icon: "fa-wand-magic-sparkles", url: "https://claude.ai", badge: "Refactorización" },
    { name: "Canva", type: "Diseño UI/UX", icon: "fa-palette", url: "https://canva.com", badge: "Prototipado Rápido" },
    { name: "Gamma", type: "Presentaciones IA", icon: "fa-chalkboard", url: "https://gamma.app", badge: "Estructuras" },
    { name: "Hostinger", type: "Infraestructura Web", icon: "fa-server", url: "https://hostinger.com", badge: "Dominios & Cloud" },
    { name: "Framer", type: "Diseño No-Code", icon: "fa-crop-simple", url: "https://framer.com", badge: "Interfaces Premium" },
    { name: "GitHub", type: "Control de Versiones", icon: "fa-git-alt", url: "https://github.com", badge: "Repositorio Local" },
    { name: "Vercel", type: "Despliegue Cloud", icon: "fa-cloud-meatball", url: "https://vercel.com", badge: "Hosting Inmediato" }
];

// Structural State Control Core Variables
let currentSlideIndex = 0; // 0 is welcome screen, 1 to 90 are slides, 91 resources, 92 project, 93 instructor
const totalStructuralElements = slidesData.length + 4; 
let slideMappingIds = ['welcome-screen'];

/**
 * Dynamic Generation and Ingestion Engine for Interactive Presentation Slides
 */
function initializePresentationEngine() {
    const container = document.getElementById('presentationContainer');
    const resourcesSection = document.getElementById('recursos-section');
    
    // Mount the 90 presentation slides programmatically inside the core wrapper
    slidesData.forEach((slide) => {
        const idString = `slide-${slide.id}`;
        slideMappingIds.push(idString);
        
        const slideHtml = `
            <section class="slide-section d-flex align-items-center" id="${idString}">
                <div class="container">
                    <div class="status-glass p-4 p-md-5 rounded-4 position-relative overflow-hidden">
                        <div class="row align-items-center g-4 g-md-5">
                            <div class="col-lg-7">
                                <div class="d-flex align-items-center gap-3 mb-3">
                                    <span class="badge bg-danger">DÍA ${slide.day}</span>
                                    <span class="text-muted small fw-bold"><i class="fas fa-hashtag me-1"></i>Diapositiva ${slide.id} / 90</span>
                                </div>
                                <h2 class="text-white display-5 fw-bold mb-3 tracking-tight">${slide.title}</h2>
                                <h4 class="text-primary mb-4 fw-semibold">${slide.subtitle}</h4>
                                <p class="text-muted lead justify-text m-0">${slide.desc}</p>
                                <div class="mt-4 d-flex gap-2 flex-wrap">
                                    <span class="badge bg-dark border border-secondary text-secondary"><i class="fas fa-check me-1"></i>Teoría Práctica</span>
                                    <span class="badge bg-dark border border-secondary text-secondary"><i class="fas fa-bolt me-1"></i>Optimizado IA</span>
                                </div>
                            </div>
                            <div class="col-lg-5 text-center d-none d-lg-block">
                                <div class="p-5 status-glass rounded-circle mx-auto d-flex align-items-center justify-content-center border-2 border-primary" style="width: 260px; height: 260px; background: rgba(37, 99, 235, 0.05);">
                                    <i class="fas ${slide.icon} text-gradient" style="font-size: 90px;"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
        container.insertBefore(new DOMParser().parseFromString(slideHtml, 'text/html').body.firstChild, resourcesSection);
    });
    
    // Complete registration of sequential targets
    slideMappingIds.push('recursos-section', 'proyecto-section', 'instructor-section');
    
    // Ingest resource components dynamically
    const grid = document.getElementById('resourcesGrid');
    resourcesData.forEach(res => {
        grid.innerHTML += `
            <div class="col-md-6 col-lg-4" data-aos="fade-up">
                <div class="status-glass p-4 rounded-3 h-100 d-flex flex-column justify-content-between">
                    <div>
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <div class="p-3 bg-primary bg-opacity-10 rounded text-primary"><i class="fas ${res.icon} fa-2x"></i></div>
                            <span class="badge bg-secondary text-uppercase">${res.badge}</span>
                        </div>
                        <h4 class="text-white fw-bold mb-1">${res.name}</h4>
                        <p class="text-muted small">${res.type} de alto rendimiento profesional.</p>
                    </div>
                    <a href="${res.url}" target="_blank" class="btn btn-outline-primary btn-sm w-100 mt-3">Acceder a Herramienta <i class="fas fa-external-link-alt ms-1"></i></a>
                </div>
            </div>
        `;
    });
    
    updatePresentationState();
}

/**
 * Central State Control Sync Engine
 */
function updatePresentationState() {
    // Structural Class Toggle Mechanism
    slideMappingIds.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
            if (idx === currentSlideIndex) {
                el.classList.add('active-slide');
                // Trigger dynamic inline animations via GSAP for interactive feel
                gsap.fromTo(el.querySelector('.status-glass'), {opacity: 0, y: 30}, {opacity: 1, y: 0, duration: 0.5, ease: "power2.out"});
            } else {
                el.classList.remove('active-slide');
            }
        }
    });

    // Control Buttons Interactive State Mapping
    document.getElementById('prevSlideBtn').disabled = (currentSlideIndex === 0);
    document.getElementById('nextSlideBtn').disabled = (currentSlideIndex === slideMappingIds.length - 1);

    // Dynamic Tracking Indicators Calculation
    const progressPercent = (currentSlideIndex / (slideMappingIds.length - 1)) * 100;
    document.getElementById('progressBar').style.width = `${progressPercent}%`;

    const indicator = document.getElementById('slideIndicator');
    if (currentSlideIndex === 0) {
        indicator.innerHTML = `<span class="text-danger fw-bold">BIENVENIDA</span>`;
    } else if (currentSlideIndex > 0 && currentSlideIndex <= 90) {
        indicator.innerHTML = `Diapositiva <span class="text-primary fw-bold">${currentSlideIndex}</span> de 90`;
    } else if (currentSlideIndex === 91) {
        indicator.innerHTML = `<span class="text-success fw-bold">HUB DE RECURSOS</span>`;
    } else if (currentSlideIndex === 92) {
        indicator.innerHTML = `<span class="text-warning fw-bold">PROYECTO FINAL</span>`;
    } else {
        indicator.innerHTML = `<span class="text-info fw-bold">ACERCA DEL INSTRUCTOR</span>`;
    }

    // Synchronize global sidebar links highlight active class
    const items = document.querySelectorAll('.sidebar-item');
    items.forEach(item => item.classList.remove('active'));
    if(currentSlideIndex === 0) items[0].classList.add('active');
    else if(currentSlideIndex > 0 && currentSlideIndex <= 30) items[1].classList.add('active');
    else if(currentSlideIndex > 30 && currentSlideIndex <= 60) items[2].classList.add('active');
    else if(currentSlideIndex > 60 && currentSlideIndex <= 90) items[3].classList.add('active');
    else if(currentSlideIndex === 91) items[4].classList.add('active');
    else if(currentSlideIndex === 92) items[5].classList.add('active');
    else if(currentSlideIndex === 93) items[6].classList.add('active');

    // Toggle Back to Top Visibility Control
    document.getElementById('backToTopBtn').style.display = (currentSlideIndex > 0) ? "flex" : "none";
}

/**
 * Native Event Handlers Mapping & Navigation Core Binding
 */
document.addEventListener('DOMContentLoaded', () => {
    initializePresentationEngine();

    // Ingest Typed.js Subtitle Simulation
    new Typed('#typed-subtitle', {
        strings: ['Aprende a maquetar desde cero sin miedo.', 'Domina la co-creación de interfaces profesionales.', 'Despliega proyectos globales en tiempo récord.'],
        typeSpeed: 40,
        backSpeed: 20,
        loop: true
    });

    // Ingest Particles.js Interactive Micro-Environment Config
    particlesJS('particles-js', {
        particles: {
            number: { value: 65, density: { enable: true, value_area: 900 } },
            color: { value: '#2563EB' },
            shape: { type: 'circle' },
            opacity: { value: 0.25, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#2563EB', opacity: 0.1, width: 1 },
            move: { enable: true, speed: 1.5, direction: 'none', random: true, straight: false, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'bubble' }, onclick: { enable: true, mode: 'push' } },
            modes: { bubble: { distance: 200, size: 6, duration: 2, opacity: 0.6 } }
        }
    });

    // Setup Chronometer Core Loop Logic
    let startTime = Date.now();
    setInterval(() => {
        const delta = Date.now() - startTime;
        const hrs = String(Math.floor(delta / 3600000)).padStart(2, '0');
        const mins = String(Math.floor((delta % 3600000) / 60000)).padStart(2, '0');
        const secs = String(Math.floor((delta % 60000) / 1000)).padStart(2, '0');
        document.getElementById('workshopTimer').innerHTML = `<i class="far fa-clock me-2"></i>${hrs}:${mins}:${secs}`;
    }, 1000);

    // Explicit Linear Arrow Buttons Ingest Execution
    document.getElementById('nextSlideBtn').addEventListener('click', () => {
        if(currentSlideIndex < slideMappingIds.length - 1) { currentSlideIndex++; updatePresentationState(); }
    });
    document.getElementById('prevSlideBtn').addEventListener('click', () => {
        if(currentSlideIndex > 0) { currentSlideIndex--; updatePresentationState(); }
    });
    document.getElementById('startWorkshopBtn').addEventListener('click', () => {
        currentSlideIndex = 1; updatePresentationState();
    });

    // Native Keyboard Arrow Navigation Capture Binding
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            if(currentSlideIndex < slideMappingIds.length - 1) { currentSlideIndex++; updatePresentationState(); }
        } else if (e.key === 'ArrowLeft') {
            if(currentSlideIndex > 0) { currentSlideIndex--; updatePresentationState(); }
        }
    });

    // Sidebar Interactive Activation Controls
    const sidebar = document.getElementById('sidebar');
    document.getElementById('menuToggle').addEventListener('click', () => sidebar.classList.add('open'));
    document.getElementById('closeSidebar').addEventListener('click', () => sidebar.classList.remove('open'));

    // Sidebar Target Mapping Links Execution Engine
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            currentSlideIndex = slideMappingIds.indexOf(target);
            updatePresentationState();
            sidebar.classList.remove('open');
        });
    });

    // Slide Search Engine Component Implementation
    const executeSearch = () => {
        const val = parseInt(document.getElementById('slideSearchInput').value);
        if (val >= 1 && val <= 90) {
            currentSlideIndex = slideMappingIds.indexOf(`slide-${val}`);
            updatePresentationState();
        }
    };
    document.getElementById('slideSearchBtn').addEventListener('click', executeSearch);
    document.getElementById('slideSearchInput').addEventListener('keydown', (e) => { if(e.key === 'Enter') executeSearch(); });

    // Native Fullscreen API Toggle Management Interface
    document.getElementById('fullscreenToggle').addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                document.getElementById('fullscreenToggle').innerHTML = '<i class="fas fa-compress"></i>';
            });
        } else {
            document.exitFullscreen().then(() => {
                document.getElementById('fullscreenToggle').innerHTML = '<i class="fas fa-expand"></i>';
            });
        }
    });

    // Theme Mode Toggle Interface
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = document.getElementById('themeToggle').querySelector('i');
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
    });

    // Scroll Back To Top Implementation
    document.getElementById('backToTopBtn').addEventListener('click', () => {
        currentSlideIndex = 0; updatePresentationState();
    });

    // Initialize Animated Counters Logic
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        gsap.to(counter, {
            innerText: target,
            duration: 2.5,
            snap: { innerText: 1 },
            scrollTrigger: counter
        });
    });

    // Initialize AOS Framework Parameters Engine
    AOS.init({ duration: 800, once: true });
});