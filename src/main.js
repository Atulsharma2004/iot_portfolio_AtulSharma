import './styles/main.css';
import {
  profile,
  about,
  skills,
  experience,
  projects,
  achievements,
  certifications,
  education,
  blogPosts,
  protocols,
} from './data/portfolio.js';
import githubRepos from './data/github-repos.json';

// ===== THEME =====
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle?.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ===== NAV =====
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle?.addEventListener('click', () => navLinks?.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => navLinks?.classList.remove('open'))
);

// ===== PROTOCOL BAR =====
const protocolBar = document.getElementById('protocol-bar');
protocols.forEach((p) => {
  const chip = document.createElement('span');
  chip.className = 'protocol-chip';
  chip.textContent = p;
  protocolBar?.appendChild(chip);
});

// ===== ARCH DIAGRAM ANIMATION =====
const archNodes = document.querySelectorAll('.arch-node');
let archStep = 0;
setInterval(() => {
  archNodes.forEach((n) => n.classList.remove('active'));
  archNodes[archStep]?.classList.add('active');
  archStep = (archStep + 1) % archNodes.length;
}, 1200);

// ===== ABOUT =====
const aboutStory = document.getElementById('about-story');
about.story.forEach((p) => {
  const el = document.createElement('p');
  el.textContent = p;
  aboutStory?.appendChild(el);
});

const timeline = document.getElementById('timeline');
about.timeline.forEach((item) => {
  const el = document.createElement('div');
  el.className = 'timeline-item';
  el.innerHTML = `
    <div class="timeline-year">${item.year}</div>
    <div class="timeline-title">${item.title}</div>
    <div class="timeline-desc">${item.desc}</div>
  `;
  timeline?.appendChild(el);
});

// ===== SKILLS =====
const skillsGrid = document.getElementById('skills-grid');
Object.entries(skills).forEach(([category, tags]) => {
  const card = document.createElement('div');
  card.className = 'skill-card reveal';
  card.innerHTML = `
    <h3>${category}</h3>
    <div class="skill-tags">${tags.map((t) => `<span class="skill-tag">${t}</span>`).join('')}</div>
  `;
  skillsGrid?.appendChild(card);
});

// ===== EXPERIENCE =====
const expCard = document.getElementById('experience-card');
expCard.innerHTML = `
  <div class="exp-header">
    <div>
      <div class="exp-company">${experience.company}</div>
      <div class="exp-role">${experience.role}</div>
    </div>
    <div class="exp-meta">
      <div>${experience.duration}</div>
      <div>${experience.location}</div>
    </div>
  </div>
  <div class="exp-highlights">
    ${experience.highlights
      .map(
        (h) => `
      <div class="exp-highlight">
        <h4>${h.title}</h4>
        <p>${h.desc}</p>
      </div>`
      )
      .join('')}
  </div>
`;

const expAchievements = document.getElementById('exp-achievements');
experience.achievements.forEach((a) => {
  const chip = document.createElement('span');
  chip.className = 'achievement-chip';
  chip.textContent = a;
  expAchievements?.appendChild(chip);
});

// ===== PROJECTS =====
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProjects(filter = 'all') {
  projectsGrid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  filtered.forEach((p) => {
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.dataset.category = p.category;
    card.innerHTML = `
      <div class="project-card-header">
        <h3>${p.title}</h3>
        <div class="project-card-meta">
          <span class="project-period">${p.period}</span>
          <span class="project-badge badge-${p.category}">${p.category}</span>
        </div>
      </div>
      <div class="project-card-body">
        <p class="project-desc">${p.desc}</p>
        <div class="project-tech">${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}</div>
        <ul class="project-features">${p.features.map((f) => `<li>${f}</li>`).join('')}</ul>
      </div>
      <div class="project-card-footer">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-link">View on GitHub →</a>` : ''}
      </div>
    `;
    projectsGrid.appendChild(card);
  });
  observeReveals();
}

renderProjects();
filterBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  })
);

// ===== GITHUB =====
const githubGrid = document.getElementById('github-grid');
githubRepos.forEach((repo) => {
  const card = document.createElement('a');
  card.className = 'github-card reveal';
  card.href = repo.url;
  card.target = '_blank';
  card.rel = 'noopener';
  card.innerHTML = `
    <div class="github-card-header">
      <div class="github-icon">⬡</div>
      <h3>${repo.name}</h3>
    </div>
    <p class="github-desc">${repo.description}</p>
    <div class="github-meta">
      <span class="github-lang"><span class="lang-dot"></span>${repo.language}</span>
      <span>★ ${repo.stars}</span>
      <span>Updated ${repo.updated}</span>
    </div>
    ${repo.tags ? `<div class="github-tags">${repo.tags.map((t) => `<span class="github-tag">${t}</span>`).join('')}</div>` : ''}
  `;
  githubGrid?.appendChild(card);
});

// ===== METRICS =====
const metricsGrid = document.getElementById('metrics-grid');
achievements.forEach((m) => {
  const card = document.createElement('div');
  card.className = 'metric-card reveal';
  const displayVal = m.text || '0';
  card.innerHTML = `
    <div class="metric-value" data-target="${m.text ? 0 : m.value}" data-text="${m.text || ''}" data-suffix="${m.suffix}">${displayVal}${m.text ? '' : m.suffix}</div>
    <div class="metric-label">${m.label}</div>
  `;
  metricsGrid?.appendChild(card);
});

// ===== BLOG =====
const blogGrid = document.getElementById('blog-grid');
blogPosts.forEach((post) => {
  const card = document.createElement('div');
  card.className = 'blog-card reveal';
  card.innerHTML = `
    <div class="blog-tag">${post.tag}</div>
    <h3>${post.title}</h3>
    <div class="blog-meta">${post.readTime} read · Coming soon</div>
  `;
  blogGrid?.appendChild(card);
});

// ===== CERTIFICATIONS =====
const certsList = document.getElementById('certs-list');
certifications.forEach((c) => {
  const item = document.createElement('div');
  item.className = 'cert-item';
  item.innerHTML = `
    <div class="cert-icon">🏅</div>
    <div>
      <div class="cert-name">${c.name}</div>
      <div class="cert-issuer">${c.issuer} · ${c.date}</div>
    </div>
  `;
  certsList?.appendChild(item);
});

// ===== EDUCATION =====
const eduCard = document.getElementById('edu-card');
eduCard.innerHTML = `
  <div class="edu-degree">${education.degree}</div>
  <div class="edu-institution">${education.institution}</div>
  <div class="edu-institution">${education.university}</div>
  <div class="edu-meta">
    <span class="edu-stat">${education.period}</span>
    <span class="edu-stat">CGPA: ${education.cgpa}</span>
    <span class="edu-stat">${education.honors}</span>
  </div>
`;

// ===== CONTACT =====
const contactInfo = document.getElementById('contact-info');
contactInfo.innerHTML = `
  <div class="contact-item">
    <div class="contact-icon">✉️</div>
    <div>
      <div class="contact-label">Email</div>
      <div class="contact-value"><a href="mailto:${profile.email}">${profile.email}</a></div>
    </div>
  </div>
  <div class="contact-item">
    <div class="contact-icon">📱</div>
    <div>
      <div class="contact-label">Phone</div>
      <div class="contact-value"><a href="tel:${profile.phone.replace(/\s/g, '')}">${profile.phone}</a></div>
    </div>
  </div>
  <div class="contact-item">
    <div class="contact-icon">💼</div>
    <div>
      <div class="contact-label">LinkedIn</div>
      <div class="contact-value"><a href="${profile.linkedin}" target="_blank" rel="noopener">linkedin.com/in/atulsharma2004</a></div>
    </div>
  </div>
  <div class="contact-item">
    <div class="contact-icon">⬡</div>
    <div>
      <div class="contact-label">GitHub</div>
      <div class="contact-value"><a href="${profile.github}" target="_blank" rel="noopener">github.com/Atulsharma2004</a></div>
    </div>
  </div>
  <div class="contact-item">
    <div class="contact-icon">📍</div>
    <div>
      <div class="contact-label">Location</div>
      <div class="contact-value">${profile.location}</div>
    </div>
  </div>
`;

document.getElementById('resume-btn')?.setAttribute('href', profile.resumeUrl);
document.getElementById('resume-btn')?.setAttribute('download', '');

document.getElementById('contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const subject = encodeURIComponent(`Portfolio Contact — ${name}`);
  const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
});

// ===== SCROLL REVEAL =====
function observeReveals() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => observer.observe(el));
}
observeReveals();

// ===== COUNTER ANIMATION =====
const metricObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target.querySelector('.metric-value');
      if (!el || el.dataset.text) return;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current + suffix;
      }, 40);
      metricObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll('.metric-card').forEach((c) => metricObserver.observe(c));

// ===== RTOS SIMULATION =====
const rtosTasks = document.querySelectorAll('.rtos-task');
const positions = [
  { top: '12px', left: '12px' },
  { top: '12px', right: '12px' },
  { bottom: '48px', left: '12px' },
  { bottom: '48px', right: '12px' },
];
let rtosIdx = 0;
setInterval(() => {
  rtosTasks.forEach((t, i) => {
    Object.assign(t.style, { top: '', left: '', right: '', bottom: '', opacity: '0.3', transform: 'scale(0.9)' });
    if (i === rtosIdx) {
      Object.assign(t.style, { ...positions[i], opacity: '1', transform: 'scale(1.05)', zIndex: '2' });
    }
  });
  rtosIdx = (rtosIdx + 1) % rtosTasks.length;
}, 1500);

// ===== TELEMETRY DEMO =====
setInterval(() => {
  const lat = (28.6139 + (Math.random() - 0.5) * 0.01).toFixed(4);
  const lon = (77.209 + (Math.random() - 0.5) * 0.01).toFixed(4);
  const bat = Math.floor(80 + Math.random() * 15);
  const rssi = Math.floor(-80 + Math.random() * 15);
  document.querySelector('[data-key="lat"]').textContent = lat + '°';
  document.querySelector('[data-key="lon"]').textContent = lon + '°';
  document.querySelector('[data-key="bat"]').textContent = bat + '%';
  document.querySelector('[data-key="rssi"]').textContent = rssi + ' dBm';
}, 3000);

// ===== PCB CANVAS =====
(function initPCB() {
  const canvas = document.getElementById('pcb-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, traces = [], pads = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    initTraces();
  }

  function initTraces() {
    traces = [];
    pads = [];
    const count = Math.floor((w * h) / 50000);
    for (let i = 0; i < count; i++) {
      const x1 = Math.random() * w;
      const y1 = Math.random() * h;
      const segs = 2 + Math.floor(Math.random() * 4);
      const points = [{ x: x1, y: y1 }];
      let cx = x1, cy = y1;
      for (let j = 0; j < segs; j++) {
        if (Math.random() > 0.5) cx += (Math.random() - 0.5) * 200;
        else cy += (Math.random() - 0.5) * 200;
        points.push({ x: cx, y: cy });
      }
      traces.push({ points, phase: Math.random() * Math.PI * 2 });
    }
    for (let i = 0; i < count * 0.3; i++) {
      pads.push({ x: Math.random() * w, y: Math.random() * h, r: 2 + Math.random() * 3 });
    }
  }

  let tick = 0;
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const traceColor = isLight ? 'rgba(0, 153, 122, 0.08)' : 'rgba(0, 212, 170, 0.06)';
    const padColor = isLight ? 'rgba(0, 153, 122, 0.15)' : 'rgba(0, 212, 170, 0.12)';
    const pulseColor = isLight ? 'rgba(0, 153, 122, 0.25)' : 'rgba(0, 212, 170, 0.2)';

    traces.forEach((trace) => {
      ctx.beginPath();
      trace.points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
      ctx.strokeStyle = traceColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      const pulsePos = ((tick * 0.005 + trace.phase) % 1);
      const segIdx = Math.floor(pulsePos * (trace.points.length - 1));
      const p = trace.points[segIdx];
      if (p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = pulseColor;
        ctx.fill();
      }
    });

    pads.forEach((pad) => {
      ctx.beginPath();
      ctx.arc(pad.x, pad.y, pad.r, 0, Math.PI * 2);
      ctx.fillStyle = padColor;
      ctx.fill();
      ctx.strokeStyle = isLight ? 'rgba(0, 153, 122, 0.2)' : 'rgba(0, 212, 170, 0.15)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
    });

    tick++;
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
})();
