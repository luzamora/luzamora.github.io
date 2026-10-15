// ==========================================
// DATOS Y UTILIDADES COMPARTIDAS
// Las usan el navegador (script.js) y el generador de páginas (build.js)
// ==========================================
const D = {
    "CFG": {
        "logo": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762452002/luzamora_l1s5pz.png",
        "chiskeyLogo": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762452002/Recurso_1t5_e9fkcy.png",
        "chiskeyUrl": "https://www.chiskey.es",
        "cv": "/CV-Lucia-Garcia.pdf",
        "email": "luzamora.design@gmail.com",
        "linkedin": "https://www.linkedin.com/in/lucia-garcia-gonzalez-programadoraweb",
        "instagram": "https://instagram.com/luzamora__"
    },
    "C": "https://res.cloudinary.com/daxumuyx8/image/upload/", 
    "CN": {
        "web": "Web",
        "foto": "Fotografía",
        "com": "Community",
        "ia": "IA y diseño"
    },
    "P": [
        {
            "id": "invitaciones",
            "t": "Wedding Webs",
            "cat": "web",
            "tone": "acc",
            "y": 2026,
            "w": "w4",
            "cover": "v1791992718/1_md1obq.png",
            "tags": ["Web", "HTML", "CSS", "JavaScript"],
            "lead": "Invitaciones digitales para bodas: una web con todo lo que tus invitados necesitan. Tres ejemplos con estilos distintos.",
            "links": [["Hablemos de tu boda", "/contacto/"], ["Chiskey Estudio", "https://www.chiskey.es"]],
            "b": [
                {"k": "txt", "h": "El proyecto", "p": "Una web personalizada para cada pareja, con su historia, el programa del día, los mapas y la confirmación de asistencia. Cada ejemplo tiene un estilo propio, porque cada boda es distinta."},
                {"k": "offer", "p": "Al contratar el diseño de vuestra invitación digital, además os regalamos el diseño de la papelería física a juego."},
                {"k": "demos", "it": [
                    {"t": "Valentina & Hugo", "url": "https://chiskeyestudio-cell.github.io/boda-valentinayhugo/", "d": "Cuenta atrás, historia, mapas, plan del día y detalles importantes."},
                    {"t": "Adriano & Laura", "url": "https://chiskeyestudio-cell.github.io/boda-adrianoylaura/", "d": "Bilingüe (español e italiano), ilustraciones propias, alojamiento y playlist."},
                    {"t": "Sofía & Alejandro", "url": "https://chiskeyestudio-cell.github.io/boda-sofiayalejandro/", "d": "Invitación personalizada, formulario de confirmación y preguntas frecuentes."}
                ]}
            ]
        }, 
        {
            "id": "olivia",
            "t": "Oliv.ia",
            "cat": "ia",
            "tone": "ink",
            "y": 2025,
            "cover": "v1762455803/olivia_oj1qdo.jpg",
            "tags": ["IA", "Streamlit", "NLP", "Python"],
            "lead": "Una aplicación web que recomienda restaurantes a partir de reseñas reales.",
            "links": [["Ver demo", "https://www.youtube.com/watch?v=cdC7lhYLBMU"], ["Ver código", "https://github.com/luzamora/Oliv.ia"]],
            "b": [
                {"k": "gal", "l": "full", "im": [
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762455805/logo_yrl9jj.jpg", "alt": "Análisis de sentimiento"},
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762455803/olivia_oj1qdo.jpg", "alt": "Dashboard principal de Oliv.ia"}
                ]},
                {"k": "txt", "h": "El proyecto", "p": "Combina análisis de datos y procesamiento del lenguaje natural con reseñas del dataset de Yelp para sugerir restaurantes según lo que busca cada persona. Proyecto final del curso de IA de Samsung Innovation Campus con la EOI."},
                {"k": "gal", "l": "full", "im": [
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762455806/flujo_dz3wph.png", "alt": "Flujo de la aplicación"},
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762455803/eda_opnsvw.jpg", "alt": "Filtros de usuario"}
                ]}
            ]
        }, 
        {
            "id": "fotografia",
            "t": "Irreflexión",
            "cat": "foto",
            "tone": "card",
            "y": "2019–hoy",
            "cover": "v1762521386/5_vdhulq.png",
            "tags": ["Fotografía analógica", "Calle", "Exposición"],
            "lead": "Fotografía callejera analógica: el límite entre la foto pensada y la espontánea.",
            "links": [["Ver más en Instagram", "https://www.instagram.com/luzamora__"]],
            "b": [
                {"k": "txt", "h": "El proyecto", "p": "Desde 2019 cultivo la fotografía callejera analógica, y de ahí nace Irreflexión. Se seleccionaron y expusieron 136 fotografías en la Exposición Internacional de Arte | Premio G. B. Salvi, en Sassoferrato."},
                {"k": "gal", "l": "fit", "im": [
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1761847214/analog_4_ib2bcx.jpg", "alt": "Retrato con luz de estudio"},
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1761847215/analog_5_yfu8mo.jpg", "alt": "Silueta en escalera"},
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762459110/imagenAnalogica5_crm7xu.jpg", "alt": "Mercado con verduras"}
                ]},
                {"k": "gal", "l": "fit", "im": [
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1761847212/analog_1_zhstek.jpg", "alt": "Mercado con hombre de espaldas"},
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1761847212/analog_1_ilnm0t.jpg", "alt": "Calle de pueblo con coche"},
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1761847266/analog_7_if3dbk.jpg", "alt": "Perro frente a puerta"}
                ]}
            ]
        }, 
        {
            "id": "modul",
            "t": "Sync (Mòdul)",
            "cat": "foto",
            "tone": "soft",
            "y": "2024–25",
            "cover": "v1762542656/detalle1_ztm6sk.jpg",
            "tags": ["Fotografía", "Evento", "Valencia"],
            "lead": "Cobertura fotográfica de sesiones de música experimental en Sala Mat32 y Pluto.",
            "links": [["Instagram Mòdul", "https://www.instagram.com/m_o_d_u_l_"]],
            "b": [
                {"k": "txt", "h": "El proyecto", "p": "Documenté sesiones de improvisación audiovisual capturando la atmósfera de las actuaciones, y generé un banco de imágenes para la comunicación del evento."},
                {"k": "gal", "l": "big", "im": [
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762542656/detalle1_ztm6sk.jpg", "alt": "Sala con ambiente oscuro"},
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762542662/publico_rv2cvo.jpg", "alt": "Público inmerso"},
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762542661/difuminado_au4pqd.jpg", "alt": "Silueta de un músico"},
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762542652/detalle_cpzc7e.jpg", "alt": "Luz LED y proyecciones"}
                ]}
            ]
        }, 
        {
            "id": "social-media-manager",
            "t": "Social media manager",
            "cat": "com",
            "tone": "card",
            "y": "2022–24",
            "cover": "v1762530556/A%C3%B1adir_un_subt%C3%ADtulo_mxntdu.png",
            "tags": ["Community", "Contenido", "Instagram", "WordPress"],
            "lead": "Estrategia de contenido, foto y vídeo, y gestión diaria de redes.",
            "links": [["Ver la comunidad: @medioambienteupv", "https://www.instagram.com/medioambienteupv/"]],
            "b": [
                {"k": "txt", "h": "El proyecto", "p": "Fui responsable de la estrategia de contenido, la creación de fotos y vídeos de eventos y la gestión diaria de Instagram y Twitter, analizando métricas para mejorar el alcance. También actualicé contenidos web y maqueté en WordPress."},
                {"k": "gal", "l": "full", "im": [
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762530556/A%C3%B1adir_un_subt%C3%ADtulo_mxntdu.png", "alt": "Perfil de Instagram"},
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762529881/Imagen_de_WhatsApp_2025-11-07_a_las_16.13.25_46111757_ainhf4.jpg", "alt": "Foto de evento"},
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762530645/CB_cast_post_1_jqdxdv.png", "alt": "Ejemplo de post"},
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762529996/1679476446695_utim4x.jpg", "alt": "Ambiente"}
                ]}
            ]
        }, 
        {
            "id": "diseno-web",
            "t": "Diseño web UMA",
            "cat": "web",
            "tone": "acc",
            "y": "2023–24",
            "cover": "v1762530998/A%C3%B1adir_un_subt%C3%ADtulo_1_oe8egd.png",
            "tags": ["UX/UI", "Branding", "WordPress"],
            "lead": "Para la Unidad de Medio Ambiente (UMA) de la UPV: identidad visual de campañas, iconos, cartelería y maquetación web.",
            "links": [["Ver ejemplo de web", "https://www.upv.es/entidades/amapuoc/"]],
            "b": [
                {"k": "gal", "l": "full", "im": [{"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1784822565/Dise%C3%B1o_sin_t%C3%ADtulo_27_qdtk8m.png", "alt": "Banner horizontal"}]},
                {"k": "txt", "h": "El proyecto", "p": "Diseñé la identidad visual de campañas, creé iconos y cartelería y programé varias páginas en WordPress, cuidando que la experiencia de usuario y la estética fueran coherentes con la marca."},
                {"k": "gal", "l": "full", "im": [
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762530998/A%C3%B1adir_un_subt%C3%ADtulo_1_oe8egd.png", "alt": "Mockup de la política ambiental de la UPV"},
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1784822564/Dise%C3%B1o_sin_t%C3%ADtulo_28_tc6rck.png", "alt": "Día Mundial de los Humedales"}
                ]}
            ]
        }, 
{
            "id": "arroz",
            "t": "Arroz con Cosas",
            "cat": "foto",
            "tone": "ink",
            "y": 2024,
            "cover": "v1762514785/Imagen_de_WhatsApp_2025-11-07_a_las_12.23.04_0fb49f30_mqff29.jpg",
            "tags": ["Fotografía", "Festival", "Valencia"],
            "lead": "Fotógrafa colaboradora del festival cultural, el 24 de febrero de 2024 en la Sala Canal.",
            "links": [["Instagram del festival", "https://www.instagram.com/arrozarroz.cosascosas/?hl=es"]],
            "b": [
                {
                    "k": "txt",
                    "h": "El proyecto",
                    "p": "Un festival multidisciplinar de València que mezcla música, exposiciones fotográficas, performances e instalaciones."
                },
                {
                    "k": "gal",
                    "l": "duo",
                    "im": [
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762513627/_DSC0102_1708862294300_tl8chw.jpg", "alt": "Retrato de asistente"},
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762513628/_DSC0023_1708862322697_d0o7e0.jpg", "alt": "Carteles Arroz con Cosas"}
                    ]
                },
                {
                    "k": "gal",
                    "l": "quad",
                    "im": [
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762513754/Imagen_de_WhatsApp_2025-11-07_a_las_12.08.14_d4070e4a_ap3p9f.jpg", "alt": "Músico en directo"},
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762513754/Imagen_de_WhatsApp_2025-11-07_a_las_12.08.14_72c91cb9_u2go3i.jpg", "alt": "Actuación festival"},
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762513755/Imagen_de_WhatsApp_2025-11-07_a_las_12.08.15_f12edd36_aphbib.jpg", "alt": "Equipos de sonido"},
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762513759/Imagen_de_WhatsApp_2025-11-07_a_las_12.08.15_60a82793_okbqxj.jpg", "alt": "Ambiente de la sala"}
                    ]
                },
                {
                    "k": "gal",
                    "l": "duo",
                    "im": [
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762514785/Imagen_de_WhatsApp_2025-11-07_a_las_12.23.04_0fb49f30_mqff29.jpg", "alt": "Detalle del evento"},
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762514828/Imagen_de_WhatsApp_2025-11-07_a_las_12.24.16_90a4ad93_lrxq3j.jpg", "alt": "Público e instalaciones"}
                    ]
                }
            ]
        }, 
{
            "id": "metodos-sinteticos",
            "t": "Métodos sintéticos e IA",
            "cat": "ia",
            "tone": "soft",
            "y": 2024,
            "cover": "v1762521387/1_ct8bna.png",
            "tags": ["IA generativa", "Arte", "UPV"],
            "lead": "Proyecto práctico-conceptual de la UPV, vinculado a mi TFM, sobre los sesgos de la IA generativa.",
            "links": [["Ver TFM completo", "https://riunet.upv.es/entities/publication/83b5497a-dcbf-4e15-94a7-839cb39b2124"]],
            "b": [
                {
                    "k": "txt",
                    "h": "El proyecto",
                    "p": "Trabajé \"promptear con sesgo\" para desafiar narrativas visuales hegemónicas y crear imágenes que fomentan la diversidad y la inclusión digital."
                },
{
                    "k": "gal",
                    "l": "mitad", // <-- Aquí usamos el nuevo diseño de 50/50
                    "im": [
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762521386/5_vdhulq.png", "alt": "Exposición de resultados del taller"},
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762521387/9_yhywbi.png", "alt": "Imagen creada con IA 1"},
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762521388/1_ct8bna.png", "alt": "Imagen creada con IA 2"}
                    ]
                }
            ]
        }, 
        {
            "id": "tfg",
            "t": "Entre la piel y la sábana",
            "cat": "ia",
            "tone": "ink",
            "y": 2021,
            "cover": "v1762459795/Imagen_de_WhatsApp_2025-11-06_a_las_21.09.07_32cff095_yo0zhh.jpg",
            "tags": ["Diseño editorial", "Maquetación", "TFG"],
            "lead": "Mi Trabajo de Fin de Grado: un libro impreso sobre la virtualización de las relaciones.",
            "links": [],
            "b": [
                {"k": "txt", "h": "El proyecto", "p": "Investigación sobre la virtualización de las relaciones y su traducción visual en el diseño editorial. El resultado fue la edición y maquetación completa del libro impreso, finalizado en 2021, en formato A5 y tapa blanda."},
                {"k": "gal", "l": "duo", "im": [
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762459604/MockUp_2_lbr6w4.png", "alt": "Cubierta del libro"},
                
                    {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762459795/Imagen_de_WhatsApp_2025-11-06_a_las_21.09.07_32cff095_yo0zhh.jpg", "alt": "Detalle de la tipografía Helvetica"},
                ]}

            ]
        }, 
{
            "id": "zine",
            "t": "Zine N3",
            "cat": "ia",
            "tone": "soft",
            "y": 2021,
            "cover": "v1762542536/portada_tpm3vo.png",
            "tags": ["Editorial", "Maquetación", "Granada"],
            "lead": "Revista digital colaborativa de la Facultad de Bellas Artes de la Universidad de Granada.",
            "links": [["Descargar revista (PDF)", "https://bellasartes363.ugr.es/wp-content/uploads/2021/09/ZINE-15-SEPTIEMBRE.pdf"]],
            "b": [
                {
                    "k": "txt",
                    "h": "El proyecto",
                    "p": "Proyecto colaborativo para crear una revista digital desde cero. Mi contribución fue integral: escribí un artículo y me encargué de la edición y la maquetación de la revista."
                },
                {
                    "k": "gal",
                    "l": "zine", // <-- Usamos el layout a medida
                    "im": [
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762542576/detalle_milikd.png", "alt": "Mockup horizontal"},
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762542536/portada_tpm3vo.png", "alt": "Portada vertical"},
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762542551/mockup_kuwqgv.png", "alt": "Detalle cuadrado"},
                        {"src": "https://res.cloudinary.com/daxumuyx8/image/upload/v1762542561/detalle2_dmwepm.jpg", "alt": "Índice de la revista"}
                    ]
                }
            ]
        }
    ]
};

const SITE = 'https://luzamora.es';

// Qué página corresponde a una ruta: /, /proyectos/, /cv/, /contacto/ o /<proyecto>/
function resolve(path) {
    const seg = path.split('/').filter(x => x && x !== 'index.html');
    if (!seg.length) return { k: 'home' };
    if (seg.length === 1) {
        const x = decodeURIComponent(seg[0]);
        if (x === 'proyectos') return { k: 'list' };
        if (x === 'cv') return { k: 'cv' };
        if (x === 'contacto') return { k: 'contact' };
        const p = D.P.find(p => p.id === x);
        if (p) return { k: 'project', p };
    }
    return { k: '404' };
}

// Título, descripción e imagen para compartir de cada página (SEO)
const DESC_HOME = 'Portfolio de Luzamora: diseño y desarrollo web, branding y proyectos digitales. Descubre mis trabajos, mi CV y cómo contactarme.';

function pageMeta(r) {
    const base = { image: D.CFG.logo, robots: 'index,follow', description: DESC_HOME };
    switch (r.k) {
        case 'list':
            return { ...base, path: '/proyectos/', title: 'Proyectos | Luzamora',
                description: 'Proyectos de Luzamora: diseño y desarrollo web, fotografía, inteligencia artificial y gestión de redes sociales.' };
        case 'cv':
            return { ...base, path: '/cv/', title: 'CV | Luzamora',
                description: 'Currículum de Lucía García González: diseñadora web y community manager en Valencia. Experiencia, formación y herramientas.' };
        case 'contact':
            return { ...base, path: '/contacto/', title: 'Contacto | Luzamora',
                description: 'Contacta con Luzamora para proyectos de diseño y desarrollo web, branding y redes sociales.' };
        case 'project':
            return { ...base, path: '/' + r.p.id + '/', title: r.p.t + ' | Luzamora',
                description: r.p.lead, image: r.p.cover ? D.C + r.p.cover : base.image };
        case '404':
            return { ...base, path: null, title: 'Página no encontrada | Luzamora', robots: 'noindex' };
        default:
            return { ...base, path: '/', title: 'Luzamora | Diseño y desarrollo web' };
    }
}

if (typeof module !== 'undefined') module.exports = { D, SITE, resolve, pageMeta };
