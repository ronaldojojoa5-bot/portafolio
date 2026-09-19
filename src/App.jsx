import { useState, useRef, useEffect } from 'react'

const WHATSAPP = '3122774143'
const BEHANCE = 'https://www.behance.net/gallery/249616273/Portafolio-Urban-UXIlustracion'
const INSTAGRAM = 'https://www.instagram.com/'
const EMAIL = 'ronaldojojoa@example.com'

function Star({ size = 16, color = 'currentColor' }) {
  return (
    <svg className="star" width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 0c.6 5.6 2.9 9.2 12 12-9.1 2.8-11.4 6.4-12 12-.6-5.6-2.9-9.2-12-12C9.1 9.2 11.4 5.6 12 0z" />
    </svg>
  )
}

function FitText({ text, outline = false }) {
  const ref = useRef(null)
  const [box, setBox] = useState('0 0 1000 75')

  useEffect(() => {
    let alive = true
    const measure = () => {
      const el = ref.current
      if (!el || !alive) return
      try {
        const b = el.getBBox()
        if (b.width > 0 && b.height > 0) {
          setBox(b.x + ' ' + b.y + ' ' + b.width + ' ' + b.height)
        }
      } catch (e) {
        /* getBBox can throw if the node is not rendered yet */
      }
    }
    measure()
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure)
    return () => {
      alive = false
    }
  }, [text])

  return (
    <svg
      className={outline ? 'fit fit-outline' : 'fit'}
      viewBox={box}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={text}
    >
      <text
        ref={ref}
        x="0"
        y="0"
        dominantBaseline="text-before-edge"
        fontSize="100"
        textLength="1000"
        lengthAdjust="spacingAndGlyphs"
      >
        {text}
      </text>
    </svg>
  )
}

const SERVICIOS = [
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

const PROYECTOS = [
  {
    n: '01',
    t: 'Poster DEX',
    d: 'Camaleón construido a partir del uróboros y elementos precolombinos para representar el ciclo de creación y transformación del diseño. Boceto a lápiz, entintado y color digital.',
    tags: ['Ilustración', 'Cartel', 'Aplicativos'],
  },
  {
    n: '02',
    t: 'Howl Studio',
    d: 'Identidad propia del estudio: logotipo, sistema tipográfico condensado y paleta azul eléctrica aplicada a piezas digitales e impresas.',
    tags: ['Branding', 'Identidad', 'Sistema'],
  },
  {
    n: '03',
    t: 'Portafolio Urban',
    d: 'Diseño UX/UI de este mismo portafolio: retícula, componentes tipo ventana y estética urban 2026 llevada a React.',
    tags: ['UX/UI', 'Figma', 'React'],
  },
]

const EXPERIENCIA = [
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

const HABILIDADES = [
  { i: '◉', t: 'Social media' },
  { i: '✎', t: 'Ilustración' },
  { i: '▶', t: 'Edición de video' },
  { i: '▣', t: 'Diseño UX/UI' },
]

const SOFTWARE = ['Ai', 'Ps', 'Pr', 'Lr', 'Ae', 'Fg', 'Id', 'Au']

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    ['#acerca', 'Acerca de'],
    ['#servicios', 'Servicios'],
    ['#proyectos', 'Proyectos'],
    ['#contacto', 'Contacto'],
  ]
  return (
    <div className="nav-holder">
      <div className="wrap" style={{ position: 'relative' }}>
        <nav className="nav">
          <div className="brand">
            <Star size={15} color="#1414e6" />
            <div>
              HOWL
              <small>studio</small>
            </div>
          </div>
          <div className={open ? 'nav-links open' : 'nav-links'}>
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <a className="nav-cta" href={'https://wa.me/57' + WHATSAPP} target="_blank" rel="noreferrer">
              Hablemos
            </a>
            <button className="burger" onClick={() => setOpen(!open)} aria-label="Abrir menú" aria-expanded={open}>
              <span />
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <header className="hero wrap" id="acerca">
      <div className="eyebrow">
        <Star size={12} />
        <span className="mono">Edición urban — Pasto, Colombia</span>
        <Star size={12} />
      </div>
      <h1 className="hero-title">
        <FitText text="PORTAFOLIO" />
        <FitText text="2026" outline />
      </h1>
      <div className="hero-sub">
        <span className="mono">Ronaldo Jojoa</span>
        <span className="mono">Diseñador gráfico</span>
        <span className="mono">Universidad de Nariño</span>
      </div>

      <div className="hero-grid">
        <div className="intro">
          <p>
            Diseñador gráfico enfocado en branding e ilustración. Creo sistemas visuales
            mínimos y contundentes que fortalecen la identidad de la marca y la vuelven
            reconocible en cualquier soporte.
          </p>
          <p className="quote">“Diseño para conectar y persuadir.”</p>
          <div className="btn-row">
            <a className="btn btn-solid" href="#proyectos">
              Ver proyectos <Star size={12} color="#fff" />
            </a>
            <a className="btn btn-ghost" href={BEHANCE} target="_blank" rel="noreferrer">
              Behance
            </a>
          </div>
          <div className="meta-row">
            <span className="chip mono">Pasto · Colombia</span>
            <span className="chip mono">Disponible para proyectos</span>
            <span className="chip mono">Freelance</span>
          </div>
        </div>

        <div className="cards">
          <a className="card-link" href={'https://wa.me/57' + WHATSAPP} target="_blank" rel="noreferrer">
            <div className="icon">W</div>
            <div>
              <strong>WhatsApp</strong>
              <span className="mono">312 277 4143</span>
            </div>
          </a>
          <a className="card-link" href={'mailto:' + EMAIL}>
            <div className="icon">@</div>
            <div>
              <strong>Correo</strong>
              <span className="mono">Escríbeme</span>
            </div>
          </a>
          <a className="card-link" href={INSTAGRAM} target="_blank" rel="noreferrer">
            <div className="icon">IG</div>
            <div>
              <strong>Instagram</strong>
              <span className="mono">@howlstudio</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

function Marquee() {
  const items = Array.from({ length: 10 })
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((_, i) => (
          <span key={i}>
            Howl Studio <Star size={14} color="#fff" /> Diseño gráfico
          </span>
        ))}
      </div>
    </div>
  )
}

function Servicios() {
  const [open, setOpen] = useState(0)
  return (
    <section id="servicios" className="wrap">
      <div className="sec-head">
        <h2 className="display">Servicios</h2>
        <span className="mono">04 áreas de trabajo</span>
      </div>
      <div className="acc">
        {SERVICIOS.map((s, i) => (
          <div key={s.t} className={open === i ? 'acc-item open' : 'acc-item'}>
            <button className="acc-btn" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span className="acc-num">0{i + 1}</span>
                <h3>{s.t}</h3>
              </span>
              <Star size={18} />
            </button>
            <div className="acc-body">
              <div>
                <p>{s.d}</p>
                <div className="acc-tags">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Capacidades() {
  return (
    <section className="wrap">
      <div className="blue-block">
        <div className="sec-head">
          <h2 className="display">Capacidades</h2>
          <span className="mono" style={{ color: 'rgba(255,255,255,.7)' }}>
            Herramientas + habilidades
          </span>
        </div>
        <div className="two-col">
          <div className="panel">
            <h3>
              <Star size={14} color="#1414e6" /> Habilidades
            </h3>
            <div className="skill-grid">
              {HABILIDADES.map((h) => (
                <div className="skill" key={h.t}>
                  <span className="big">{h.i}</span>
                  <span className="mono">{h.t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <h3>
              <Star size={14} color="#1414e6" /> Software
            </h3>
            <div className="soft-grid">
              {SOFTWARE.map((s) => (
                <div className="soft" key={s}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Proyectos() {
  return (
    <section id="proyectos" className="wrap">
      <div className="sec-head">
        <h2 className="display">Proyectos</h2>
        <a className="mono" href={BEHANCE} target="_blank" rel="noreferrer">
          Ver todo en Behance →
        </a>
      </div>
      <div className="proj-grid">
        {PROYECTOS.map((p) => (
          <article className="window" key={p.t}>
            <div className="window-bar">
              <span className="dot f" />
              <span className="dot s" />
              <span className="dot" />
              <span className="mono">proyecto {p.n}</span>
            </div>
            <div className="window-title">
              <Star size={13} color="#fff" /> {p.t}
            </div>
            <div className="window-body">
              <p>{p.d}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experiencia() {
  return (
    <section className="wrap">
      <div className="sec-head">
        <h2 className="display">Experiencia</h2>
        <span className="mono">Trayectoria</span>
      </div>
      <div className="exp">
        {EXPERIENCIA.map((e) => (
          <div className="exp-row" key={e.t}>
            <span className="mono">{e.p}</span>
            <div>
              <h3>{e.t}</h3>
              <p>{e.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contacto() {
  return (
    <section id="contacto" className="wrap">
      <div className="contact-box">
        <span className="mono" style={{ color: 'rgba(255,255,255,.65)' }}>
          ¿Tienes un proyecto?
        </span>
        <h2>Hablemos</h2>
        <div className="btn-row">
          <a className="btn btn-solid" href={'https://wa.me/57' + WHATSAPP} target="_blank" rel="noreferrer">
            WhatsApp 312 277 4143
          </a>
          <a className="btn btn-ghost" href={'mailto:' + EMAIL}>
            Enviar correo
          </a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Servicios />
      <Capacidades />
      <Proyectos />
      <Experiencia />
      <Contacto />
      <footer className="wrap">
        <span className="mono">© 2026 Howl Studio — Ronaldo Jojoa</span>
        <span className="mono">Pasto · Colombia</span>
      </footer>
    </>
  )
}
