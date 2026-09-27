/* ============================================================
   script.js — Pradeep Lodhi Portfolio (EmailJS Enabled)
   ============================================================ */

/* ================= CONFIG — EDIT YOUR LINKS HERE ================= */
const CONFIG = {
  name: 'Pradeep Lodhi',
  role: ['Tech Student', 'Cyber Security Enthusiast', 'AI Explorer', 'Full-Stack Developer', 'Problem Solver'],
  email: 'pradeeplodhilodh86@gmail.com',
  github: 'https://github.com/Pradeeplodhilodh',
  githubHandle: 'Pradeeplodhilodh',
  instagram: 'https://instagram.com/_pradeeplodhi',
  instagramHandle: '@_pradeeplodhi',
  linkedin: 'https://linkedin.com/in/pradeep-lodhi-42a4aa340',
  whatsapp: 'https://wa.me/919999999999',

  emailjs: {
    publicKey:  'DWSEDTbp12tDQVVkK',
    serviceId:  'service_f0r6peb',
    templateId: 'template_bnwso1s'
  },

  admin: {
    password: 'admin123',
    storageKey: 'pl-messages'
  }
};

/* ================= ICONS ================= */
const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
  gmail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.4-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z"/></svg>`,
  arrowUpRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  graduation: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`
};

/* ================= DATA ================= */
const STATS = [
  { num: 4, suffix: '+', label: 'Projects Built' },
  { num: 10, suffix: '+', label: 'Technologies' },
  { num: 2.5,  suffix: '+', label: 'Years Learning' },
  { num: 0,  suffix: '+', label: 'Certifications' }
];

const SERVICES = [
  { icon: '💻', title: 'Full-Stack Web Development', desc: 'End-to-end web apps with clean UI, secure APIs and scalable databases — from design to deployment.', tags: ['React', 'Node.js', 'FastAPI', 'PostgreSQL'] },
  { icon: '🔐', title: 'Cyber Security Fundamentals', desc: 'Security-first mindset: input validation, auth flows, OWASP practices and secure coding habits.', tags: [ 'Auth', 'Encryption', 'Network Basics'] },
  { icon: '🤖', title: 'AI & Automation', desc: 'Practical AI integrations and automation scripts that save time and unlock smarter workflows.', tags: ['Python', 'Automation', 'Data'] },
  { icon: '🎨', title: 'Responsive UI / UX', desc: 'Pixel-conscious interfaces that feel great on every device — fast, accessible and modern.', tags: ['HTML5', 'CSS3', 'Animation'] }
];

const PROJECTS = [
  { title: 'YUGO', desc: 'A unified mobility platform connecting rural and urban communities with affordable, accessible, and convenient transportation solutions.', tech: ['React', 'FastAPI', 'PostgreSQL', 'AES'], status: 'under progress', statusLabel: 'under progress', live: '#', code: 'https://github.com/Pradeeplodhilodh', image: 'asset/project/yugo.webp.jpeg' },
  { title: 'Smart City Waste Tracker', desc:'A smart platform for tracking waste collection, reporting garbage issues, and connecting citizens with efficient waste management services for a cleaner city.', tech: ['Python', 'FastAPI',  'React'], status: 'under progress', statusLabel: 'under progress', live: '#', code: 'https://github.com/Pradeeplodhilodh', image: 'asset/project/smartcity.webp.jpeg' },
  { title: 'NeuroCare', desc: 'A modern healthcare platform connecting patients with neurologists through consultations, appointments, treatment support, and wellness resources.', tech: ['HTML', 'CSS', 'JavaScript'], status: 'under progress', statusLabel: 'under progress', live: '#', code: 'https://github.com/Pradeeplodhilodh', image: 'asset/project/neurocare.webp.jpeg' },
  { title: 'Campus Connect', desc: 'A smart platform that connects students, teachers, and industry experts, enabling knowledge sharing, mentorship, career guidance, and collaboration beyond the classroom.', tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'], status: 'under progress', statusLabel: 'under progress', live: '', code: 'https://github.com/Pradeeplodhilodh', image: 'asset/project/campusconnect.webp.jpeg' }
];

const EXPERIENCE = [
  {
    title: ' Developer', org: 'Tech#ova Labs', date: 'Jun 202# — Aug 202#',
    desc: 'Worked with a small agile team to build and ship internal dashboards used daily by the operations team.',
    highlights: ['Built reusable React components that cut UI dev time by ~30%', 'Designed REST endpoints with FastAPI and PostgreSQL', 'Implemented JWT auth and role-based access control'],
    tags: ['React', 'FastAPI', 'PostgreSQL', 'JWT']
  },
  {
    title: 'Freelance Web Developer', org: 'Self-employed · Remote', date: '202# — Present',
    desc: 'Delivered responsive, SEO-friendly websites for local businesses and student clubs.',
    highlights: ['Shipped 6+ landing pages with 90+ Lighthouse scores', 'Handled deployment, hosting and basic analytics setup', 'Worked directly with non-technical clients end-to-end'],
    tags: ['HTML', 'CSS', 'JavaScript', 'SEO', 'Netlify']
  },
  {
    title: 'Cyber Security Learner & CTF Player', org: 'TryH#ckMe · HackTheBox', date: '202# — Present',
    desc: 'Practicing offensive and defensive security through labs, CTFs and hands-on challenges.',
    highlights: ['Completed 40+ rooms on TryHackMe', 'Hands-on with Linux, networking and web exploitation', 'Studying OWASP Top 10 and secure coding practices'],
    tags: ['Linux', 'Networking', 'OWASP', 'Burp Suite']
  }
];

const EDUCATION = [
  {
    title: 'Computing & Technology', org: 'India', date: '2024 — 2030',
    desc: 'Focused on core CS, systems, and applied software engineering.',
    highlights: ['Core: Data Structures, Algorithms, DBMS, OS, Networks', 'Electives: Cyber Security, AI, Web Technologies', 'Active in coding clubs and CTF competitions'],
    tags: ['CSE', 'DSA', 'Cyber Security', 'AI']
  },
  {
    title: 'Physics, Chemistry, Mathematics', org: 'Jnv India', date: '2017 — 2023',
    desc: 'Physics, Chemistry, Mathematics.',
    highlights: ['Built first websites and small automation scripts', 'Discovered a love for problem solving through code'],
    tags: ['PCM']
  }
];

const FRIENDS = [
  { name: 'Aarav Sharma', role: 'Frontend Developer', bio: 'React wizard who turns designs into pixel-perfect UIs.', tag: 'React · UI/UX', photo: 'https://i.pravatar.cc/200?img=12', status: 'online', socials: { github: '#', instagram: '#', linkedin: '#' } },
  { name: 'Neha Verma', role: 'Cyber Security Analyst', bio: 'CTF player & bug bounty hunter. Loves breaking things ethically.', tag: 'Security · Linux', photo: 'https://i.pravatar.cc/200?img=45', status: 'online', socials: { github: '#', instagram: '#', linkedin: '#' } },
  { name: 'Rohit Patel', role: 'Backend Engineer', bio: 'FastAPI & Node enthusiast. Believes in clean, tested APIs.', tag: 'Node · FastAPI', photo: 'https://i.pravatar.cc/200?img=33', status: 'offline', socials: { github: '#', instagram: '#', linkedin: '#' } },
  { name: 'Simran Kaur', role: 'AI/ML Explorer', bio: 'Building small ML projects and sharing learnings publicly.', tag: 'Python · ML', photo: 'https://i.pravatar.cc/200?img=48', status: 'online', socials: { github: '#', instagram: '#', linkedin: '#' } }
];

const GH_STATS = [
  { num: 5, suffix: '+', label: 'Repositories' },
  { num: 8, suffix: '+', label: 'Contributions' },
  { num: 7, suffix: '+', label: 'Languages' },
  { num: 0, suffix: '+', label: 'Stars Earned' }
];

const GH_INTERESTS = [
  'JavaScript', 'Python', 'Cyber Security',
  'AI / ML', 'Linux', 'Git & GitHub', 'MongoDB', 'PostgreSQL',
  'Web3', 'Automation', 'Cloud'
];

/* ================= HELPERS ================= */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ================= YEAR ================= */
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ================= THEME ================= */
const themeToggle = $('#themeToggle');
themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('pl-theme', next); } catch (e) {}
});

/* ================= SCROLL PROGRESS + NAV ================= */
const scrollBar = $('#scrollBar');
const navWrap = $('#navWrap');
const toTop = $('#toTop');

function onScroll() {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
  if (scrollBar) scrollBar.style.width = pct + '%';
  if (navWrap) navWrap.classList.toggle('scrolled', h.scrollTop > 12);
  if (toTop) toTop.classList.toggle('show', h.scrollTop > 400);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ================= MOBILE NAV ================= */
const hamburger = $('#hamburger');
const navLinks  = $('#navLinks');
const navOverlay = $('#navOverlay');

function closeNav() {
  hamburger?.classList.remove('open');
  navLinks?.classList.remove('open');
  navOverlay?.classList.remove('show');
  hamburger?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
hamburger?.addEventListener('click', () => {
  const open = !navLinks.classList.contains('open');
  hamburger.classList.toggle('open', open);
  navLinks.classList.toggle('open', open);
  navOverlay.classList.toggle('show', open);
  hamburger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});
navOverlay?.addEventListener('click', closeNav);
$$('.nav-link').forEach(a => a.addEventListener('click', closeNav));

/* ================= REVEAL ON SCROLL ================= */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
$$('.reveal').forEach(el => io.observe(el));

/* ================= TYPED ROLE ================= */
(function typeRole() {
  const el = $('#typedRole');
  if (!el) return;
  let roleIdx = 0, charIdx = 0, deleting = false;
  const roles = CONFIG.role;

  function tick() {
    const current = roles[roleIdx];
    if (!deleting) {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        deleting = true;
        return setTimeout(tick, 1400);
      }
      setTimeout(tick, 70);
    } else {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
      setTimeout(tick, 35);
    }
  }
  tick();
})();

/* ================= SOCIAL LINKS ================= */
function socialLink(href, icon, label) {
  return `<a class="social-link" href="${href}" target="_blank" rel="noopener" aria-label="${label}" title="${label}">${icon}</a>`;
}

function renderSocials() {
  const hero = $('#heroSocial');
  const footer = $('#footerSocial');
  const html = [
    socialLink(CONFIG.github, ICONS.github, 'GitHub'),
    socialLink(CONFIG.instagram, ICONS.instagram, 'Instagram'),
    socialLink(`mailto:${CONFIG.email}`, ICONS.gmail, 'Gmail'),
    socialLink(CONFIG.linkedin, ICONS.linkedin, 'LinkedIn')
  ].join('');
  if (hero) hero.innerHTML = html;
  if (footer) footer.innerHTML = html;
}
renderSocials();

/* ================= STATS ================= */
(function renderStats() {
  const grid = $('#statsGrid');
  if (!grid) return;
  grid.innerHTML = STATS.map(s => `
    <div class="stat-card">
      <div class="stat-num" data-target="${s.num}" data-suffix="${s.suffix || ''}">0${s.suffix || ''}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');

  const nums = $$('.stat-num', grid);
  const counterIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 40));
      const iv = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(iv); }
        el.textContent = cur + suffix;
      }, 35);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.4 });
  nums.forEach(n => counterIO.observe(n));
})();

/* ================= SERVICES ================= */
(function renderServices() {
  const grid = $('#servicesGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map(s => `
    <article class="service-card">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="service-tags">${s.tags.map(t => `<span>${t}</span>`).join('')}</div>
    </article>
  `).join('');
})();

/* ================= PROJECTS SLIDER ================= */
(function projectsSlider() {
  const track = $('#sliderTrack');
  const dots  = $('#sliderDots');
  const prev  = $('#prevBtn');
  const next  = $('#nextBtn');
  const prog  = $('#slideProgress');
  if (!track) return;

  let index = 0;
  let timer = null;
  const AUTOPLAY = 4000;

  track.innerHTML = PROJECTS.map(p => `
    <div class="project-slide" role="group" aria-label="${p.title}">
      <article class="project-card">
        <div class="project-media">
          <span class="project-status ${p.status === 'live' ? '' : 'done'}">
            <span class="live-dot"></span>${p.statusLabel}
          </span>
          <img src="${p.image}" alt="${p.title} preview" loading="lazy" />
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="tech-list">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
          <div class="project-actions">
            ${p.live ? `<a class="btn btn-primary btn-sm" href="${p.live}" target="_blank" rel="noopener">Live Demo</a>` : ''}
            ${p.code ? `<a class="btn btn-ghost btn-sm" href="${p.code}" target="_blank" rel="noopener">View Code</a>` : ''}
          </div>
        </div>
      </article>
    </div>
  `).join('');

  dots.innerHTML = PROJECTS.map((_, i) => `
    <button class="dot-btn${i === 0 ? ' active' : ''}" type="button" role="tab"
            aria-label="Go to project ${i + 1}" data-i="${i}"></button>
  `).join('');

  function go(i) {
    index = (i + PROJECTS.length) % PROJECTS.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    $$('.dot-btn', dots).forEach((d, di) => d.classList.toggle('active', di === index));
    resetProgress();
  }

  function resetProgress() {
    if (!prog) return;
    prog.style.transition = 'none';
    prog.style.width = '0%';
    void prog.offsetWidth;
    prog.style.transition = `width ${AUTOPLAY}ms linear`;
    prog.style.width = '100%';
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => go(index + 1), AUTOPLAY);
    resetProgress();
  }
  function stopAuto() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  prev?.addEventListener('click', () => { stopAuto(); go(index - 1); startAuto(); });
  next?.addEventListener('click', () => { stopAuto(); go(index + 1); startAuto(); });
  dots.addEventListener('click', e => {
    const btn = e.target.closest('.dot-btn');
    if (!btn) return;
    stopAuto();
    go(+btn.dataset.i);
    startAuto();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto();
    else startAuto();
  });

  let startX = 0, swiping = false;
  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    swiping = true;
    stopAuto();
  }, { passive: true });
  track.addEventListener('touchend', e => {
    if (!swiping) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    swiping = false;
    startAuto();
  });

  go(0);
  startAuto();
})();

/* ================= TIMELINE ================= */
function renderTimeline(containerId, data, icon) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = data.map(item => `
    <div class="tl2-item">
      <div class="tl2-dot">${icon}</div>
      <div class="tl2-card">
        <div class="tl2-head">
          <h3 class="tl2-title">${item.title}</h3>
          <span class="tl2-date">${item.date}</span>
        </div>
        <div class="tl2-org">${ICONS.briefcase} ${item.org}</div>
        <p class="tl2-desc">${item.desc}</p>
        <ul class="tl2-highlights">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="tl2-tags">${item.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}
renderTimeline('experienceTimeline', EXPERIENCE, '💼');
renderTimeline('educationTimeline', EDUCATION, '🎓');

/* ================= GITHUB ================= */
(function renderGithub() {
  const ghName = $('#ghName');
  const ghHandle = $('#ghHandle');
  const ghProfileBtn = $('#ghProfileBtn');
  if (ghName) ghName.textContent = CONFIG.name;
  if (ghHandle) ghHandle.textContent = '@' + CONFIG.githubHandle;
  if (ghProfileBtn) ghProfileBtn.href = CONFIG.github;

  const stats = $('#ghStats');
  if (stats) {
    stats.innerHTML = GH_STATS.map(s => `
      <div class="gh-stat">
        <div class="num">${s.num}${s.suffix || ''}</div>
        <div class="lbl">${s.label}</div>
      </div>
    `).join('');
  }
  const interests = $('#ghInterests');
  if (interests) {
    interests.innerHTML = GH_INTERESTS.map(i => `<li>${i}</li>`).join('');
  }
})();

/* ================= FRIENDS ================= */
(function renderFriends() {
  const grid = $('#friendsGrid');
  if (!grid) return;
  grid.innerHTML = FRIENDS.map(f => `
    <article class="friend-card-enhanced">
      <div class="friend-avatar-wrap">
        <img class="friend-photo-enhanced" src="${f.photo}" alt="${f.name}" loading="lazy" />
        <span class="friend-status ${f.status === 'online' ? '' : 'offline'}" aria-label="${f.status}"></span>
      </div>
      <h3>${f.name}</h3>
      <p class="friend-role-enhanced">${f.role}</p>
      <p class="friend-bio">${f.bio}</p>
      <span class="friend-tag-enhanced">${f.tag}</span>
      <div class="friend-socials">
        ${f.socials.github ? `<a href="${f.socials.github}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>` : ''}
        ${f.socials.instagram ? `<a href="${f.socials.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>` : ''}
        ${f.socials.linkedin ? `<a href="${f.socials.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>` : ''}
      </div>
    </article>
  `).join('');
})();

/* ================= QUICK CONTACT CARDS ================= */
(function renderQuickLinks() {
  const wrap = $('#quickLinks');
  if (!wrap) return;

  const cards = [
    { cls: 'insta', icon: ICONS.instagram, label: 'Instagram', value: CONFIG.instagramHandle, href: CONFIG.instagram },
    { cls: 'github', icon: ICONS.github, label: 'GitHub', value: '@' + CONFIG.githubHandle, href: CONFIG.github },
    { cls: 'gmail', icon: ICONS.gmail, label: 'Gmail', value: CONFIG.email, href: `mailto:${CONFIG.email}` }
  ];

  wrap.innerHTML = cards.map(c => `
    <a class="quick-card ${c.cls}" href="${c.href}" target="_blank" rel="noopener" aria-label="${c.label}">
      <span class="quick-icon">${c.icon}</span>
      <span class="quick-text">
        <span class="quick-label">${c.label}</span>
        <span class="quick-value">${c.value}</span>
      </span>
      <span class="quick-arrow">${ICONS.arrowUpRight}</span>
    </a>
  `).join('');
})();

/* ================= CONTACT INFO ================= */
(function renderContactInfo() {
  const box = $('#contactInfo');
  if (!box) return;
  const rows = [
    { icon: ICONS.mail, label: 'Email', value: CONFIG.email, href: `mailto:${CONFIG.email}` },
    { icon: ICONS.instagram, label: 'Instagram', value: CONFIG.instagramHandle, href: CONFIG.instagram },
    { icon: ICONS.github, label: 'GitHub', value: '@' + CONFIG.githubHandle, href: CONFIG.github },
    { icon: ICONS.mapPin, label: 'Location', value: 'India', href: '' }
  ];
  box.innerHTML = rows.map(r => {
    const inner = `
      <div class="info-icon">${r.icon}</div>
      <div>
        <h4>${r.label}</h4>
        <p>${r.value}</p>
      </div>
    `;
    return r.href
      ? `<a class="info-card" href="${r.href}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="info-card">${inner}</div>`;
  }).join('');
})();

/* ================= TOAST ================= */
function toast(msg, ms = 4000) {
  const el = $('#toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove('show'), ms);
}

/* ================= EMAILJS INIT ================= */
function initEmailJS() {
  if (typeof emailjs === 'undefined') {
    console.warn('EmailJS SDK not loaded yet.');
    return false;
  }
  try {
    emailjs.init({ publicKey: CONFIG.emailjs.publicKey });
    console.log('✅ EmailJS ready · service:', CONFIG.emailjs.serviceId);
    return true;
  } catch (err) {
    console.error('EmailJS init failed:', err);
    return false;
  }
}
window.addEventListener('load', initEmailJS);

/* ================= CONTACT FORM ================= */
(function contactForm() {
  const form = $('#contactForm');
  if (!form) return;

  const submitBtn = $('#submitBtn');
  const fields = {
    name:    { el: $('#cf-name'),    err: $('#err-name'),    msg: 'Please enter your name.' },
    email:   { el: $('#cf-email'),   err: $('#err-email'),   msg: 'Please enter a valid email.' },
    subject: { el: $('#cf-subject'), err: $('#err-subject'), msg: 'Please add a subject.' },
    message: { el: $('#cf-message'), err: $('#err-message'), msg: 'Please write a message (min 10 chars).' }
  };

  function setError(f, msg) {
    f.el.classList.toggle('invalid', !!msg);
    f.err.textContent = msg || '';
  }
  function validate() {
    let ok = true;
    Object.values(fields).forEach(f => setError(f, ''));
    if (!fields.name.el.value.trim()) { setError(fields.name, fields.name.msg); ok = false; }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRe.test(fields.email.el.value.trim())) { setError(fields.email, fields.email.msg); ok = false; }
    if (!fields.subject.el.value.trim()) { setError(fields.subject, fields.subject.msg); ok = false; }
    if (!fields.message.el.value.trim() || fields.message.el.value.trim().length < 10) {
      setError(fields.message, fields.message.msg); ok = false;
    }
    return ok;
  }

  Object.values(fields).forEach(f => {
    f.el?.addEventListener('input', () => setError(f, ''));
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();

    if ($('#cf-website')?.value) return;

    if (!validate()) { toast('⚠️ Please fix the highlighted fields.'); return; }

    const data = {
      name: fields.name.el.value.trim(),
      email: fields.email.el.value.trim(),
      subject: fields.subject.el.value.trim(),
      message: fields.message.el.value.trim(),
      preferred_contact: $('#cf-pref')?.value || 'Email',
      date: new Date().toISOString()
    };

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    try {
      const key = CONFIG.admin.storageKey;
      const arr = JSON.parse(localStorage.getItem(key) || '[]');
      arr.unshift({ ...data, id: Date.now() });
      localStorage.setItem(key, JSON.stringify(arr));
    } catch (err) { /* ignore */ }

    let sentViaEmailJS = false;

    if (typeof emailjs === 'undefined') initEmailJS();

    if (typeof emailjs !== 'undefined') {
      try {
        await emailjs.send(
          CONFIG.emailjs.serviceId,
          CONFIG.emailjs.templateId,
          {
            from_name:         data.name,
            from_email:        data.email,
            reply_to:          data.email,
            to_email:          CONFIG.email,
            subject:           data.subject,
            message:           data.message,
            preferred_contact: data.preferred_contact,
            user_name:         data.name,
            user_email:        data.email,
            user_subject:      data.subject,
            user_message:      data.message
          },
          { publicKey: CONFIG.emailjs.publicKey }
        );
        sentViaEmailJS = true;
        console.log('✅ Email sent via EmailJS');
      } catch (err) {
        console.error('❌ EmailJS send failed:', err);
        const errMsg = err?.text || err?.message || 'Unknown error';
        toast('⚠️ Could not send email: ' + errMsg + ' — message saved locally.', 5000);
      }
    }

    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    form.reset();

    if (sentViaEmailJS) {
      toast('✅ Message sent successfully! I\'ll reply within 24 hours.');
    } else {
      toast('✅ Message saved! I\'ll get back to you soon.');
    }
  });
})();

/* ================= ADMIN PANEL ================= */
(function adminPanel() {
  const modal   = $('#adminModal');
  const login   = $('#adminLogin');
  const dash    = $('#adminDash');
  const passIn  = $('#adminPass');
  const errEl   = $('#adminErr');
  const listEl  = $('#adminList');
  const countEl = $('#msgCount');

  if (!modal) return;

  function openModal() {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (sessionStorage.getItem('pl-admin') === 'yes') {
      login.hidden = true; dash.hidden = false;
      renderMessages();
    } else {
      login.hidden = false; dash.hidden = true;
      setTimeout(() => passIn?.focus(), 200);
    }
  }
  function closeModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (passIn) passIn.value = '';
    if (errEl) errEl.textContent = '';
  }

  function getMessages() {
    try { return JSON.parse(localStorage.getItem(CONFIG.admin.storageKey) || '[]'); }
    catch { return []; }
  }
  function setMessages(arr) {
    localStorage.setItem(CONFIG.admin.storageKey, JSON.stringify(arr));
  }

  function renderMessages() {
    const arr = getMessages();
    if (countEl) countEl.textContent = arr.length;
    if (!listEl) return;
    if (!arr.length) {
      listEl.innerHTML = `<div class="admin-empty">📭 No messages yet.</div>`;
      return;
    }
    listEl.innerHTML = arr.map(m => `
      <div class="msg-card" data-id="${m.id}">
        <button class="msg-del" type="button" aria-label="Delete message">🗑</button>
        <div class="msg-top">
          <div>
            <div class="msg-name">${escapeHtml(m.name)}</div>
            <div class="msg-email">${escapeHtml(m.email)}</div>
          </div>
          <div class="msg-date">${new Date(m.date).toLocaleString()}</div>
        </div>
        <span class="msg-subject">📌 ${escapeHtml(m.subject)} · ${escapeHtml(m.preferred_contact || '')}</span>
        <div class="msg-body">${escapeHtml(m.message)}</div>
      </div>
    `).join('');

    listEl.querySelectorAll('.msg-del').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = +btn.closest('.msg-card').dataset.id;
        setMessages(getMessages().filter(x => x.id !== id));
        renderMessages();
        toast('Message deleted.');
      });
    });
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, s => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[s]));
  }

  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      openModal();
    }
    if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
  });

  $('#adminLoginBtn')?.addEventListener('click', () => {
    if (passIn.value === CONFIG.admin.password) {
      sessionStorage.setItem('pl-admin', 'yes');
      login.hidden = true;
      dash.hidden = false;
      renderMessages();
    } else {
      if (errEl) errEl.textContent = 'Incorrect password.';
    }
  });
  passIn?.addEventListener('keydown', e => {
    if (e.key === 'Enter') $('#adminLoginBtn')?.click();
  });

  $('#adminCancel')?.addEventListener('click', closeModal);
  $('#adminClose')?.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  $('#adminRefresh')?.addEventListener('click', () => { renderMessages(); toast('Refreshed.'); });

  $('#adminClearAll')?.addEventListener('click', () => {
    if (!confirm('Delete ALL messages? This cannot be undone.')) return;
    setMessages([]);
    renderMessages();
    toast('All messages cleared.');
  });

  $('#adminExportJson')?.addEventListener('click', () => {
    downloadFile('messages.json', JSON.stringify(getMessages(), null, 2), 'application/json');
  });
  $('#adminExportCsv')?.addEventListener('click', () => {
    const arr = getMessages();
    const headers = ['id','date','name','email','subject','preferred_contact','message'];
    const rows = arr.map(m => headers.map(h => `"${String(m[h] ?? '').replace(/"/g,'""')}"`).join(','));
    const csv = [headers.join(','), ...rows].join('\n');
    downloadFile('messages.csv', csv, 'text/csv');
  });

  function downloadFile(name, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
    toast('Downloaded ' + name);
  }
})();

/* ================= ACTIVE NAV LINK ================= */
(function activeNav() {
  const sections = $$('section[id]');
  const links = $$('.nav-link');
  if (!sections.length || !links.length) return;

  const io2 = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const id = e.target.id;
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => io2.observe(s));
})();

/* ================= SMOOTH SCROLL ================= */
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#' || id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});