// ==========================================
// Los datos (D), resolve() y pageMeta() están en data.js
// ==========================================
// ==========================================
// 2. CONSTANTES Y VARIABLES GLOBALES
// ==========================================
const P = D.P;
const CFG = D.CFG;
const C = D.C;
const CN = D.CN;
const $ = s => document.querySelector(s);
const A = $('#app');

// Proyecto cuya imagen se usa de fondo en la home
const HOME_ID = 'fotografia';
let front = $('#a');
let cur = '';
let tok = 0;

// Imagen Demo por si falla la carga
const DEMO = ["data:image/jpeg;base64,/9j/4AAQSkZJRg..."]; // (Mantenido abreviado para no ensuciar tu archivo)

// ==========================================
// 3. FUNCIONES DE RENDERIZADO Y LÓGICA
// ==========================================

// Cambiar la imagen de fondo dinámicamente
function setBg(p) {
    const k = p ? p.id : 'x';
    if (k === cur) return;
    cur = k;
    const t = ++tok;
    const d = DEMO[(p ? P.indexOf(p) : 0) % 3];
    const u = p && p.cover ? C + p.cover : null;
    
    const go = src => {
        if (t !== tok) return;
        const back = front.id == 'a' ? $('#b') : $('#a');
        back.style.backgroundImage = `url("${src}")`;
        back.classList.add('on');
        front.classList.remove('on');
        front = back;
        const sp = $('#spot');
        if (sp) sp.style.backgroundImage = `url("${src}")`;
    };
    
    if (!u) return go(d);
    
    const im = new Image();
    im.onload = () => go(u);
    im.onerror = () => go(d);
    im.src = u;
}

const img = i => `<img loading="lazy" src="${i.src}" alt="${i.alt}">`;

function blk(b) {
    switch (b.k) {
        case 'txt': 
            return `<div class="blk cols"><h2>${b.h}</h2><p>${b.p}</p></div>`;
        case 'hero': 
            return `<div class="blk hero">${img(b)}</div>`;
        case 'gal': 
            return `<div class="blk g-${b.l === 'full' ? 'fit g-full' : b.l}">${b.im.map(img).join('')}</div>`;
        case 'vid': 
            return `<div class="blk"><video controls playsinline src="${b.src}"></video></div>`;
        case 'stats': 
            return `<div class="blk stats">${b.it.map(s => `<div><b>${s[0]}</b>${s[1]}</div>`).join('')}</div>`;
        case 'offer': 
            return `
                <div class="blk offer">
                    <p>${b.p}</p>
                    <a class="btn" href="/contacto/">Quiero mi invitación</a>
                </div>`;
        case 'demos': 
            return `
                <div class="blk demos">
                    ${b.it.map(i => `
                        <article class="demo-card">
                            <div class="ph">
                                <iframe src="${i.url}" title="Invitación de ${i.t}" loading="lazy"></iframe>
                            </div>
                            <h3>${i.t}</h3>
                            <p>${i.d}</p>
                            <a class="btn" href="${i.url}" target="_blank" rel="noopener">Abrir invitación</a>
                        </article>
                    `).join('')}
                </div>`;
    }
    return '';
}

// Renderizado de las vistas de la web
function detail(p) {
    const i = P.indexOf(p);
    const pv = P[(i + P.length - 1) % P.length];
    const nx = P[(i + 1) % P.length];
    
    return `
        <section class="scr pd">
            <p class="small">${CN[p.cat]} · ${p.y} · ${p.tags.join(' / ')}</p>
            <h1>${p.t}</h1>
            <p class="lead">${p.lead}</p>
            ${p.links.map(l => `<a class="btn" href="${l[1]}"${l[1][0] == '/' ? '' : ' target="_blank" rel="noopener"'}>${l[0]} →</a>`).join('')}
            ${p.b.map(blk).join('')}
            <div class="pn">
                <a href="/${pv.id}/">← ${pv.t}</a>
                <a href="/${nx.id}/">${nx.t} →</a>
            </div>
        </section>
    `;
}

const home = () => `
    <section class="scr home">
        <h1 class="lg">
            ${CFG.logo ? `<img src="${CFG.logo}" alt="Luzamora">` : 'Luzamora'}
        </h1>
        <p class="note">
            Lucía García es una diseñadora web y social media manager afincada en Valencia. Estudió Bellas Artes en la Universidad de Granada, con una beca Erasmus+ en la Accademia di Belle Arti di Urbino, y completó el Máster en Artes Visuales y Multimedia en la Universitat Politècnica de València. Después se formó en programación e inteligencia artificial con la EOI y Samsung Innovation Campus. Actualmente codirige Chiskey Estudio.
        </p>
    </section>
`;

const list = () => `
    <section class="scr">
        <p class="small" style="margin:0 0 10px">Proyectos</p>
        <div class="filters" role="group" aria-label="Filtrar">
            ${[['all', 'Todo'], ['web', 'Web'], ['foto', 'Fotografía'], ['com', 'Community'], ['ia', 'IA y diseño']].map((f, i) => `
                <button data-f="${f[0]}" aria-pressed="${!i}">${f[1]}</button>
            `).join('')}
        </div>
        <div class="list">
            ${P.map((p, i) => `
                <a class="row" data-c="${p.cat}" data-i="${i}" href="/${p.id}/">
                    <span class="n">${String(i + 1).padStart(2, '0')}</span>
                    <span class="t">${p.t}</span>
                    <span class="m">${CN[p.cat]} ·${p.y}</span>
                </a>
            `).join('')}
        </div>
    </section>
`;
const cvv = () => `
    <section class="scr">
        <h1 style="margin-bottom:18px">CV</h1>
        <a class="btn" href="${CFG.cv}" download>Descargar CV (PDF) ↓</a>
        <div style="margin-top:18px">
            <article class="cv">
                <header>
                    <div>
                        <h1>Lucía García González</h1>
                        <p class="role">Diseñadora web y community manager</p>
                    </div>
                    <address>
                        Valencia · +34 722 12 41 72<br>
                        luzamora.design@gmail.com<br>
                        luzamora.es · <a href="${CFG.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
                    </address>
                </header>

                <p class="intro">Diseño y programo webs, y gestiono redes sociales. Tengo formación en Bellas Artes, desarrollo front-end e inteligencia artificial. Durante más de dos años diseñé la web y llevé las redes de la Unidad de Medio Ambiente de la UPV, y ahora dirijo mi propio estudio, Chiskey.</p>

                <div class="cvg">
                    <div>
                        <section>
                            <h2>Experiencia</h2>

                            <div class="job">
                                <div class="job-h"><h3>Directora creativa freelance</h3><span class="d">Oct 2025 – actualidad</span></div>
                                <div class="org">Chiskey Estudio Creativo</div>
                                <ul>
                                    <li>Identidad visual, diseño UX/UI y webs para clientes, incluidas invitaciones web de boda.</li>
                                    <li>Cliente destacado: <span class="ph">[nombre y qué hiciste]</span></li>
                                </ul>
                            </div>

                            <div class="job">
                                <div class="job-h"><h3>Diseñadora UX/UI y desarrolladora web</h3><span class="d">Ene 2023 – sep 2024 · media jornada</span></div>
                                <div class="org">Unidad de Medio Ambiente, UPV</div>
                                <ul>
                                    <li>Diseñé y programé la nueva web, desde el concepto hasta el lanzamiento.</li>
                                    <li>Resultado: <span class="ph">[visitas, mejora de carga, etc.]</span></li>
                                </ul>
                            </div>

                            <div class="job">
                                <div class="job-h"><h3>Social media manager</h3><span class="d">Jun 2022 – sep 2024 · media jornada</span></div>
                                <div class="org">Unidad de Medio Ambiente, UPV</div>
                                <ul>
                                    <li>Creé contenido para redes, gestioné la comunidad y analicé métricas para ajustar la estrategia.</li>
                                    <li>Resultado: <span class="ph">[seguidores, alcance, interacción]</span></li>
                                </ul>
                            </div>

                            <div class="job">
                                <div class="job-h"><h3>Zine N3</h3><span class="d">Feb – jul 2021</span></div>
                                <div class="org">Facultad de Bellas Artes de Granada</div>
                                <ul>
                                    <li>Revista digital de descarga gratuita, ISSN 2603-588X.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2>Formación</h2>
                            <div class="edu"><b>Samsung Innovation Campus, Inteligencia Artificial</b><span>EOI, 317 h (2025). Proyecto: Oliv.ia, sistema de recomendación.</span></div>
                            <div class="edu"><b>Samsung Innovation Campus, Python para IA</b><span>EOI, 180 h (2024–25)</span></div>
                            <div class="edu"><b>DevWomen, Introducción a la programación</b><span>EOI, 200 h (2024–25)</span></div>
                            <div class="edu"><b>Máster en Artes Visuales y Multimedia</b><span>UPV (2021–24)</span></div>
                            <div class="edu"><b>Grado en Bellas Artes</b><span>Universidad de Granada (2015–21). Erasmus+ en Urbino (2018–19).</span></div>
                        </section>
                    </div>

                    <aside class="side">
                        <h2>Herramientas</h2>
                        <h3>Web</h3>
                        <div class="tags">
                            <span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Node.js</span><span>Express</span><span>WordPress</span><span>GitHub</span>
                        </div>

                        <h3>Diseño y contenido</h3>
                        <div class="tags">
                            <span>Figma</span><span>Adobe CC</span><span>Canva</span><span>CapCut</span><span>Foto y vídeo</span>
                        </div>

                        <h3>Datos e IA</h3>
                        <div class="tags">
                            <span>Python</span><span>TensorFlow</span><span>Scikit-learn</span><span>MongoDB</span>
                        </div>

                        <h3>Idiomas</h3>
                        <p>Inglés B2 · British Council<br>Italiano B2 · PLIDA</p>

                        <h3>Más</h3>
                        <p>Media jornada o jornada completa<br>Teletrabajo · Carnet B<br>Garantía Juvenil</p>
                    </aside>
                </div>
            </article>
        </div>
    </section>
`;

const contact = () => `
    <section class="scr">
        <p class="small">Contacto</p>
        <h1>¿Hablamos?</h1>
        <a class="big" href="mailto:${CFG.email}">${CFG.email}</a>
        <a class="big" href="${CFG.instagram}" target="_blank" rel="noopener">Instagram →</a>
        <a class="big" href="${CFG.linkedin}" target="_blank" rel="noopener">LinkedIn →</a>
        
        <a class="chk" href="${CFG.chiskeyUrl}" target="_blank" rel="noopener" aria-label="Chiskey Estudio">
            <img src="${CFG.chiskeyLogo}" alt="Chiskey Estudio">
        </a>
    </section>
`;

// ==========================================
// AJUSTES DE LAYOUT (móviles de las invitaciones y galerías)
// ==========================================
// Escala cada iframe (pensado para 390px de ancho) al ancho real del "móvil"
// Ancho de la barra de scroll del navegador (0 en sistemas con barra superpuesta)
function scrollbarWidth() {
    const d = document.createElement('div');
    d.style.cssText = 'position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll';
    document.body.appendChild(d);
    const w = d.offsetWidth - d.clientWidth;
    d.remove();
    return w;
}

// El iframe se ensancha justo lo que mide la barra y el marco la recorta,
// así el contenido sigue midiendo 390px y la barra no se ve
function fitPhones() {
    const sbw = scrollbarWidth();
    A.querySelectorAll('.demo-card .ph').forEach(p => {
        p.style.setProperty('--s', (p.clientWidth / 390).toFixed(4));
        p.style.setProperty('--sbw', sbw + 'px');
    });
}

// Galería en una fila: cada foto ocupa un ancho proporcional a su formato,
// así llenan todo el ancho con una altura contenida (máx. 360px)
function fitGalleries() {
    A.querySelectorAll('.g-fit').forEach(g => {
        const imgs = [...g.querySelectorAll('img')];
        const ars = imgs.map(i => i.naturalWidth && i.naturalHeight ? i.naturalWidth / i.naturalHeight : 1.5);
        const gap = 10;
        const sum = ars.reduce((a, b) => a + b, 0);
        const cap = g.classList.contains('g-full') ? Infinity : 360; // g-full: sin límite, fotos completas
        const h = Math.max(150, Math.min((g.clientWidth - gap * (imgs.length - 1)) / sum, cap));
        g.style.setProperty('--h', h + 'px');
        imgs.forEach((i, k) => i.style.setProperty('--ar', Math.round(ars[k] * 100)));
    });
}

function fitLayout() {
    fitPhones();
    fitGalleries();
}

window.addEventListener('resize', fitLayout);

const notFound = () => `
    <section class="scr">
        <p class="small">Error 404</p>
        <h1>Página no encontrada</h1>
        <a class="btn" href="/">Volver al inicio</a>
    </section>
`;

// Actualiza título, descripción y etiquetas para compartir al navegar sin recargar
function applyMeta(m) {
    const set = (sel, attr, val) => {
        const el = document.querySelector(sel);
        if (el) el.setAttribute(attr, val);
    };
    const url = m.path ? SITE + m.path : '';
    document.title = m.title;
    set('meta[name="description"]', 'content', m.description);
    set('meta[name="robots"]', 'content', m.robots);
    set('link[rel="canonical"]', 'href', url);
    set('meta[property="og:title"]', 'content', m.title);
    set('meta[property="og:description"]', 'content', m.description);
    set('meta[property="og:url"]', 'content', url);
    set('meta[property="og:image"]', 'content', m.image);
    set('meta[name="twitter:title"]', 'content', m.title);
    set('meta[name="twitter:description"]', 'content', m.description);
    set('meta[name="twitter:image"]', 'content', m.image);
}

// ==========================================
// 4. ENRUTADOR (ROUTER) Y EVENTOS
// ==========================================
function route() {
    const r = resolve(location.pathname);
    const homeBg = P.find(p => p.id == HOME_ID);
    let html, bg, nav = '/';

    if (r.k == 'list') {
        html = list();
        bg = P[0];
        nav = '/proyectos/';
    } else if (r.k == 'cv') {
        html = cvv();
        bg = homeBg;
        nav = '/cv/';
    } else if (r.k == 'contact') {
        html = contact();
        bg = homeBg;
        nav = '/contacto/';
    } else if (r.k == 'project') {
        html = detail(r.p);
        bg = r.p;
        nav = '/proyectos/';
    } else if (r.k == '404') {
        html = notFound();
        bg = homeBg;
        nav = '';
    } else {
        html = home();
        bg = homeBg;
    }

    A.innerHTML = html;
    window.scrollTo(0, 0);
    setBg(bg);
    applyMeta(pageMeta(r));

    // Ajustar móviles y galerías (y recalcular cuando cada foto termine de cargar)
    fitLayout();
    A.querySelectorAll('.g-fit img').forEach(i => {
        if (!i.complete) i.addEventListener('load', fitGalleries, { once: true });
    });
    
    // Marcar menú activo
    document.querySelectorAll('.bar a').forEach(a => {
        if(a.getAttribute('href') == nav) {
            a.setAttribute('aria-current', 'page');
        } else {
            a.removeAttribute('aria-current');
        }
    });
    
    // Eventos para interactividad
    const rows = [...A.querySelectorAll('.row')];
    rows.forEach(r => r.addEventListener('mouseenter', () => setBg(P[r.dataset.i])));
    
    if (rows.length && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver(es => {
            es.forEach(e => {
                if (e.isIntersecting) {
                    rows.forEach(r => r.classList.remove('act'));
                    e.target.classList.add('act');
                    if (matchMedia('(hover:none)').matches) {
                        setBg(P[e.target.dataset.i]);
                    }
                }
            });
        }, { rootMargin: '-42% 0px -48% 0px' });
        
        rows.forEach(r => io.observe(r));
    }
    
    A.querySelectorAll('[data-f]').forEach(b => {
        b.onclick = () => {
            A.querySelectorAll('[data-f]').forEach(x => x.setAttribute('aria-pressed', x === b));
            rows.forEach(r => r.classList.toggle('hide', b.dataset.f != 'all' && r.dataset.c != b.dataset.f));
        };
    });
}

// ==========================================
// 5. CÍRCULO DE ENFOQUE QUE SIGUE AL RATÓN
// ==========================================
// Una capa nítida del mismo fondo, visible solo dentro de un círculo
// alrededor del cursor (máscara radial). El resto sigue difuminado.
// Solo en dispositivos con ratón; en táctil no hay hover.
if (matchMedia('(hover: hover)').matches) {
    const spot = document.createElement('div');
    spot.id = 'spot';
    document.body.insertBefore(spot, A);

    const OFFSET = 80; // el fondo se extiende 80px fuera de la pantalla (inset: -80px)
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0;

    const tick = () => {
        x += (tx - x) * 0.18;   // movimiento suave, con un pequeño retardo
        y += (ty - y) * 0.18;
        spot.style.setProperty('--x', (x + OFFSET) + 'px');
        spot.style.setProperty('--y', (y + OFFSET) + 'px');
        raf = (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) ? requestAnimationFrame(tick) : 0;
    };

    document.addEventListener('mousemove', e => {
        if (!spot.classList.contains('on')) { x = e.clientX; y = e.clientY; } // aparece donde está el cursor
        tx = e.clientX;
        ty = e.clientY;
        spot.classList.add('on');
        if (!raf) raf = requestAnimationFrame(tick);
    });
    document.documentElement.addEventListener('mouseleave', () => spot.classList.remove('on'));
}

// Enlaces antiguos con "#/..." → URL limpia (por si alguien guardó uno)
if (location.hash.startsWith('#/')) {
    const h = location.hash.slice(2).split('/').filter(Boolean);
    history.replaceState({}, '', h[0] == 'p' && h[1] ? '/' + h[1] + '/' : h[0] ? '/' + h[0] + '/' : '/');
}

// Navegar entre páginas sin recargar (las URLs son reales y cada una tiene su propia página)
document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    const u = new URL(a.href, location.href);
    if (u.origin !== location.origin) return;
    if (resolve(u.pathname).k == '404') return;   // archivos (PDF, etc.): comportamiento normal
    e.preventDefault();
    if (u.pathname !== location.pathname) history.pushState({}, '', u.pathname);
    route();
});

window.addEventListener('popstate', route);
route();
