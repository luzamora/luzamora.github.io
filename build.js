// ==========================================
// build.js — genera una página HTML real por cada ruta
// ==========================================
// Qué hace:
//   - index.html, proyectos/, cv/, contacto/ y una carpeta por proyecto (olivia/, tfg/...)
//     cada una con su propio <title>, descripción, canonical y etiquetas para compartir
//   - 404.html (página de error personalizada de GitHub Pages)
//   - sitemap.xml y robots.txt
//   - redirecciones para URLs antiguas (campo "legacy" de cada proyecto en data.js)
//
// Uso (desde esta carpeta):   node build.js
// Hay que volver a ejecutarlo cada vez que cambies proyectos o textos en data.js.

const fs = require('fs');
const path = require('path');
const { D, SITE, resolve, pageMeta } = require('./data.js');

const ROOT = __dirname;
const TEMPLATE = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- Bloque <head> de SEO ----------
function seoBlock(m, extra = '') {
    const url = m.path ? SITE + m.path : null;
    return [
        `<title>${esc(m.title)}</title>`,
        `<meta name="description" content="${esc(m.description)}">`,
        `<meta name="robots" content="${m.robots}">`,
        url && `<link rel="canonical" href="${url}">`,
        `<meta property="og:type" content="website">`,
        `<meta property="og:locale" content="es_ES">`,
        `<meta property="og:site_name" content="Luzamora">`,
        `<meta property="og:title" content="${esc(m.title)}">`,
        `<meta property="og:description" content="${esc(m.description)}">`,
        url && `<meta property="og:url" content="${url}">`,
        `<meta property="og:image" content="${esc(m.image)}">`,
        `<meta name="twitter:card" content="summary_large_image">`,
        `<meta name="twitter:title" content="${esc(m.title)}">`,
        `<meta name="twitter:description" content="${esc(m.description)}">`,
        `<meta name="twitter:image" content="${esc(m.image)}">`,
        `<meta name="theme-color" content="#000000">`,
        extra
    ].filter(Boolean).map(l => '    ' + l).join('\n');
}

// Datos estructurados para que Google entienda quién eres (solo en la portada)
function personJsonLd() {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Lucía García González',
        alternateName: 'Luzamora',
        url: SITE + '/',
        jobTitle: 'Diseñadora web y community manager',
        address: { '@type': 'PostalAddress', addressLocality: 'Valencia', addressCountry: 'ES' },
        sameAs: [D.CFG.linkedin, D.CFG.instagram, D.CFG.chiskeyUrl]
    };
    return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
}

// ---------- Contenido básico dentro de <main> ----------
// (script.js lo sustituye al cargar; sirve para Google y para quien no tenga JavaScript)
function prerender(r) {
    const a = (href, text) => `<a href="${href}">${esc(text)}</a>`;
    let body;
    switch (r.k) {
        case 'list':
            body = `<h1>Proyectos</h1><ul>${D.P.map(p => `<li>${a('/' + p.id + '/', p.t)}: ${esc(p.lead)}</li>`).join('')}</ul>`;
            break;
        case 'project':
            body = `<h1>${esc(r.p.t)}</h1><p>${esc(r.p.lead)}</p>`
                 + r.p.b.filter(b => b.k === 'txt').map(b => `<h2>${esc(b.h)}</h2><p>${esc(b.p)}</p>`).join('')
                 + `<p>${esc(r.p.tags.join(', '))}</p><p>${a('/proyectos/', 'Ver todos los proyectos')}</p>`;
            break;
        case 'cv':
            body = `<h1>Lucía García González</h1><p>Diseñadora web y community manager en Valencia.</p><p>${a(D.CFG.cv, 'Descargar CV (PDF)')}</p>`;
            break;
        case 'contact':
            body = `<h1>Contacto</h1><p>${a('mailto:' + D.CFG.email, D.CFG.email)}</p>`;
            break;
        case '404':
            body = `<h1>Página no encontrada</h1><p>${a('/', 'Volver al inicio')}</p>`;
            break;
        default:
            body = `<h1>Luzamora</h1><p>${esc(pageMeta(r).description)}</p><p>${a('/proyectos/', 'Proyectos')} · ${a('/cv/', 'CV')} · ${a('/contacto/', 'Contacto')}</p>`;
    }
    return `        <section class="scr">${body}</section>`;
}

const replaceBlock = (html, tag, content) =>
    html.replace(new RegExp(`(<!-- ${tag}:START -->)[\\s\\S]*?(<!-- ${tag}:END -->)`), (_, a, b) => `${a}\n${content}\n    ${b}`);

const page = r => {
    const m = pageMeta(r);
    return replaceBlock(replaceBlock(TEMPLATE, 'SEO', seoBlock(m, r.k === 'home' ? '    ' + personJsonLd() : '')), 'APP', prerender(r));
};

const written = [];
function write(rel, content) {
    const file = path.join(ROOT, rel);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content);
    written.push(rel);
}

// ---------- Comprobaciones ----------
const RESERVED = ['proyectos', 'cv', 'contacto', '404'];
D.P.forEach(p => {
    if (RESERVED.includes(p.id) || /[^a-z0-9-]/.test(p.id)) throw new Error(`El id "${p.id}" no es válido como carpeta`);
});

// ---------- Páginas ----------
const routes = [
    ['index.html', { k: 'home' }],
    ['proyectos/index.html', { k: 'list' }],
    ['cv/index.html', { k: 'cv' }],
    ['contacto/index.html', { k: 'contact' }],
    ...D.P.map(p => [p.id + '/index.html', { k: 'project', p }]),
    ['404.html', { k: '404' }]
];
routes.forEach(([rel, r]) => write(rel, page(r)));

// ---------- Redirecciones de URLs antiguas ----------
// GitHub Pages no permite redirecciones 301, así que se usa una página mínima con
// <meta refresh> + canonical, que Google trata como redirección.
D.P.forEach(p => (p.legacy || []).forEach(old => {
    const slug = old.replace(/^\/+|\/+$/g, '');
    const to = '/' + p.id + '/';
    write(slug + '/index.html', `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <title>${esc(p.t)} | Luzamora</title>
    <meta name="robots" content="noindex">
    <link rel="canonical" href="${SITE + to}">
    <meta http-equiv="refresh" content="0; url=${to}">
</head>
<body>
    <p><a href="${to}">Ir a ${esc(p.t)}</a></p>
</body>
</html>
`);
}));

// ---------- sitemap.xml y robots.txt ----------
const today = new Date().toISOString().slice(0, 10);
const urls = routes.filter(([, r]) => r.k !== '404').map(([, r]) => pageMeta(r).path);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>\n    <loc>${SITE + u}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`).join('\n')}
</urlset>
`);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`Listo: ${written.length} archivos generados\n` + written.map(f => '  ' + f).join('\n'));
