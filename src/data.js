// ============================================================
//  CONTENIDO DEL PORTAFOLIO
//  Todo lo editable vive aquí. No hace falta tocar nada más.
// ============================================================

export const PERFIL = {
  nombre: 'Ronaldo Jojoa',
  estudio: 'Howl',
  estudioSub: 'studio',
  rol: 'Diseñador gráfico',
  formacion: 'Universidad de Nariño',
  ciudad: 'Pasto · Colombia',
  edicion: 'Edición urban 2026',
  bio: 'Diseñador gráfico enfocado en branding e ilustración. Creo sistemas visuales mínimos y contundentes que fortalecen la identidad de la marca y la vuelven reconocible en cualquier soporte.',
  lema: 'Diseño para conectar y persuadir.',
  disponible: true,
}

// Cambia estos datos y los enlaces se actualizan en toda la página.
export const CONTACTO = {
  whatsapp: '3122774143', // sin indicativo
  indicativo: '57',
  email: 'ronaldojojoa@example.com', // ← reemplazar
  instagram: { user: '@howlstudio', url: 'https://www.instagram.com/' }, // ← reemplazar
  behance: {
    user: 'Ver galería',
    url: 'https://www.behance.net/gallery/249616273/Portafolio-Urban-UXIlustracion',
  },
}

// ⚠️ Revisa estas cifras antes de mostrarlas a un cliente.
export const CIFRAS = [
  { n: 4, suf: '+', t: 'años diseñando' },
  { n: 30, suf: '+', t: 'piezas publicadas' },
  { n: 8, suf: '', t: 'marcas acompañadas' },
]

export const SERVICIOS = [
  {
    t: 'Ilustración',
    d: 'Ilustración vectorial y digital con carácter urbano: personajes, mascotas de marca, carteles y piezas editoriales. Del boceto a lápiz al arte final listo para imprenta o pantalla.',
    tags: ['Personajes', 'Cartel', 'Editorial', 'Vector'],
  },
  {
    t: 'Branding',
    d: 'Sistemas de identidad completos: naming visual, logotipo, paleta, tipografía y manual de uso. Marcas coherentes que se sostienen en cualquier formato.',
    tags: ['Identidad', 'Logotipo', 'Manual de marca', 'Papelería'],
  },
  {
    t: 'Diseño web',
    d: 'Landing pages y sitios de portafolio diseñados y construidos de punta a punta. Diseño en Figma, maquetación responsive y despliegue.',
    tags: ['Figma', 'UI', 'Responsive', 'Despliegue'],
  },
  {
    t: 'Diseño interactivo',
    d: 'Prototipos navegables, microinteracciones y animación para producto digital. La interfaz se prueba antes de construirse.',
    tags: ['Prototipo', 'UX', 'Motion', 'Microinteracción'],
  },
]

// ── PROYECTOS ────────────────────────────────────────────────
// Mientras no haya imagen, la tarjeta dibuja una portada
// tipográfica con la palabra de `cover`. Para poner la imagen
// real: guarda el archivo en /public y añade  img: '/dex.jpg'
// ─────────────────────────────────────────────────────────────
export const PROYECTOS = [
  {
    t: 'Poster DEX',
    cover: 'DEX',
    variante: 'blue', // blue · ink · paper
    anio: '2024',
    tipo: 'Ilustración',
    img: null,
    d: 'Camaleón construido a partir del uróboros y elementos precolombinos para representar el ciclo de creación y transformación del diseño. Boceto a lápiz, entintado y color digital.',
    tags: ['Ilustración', 'Cartel', 'Aplicativos'],
    url: null,
  },
  {
    t: 'Howl Studio',
    cover: 'HOWL',
    variante: 'ink',
    anio: '2025',
    tipo: 'Branding',
    img: null,
    d: 'Identidad propia del estudio: logotipo, sistema tipográfico condensado y paleta azul eléctrica aplicada a piezas digitales e impresas.',
    tags: ['Branding', 'Identidad', 'Sistema'],
    url: null,
  },
  {
    t: 'Portafolio Urban',
    cover: '2026',
    variante: 'paper',
    anio: '2026',
    tipo: 'Diseño web',
    img: null,
    d: 'Diseño UX/UI de este mismo portafolio: retícula, componentes tipo ventana y estética urban llevada a React.',
    tags: ['UX/UI', 'Figma', 'React'],
    url: null,
  },
]

export const EXPERIENCIA = [
  {
    p: '2023 — 2024',
    t: 'Diseñador gráfico',
    d: 'Producción de piezas para redes, material impreso y apoyo en proyectos de identidad visual.',
  },
  {
    p: '2025 — Presente',
    t: 'Comunicaciones y servicios',
    d: 'Dirección de arte y diseño de contenidos: campañas, ilustración y diseño de interfaces para proyectos propios y de clientes.',
  },
  {
    p: 'Formación',
    t: 'Universidad de Nariño',
    d: 'Diseño gráfico. Base conceptual en identidad, tipografía, ilustración y comunicación visual.',
  },
]

export const HABILIDADES = [
  { i: '◉', t: 'Social media' },
  { i: '✎', t: 'Ilustración' },
  { i: '▶', t: 'Edición de video' },
  { i: '▣', t: 'Diseño UX/UI' },
]

export const SOFTWARE = ['Ai', 'Ps', 'Pr', 'Lr', 'Ae', 'Fg', 'Id', 'Au']

export const NAV = [
  ['#acerca', 'Acerca de'],
  ['#servicios', 'Servicios'],
  ['#proyectos', 'Proyectos'],
  ['#estudio', 'Estudio'],
  ['#contacto', 'Contacto'],
]
