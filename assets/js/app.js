import { siteContent } from "./content.js";

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => Array.from(document.querySelectorAll(selector));

const ICONS = {
  mail: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.511l9 5.4 9-5.4V7H3Zm18 10V9.489l-8.422 5.05a2 2 0 0 1-2.156 0L2 9.489V17h19Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 3H3.55A1.54 1.54 0 0 0 2 4.53v14.94A1.54 1.54 0 0 0 3.55 21h16.9A1.54 1.54 0 0 0 22 19.47V4.53A1.54 1.54 0 0 0 20.45 3ZM8.34 17.54H6.09V10.2h2.25Zm-1.12-8.35a1.31 1.31 0 1 1 1.31-1.31 1.31 1.31 0 0 1-1.31 1.31Zm10.32 8.35h-2.25v-3.74c0-.89-.02-2.03-1.24-2.03s-1.43 1-1.43 2v3.74H10.37V10.2h2.16v1h.03a2.37 2.37 0 0 1 2.13-1.17c2.28 0 2.7 1.5 2.7 3.44Z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.205 3H20.5l-7.5 8.568L21 21h-6.34l-4.96-5.704L4.023 21H.723l8-9.145L0 3h6.5l4.48 5.11zm-1.14 16h1.8L7.9 5.9h-1.9z"/></svg>`,
  github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.859 10.928c.575.107.786-.247.786-.555 0-.274-.01-1-.016-1.964-3.198.695-3.873-1.541-3.873-1.541-.523-1.33-1.277-1.686-1.277-1.686-1.044-.714.079-.699.079-.699 1.154.082 1.762 1.186 1.762 1.186 1.027 1.76 2.695 1.252 3.354.957.104-.743.402-1.252.73-1.54-2.553-.291-5.238-1.276-5.238-5.68 0-1.255.449-2.28 1.184-3.084-.118-.29-.513-1.461.112-3.046 0 0 .967-.31 3.17 1.178a10.92 10.92 0 0 1 2.886-.388c.979.004 1.967.132 2.887.388 2.201-1.488 3.166-1.178 3.166-1.178.627 1.585.233 2.756.115 3.046.737.804 1.183 1.829 1.183 3.084 0 4.417-2.69 5.386-5.256 5.673.414.355.783 1.048.783 2.112 0 1.526-.014 2.757-.014 3.132 0 .31.208.668.794.554A11.503 11.503 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z"/></svg>`,
  scholar: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2 2 7l10 5 8.5-4.25V17H22V7zm0 7L5.5 7 12 3.5 18.5 7Zm-5.25 6A3.75 3.75 0 0 0 3 18.75V21h1.5v-2.25a2.25 2.25 0 0 1 4.5 0V21H10v-2.25A3.75 3.75 0 0 0 6.75 15Zm10.5 0A3.75 3.75 0 0 0 13.5 18.75V21H15v-2.25a2.25 2.25 0 0 1 4.5 0V21H21v-2.25A3.75 3.75 0 0 0 17.25 15Z"/></svg>`,
  researchgate: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.75 3c-2.26 0-4.17 1.83-4.25 4.1v9.8a1.6 1.6 0 0 0 1.6 1.6h3.1c2.26 0 4.1-1.91 4.1-4.25v-7.3A3.96 3.96 0 0 0 17.75 3Zm2.6 11.25c0 1.02-.74 1.85-1.7 1.85h-1.9v-3.7h1.9c.96 0 1.7.83 1.7 1.85ZM9.5 3.5h-6A2 2 0 0 0 1.5 5.5v13a2 2 0 0 0 2 2h6a1.5 1.5 0 0 0 0-3H7.6s-.1-4.54-.1-4.82c.2.01.41.02.62.02 2.73 0 4.93-2.21 4.93-4.93S10.85 3.5 8.13 3.5Zm-.83 6.76c-1.22 0-2.2-.98-2.2-2.2s.98-2.2 2.2-2.2 2.2.98 2.2 2.2-.98 2.2-2.2 2.2Z"/></svg>`,
  orcid: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 1.75C6.07 1.75 1.25 6.57 1.25 12.5S6.07 23.25 12 23.25 22.75 18.43 22.75 12.5 17.93 1.75 12 1.75Zm-2.375 4h1.75v13.5h-1.75Zm6.187 3.25c2.21 0 4 1.79 4 4s-1.79 4-4 4h-2.062V9h2.062Zm-.062 1.685h-.25v4.63h.25a2.315 2.315 0 0 0 0-4.63ZM7.438 5.5a1.063 1.063 0 1 1 0 2.124 1.063 1.063 0 0 1 0-2.124Z"/></svg>`,
};

const ICON_COLORS = {
  mail: { bg: "rgba(255,255,255,0.08)", fg: "var(--brand-cyan)" },
  linkedin: { bg: "#0a66c2", fg: "#fff" },
  x: { bg: "#111", fg: "#fff" },
  github: { bg: "#1f2937", fg: "#fff" },
  scholar: { bg: "#4285f4", fg: "#fff" },
  researchgate: { bg: "#00ccbb", fg: "#00332b" },
  orcid: { bg: "#a6ce39", fg: "#063" },
};

const renderGallery = () => {
  const galleryEl = qs("#gallery");
  const slides = siteContent.gallery || [];
  if (!galleryEl || !slides.length) return;
  galleryEl.innerHTML = `
    <div class="swiper mediaSwiper">
      <div class="swiper-wrapper">
        ${slides
          .map(
            (slide) => `
          <div class="swiper-slide">
            <img src="${slide.src}" alt="${slide.alt}" loading="lazy" />
          </div>`
          )
          .join("")}
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  `;
};

const renderAboutMe = () => {
  const aboutMeEl = qs("#aboutMe");
  if (!aboutMeEl) return;
  const { aboutMe, highlights } = siteContent;
  aboutMeEl.innerHTML = `
    <div class="about-me-unified-content">
      <div class="about-me-content">
        <h2>${aboutMe.title}</h2>
        <p>${aboutMe.content}</p>
      </div>
      <div class="highlights-grid">
        ${highlights
          .map(
            (item, index) => `
          <div class="highlight-card" style="animation-delay: ${index * 0.1}s">
            <div class="highlight-card__value">${item.value}</div>
            <div class="highlight-card__label">${item.label}</div>
          </div>`
          )
          .join("")}
      </div>
      <div class="highlights-banner" style="animation-delay: 0.4s">
        <p>I bring creative problem-solving to novel AI–robotics pipelines, collaborate effectively across teams, and mentor students toward successful project outcomes.</p>
      </div>
    </div>
  `;
};

const renderHighlights = () => {
  // This is now handled in renderAboutMe
  // Keeping function for backward compatibility
};

const renderProfileRail = () => {
  const railEl = qs("#profile-rail");
  if (!railEl) return;
  const { hero, profileRail } = siteContent;

  railEl.innerHTML = `
    <div class="profile-card">
      <div class="profile-card__identity">
        <div class="profile-card__media">
          <img src="${hero.portrait.src}" alt="Portrait of ${hero.name}" loading="lazy" />
        </div>
        <div class="profile-card__text">
          ${profileRail.lines.map((line) => `<p>${line}</p>`).join("")}
        </div>
      </div>
      <div class="profile-card__links">
        ${profileRail.links
          .map(
            (link) => `
          <a class="profile-card__link" href="${link.href}" target="${link.href.startsWith("mailto") ? "_self" : "_blank"}" rel="noopener">
            <span class="icon" style="background:${ICON_COLORS[link.icon]?.bg || "rgba(255,255,255,0.08)"};color:${
              ICON_COLORS[link.icon]?.fg || "var(--brand-cyan)"
            }">
              ${ICONS[link.icon] || ""}
            </span>
            <span>${link.label}</span>
          </a>`
          )
          .join("")}
      </div>
    </div>
  `;
};

const renderHero = () => {
  const { hero } = siteContent;
  const heroEl = qs("#hero");
  heroEl.innerHTML = `
    <div class="hero__inner">
      <div class="hero__text">
        <p class="eyebrow">Robotics · Shared Autonomy · EEG</p>
        <h1>${hero.title}</h1>
        <p>${hero.description}</p>
        <div class="hero__cta">
          ${hero.ctas
            .map(
              (cta) =>
                `<a href="${cta.href}" class="${cta.variant === "primary" ? "primary" : ""}" target="${
                  cta.href.startsWith("http") ? "_blank" : "_self"
                }" rel="noopener">${cta.label}</a>`
            )
            .join("")}
        </div>
      </div>
      <div class="hero__metrics">
        ${hero.metrics
          .map(
            (metric) => `
            <div class="metric-card">
              <strong>${metric.value}</strong>
              <span>${metric.label}</span>
              <p>${metric.detail}</p>
            </div>`
          )
          .join("")}
      </div>
    </div>
  `;
};

const renderAbout = () => {
  const { about } = siteContent;
  qs("#about").innerHTML = `
    <header>
      <p class="eyebrow">About</p>
      <h2>Human-centered autonomy, built from lab to living room.</h2>
      <p class="lead">${about.intro}</p>
    </header>
    <div class="grid grid--two">
      <div class="card">
        <h3>Focus</h3>
        <ul>
          ${about.focus.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div class="card">
        <h3>Snapshot</h3>
        <ul>
          ${about.stats.map((stat) => `<li><strong>${stat.label}:</strong> ${stat.value}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
};

const renderSkills = () => {
  qs("#skills").innerHTML = `
    <header>
      <p class="eyebrow">Focus Areas</p>
      <h2>Where I spend most of my build time.</h2>
      <p class="lead">Each initiative blends ML research rigor, hardware-aware execution, and product intuition.</p>
    </header>
    <div class="grid grid--three">
      ${siteContent.skills
        .map(
          (cluster) => `
        <article class="card">
          <h3>${cluster.title}</h3>
          <ul>
            ${cluster.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>`
        )
        .join("")}
    </div>
  `;
};

const renderProjects = () => {
  qs("#projects").innerHTML = `
    <header>
      <p class="eyebrow">Projects</p>
      <h2>Systems, toolkits, and experiments in active rotation.</h2>
      <p class="lead">From Kinova shared autonomy deployments to data-centric EEG tooling, these projects show my range across research and production ML.</p>
    </header>
    <div class="grid grid--projects">
      ${siteContent.projects
        .map(
          (project) => `
        <article class="card project-card">
          <div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tag-list">
              ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
          ${project.media ? renderMedia(project.media) : ""}
          <div class="actions">
            ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener">View project →</a>` : ""}
          </div>
        </article>`
        )
        .join("")}
    </div>
  `;
};

const renderMedia = (media) => {
  if (media.type === "video") {
    return `
      <div class="media-frame">
        <video controls preload="metadata">
          <source src="${media.src}" type="video/mp4" />
        </video>
      </div>
    `;
  }
  return `
    <div class="media-frame">
      <img src="${media.src}" alt="Project media preview" loading="lazy" />
    </div>
  `;
};

const renderNews = () => {
  qs("#news").innerHTML = `
    <header>
      <p class="eyebrow">News</p>
      <h2>Recent signals from the lab.</h2>
      <p class="lead">Milestones, submissions, and conference moments worth sharing.</p>
    </header>
    <div class="news-timeline">
      ${siteContent.news
        .map(
          (item) => `
        <article class="news-item">
          <div class="news-item__date">${item.date}</div>
          <div>
            <h3>${item.title}</h3>
            <p>${item.detail}</p>
          </div>
        </article>`
        )
        .join("")}
    </div>
  `;
};

const renderExperience = () => {
  qs("#experience").innerHTML = `
    <header>
      <p class="eyebrow">Experience</p>
      <h2>Scaling research with hands-on engineering.</h2>
    </header>
    <div class="grid grid--two">
      <div>
        <h3>Work</h3>
        <div class="timeline">
          ${siteContent.experience.work.map((entry) => renderTimelineEntry(entry)).join("")}
        </div>
      </div>
      <div>
        <h3>Research</h3>
        <div class="timeline">
          ${siteContent.experience.research.map((entry) => renderTimelineEntry(entry)).join("")}
        </div>
      </div>
    </div>
  `;
};

const renderTimelineEntry = (entry) => `
  <article class="timeline-entry">
    <h4>${entry.role} · ${entry.org}</h4>
    <p>${entry.period} · ${entry.location}</p>
    <ul>
      ${entry.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
    </ul>
  </article>
`;

const renderPublications = () => {
  const groups = siteContent.publications;
  qs("#publications").innerHTML = `
    <header>
      <p class="eyebrow">Publications</p>
      <h2>Publishing across robotics, neuroscience, and ML.</h2>
    </header>
    <div class="publication-groups">
      ${Object.entries(groups)
        .map(
          ([groupName, items]) => `
        <section class="publication-group">
          <h3>${capitalize(groupName)}</h3>
          <ol>
            ${items.map((item) => `<li>${item}</li>`).join("")}
          </ol>
        </section>`
        )
        .join("")}
    </div>
  `;
};

const renderHonors = () => {
  qs("#honors").innerHTML = `
    <header>
      <p class="eyebrow">Honors</p>
      <h2>Recognition & community roles.</h2>
    </header>
    <ul class="list-columns">
      ${siteContent.honors.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
};

const renderContact = () => {
  const { contact } = siteContent;
  qs("#contact").innerHTML = `
    <header>
      <p class="eyebrow">Contact</p>
      <h2>Let’s build the next wave of assistive autonomy.</h2>
      <p class="lead">${contact.availability}</p>
    </header>
    <div class="contact-grid">
      <div class="contact-card">
        <h3>Email</h3>
        <a href="mailto:${contact.email}">${contact.email}</a>
      </div>
      <div class="contact-card">
        <h3>Office</h3>
        <p>${contact.office.join("<br />")}</p>
      </div>
      <div class="contact-card">
        <h3>Networks</h3>
        <ul>
          ${contact.socials.map((social) => `<li><a href="${social.href}" target="_blank" rel="noopener">${social.label}</a></li>`).join("")}
        </ul>
      </div>
    </div>
  `;
};

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const initSlider = () => {
  if (typeof Swiper === "undefined") return;
  new Swiper(".mediaSwiper", {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
};

const setupNav = () => {
  const nav = qs(".site-nav");
  const toggle = qs(".site-nav__toggle");
  const links = qsa("[data-scroll]");

  const closeNav = () => nav.classList.remove("is-open");

  toggle?.addEventListener("click", () => nav.classList.toggle("is-open"));

  links.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.scroll);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      closeNav();
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((btn) => {
            btn.classList.toggle("is-active", btn.dataset.scroll === entry.target.id);
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  qsa("main section").forEach((section) => observer.observe(section));
};

const setupReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  qsa("[data-animate]").forEach((el) => observer.observe(el));
};

const setYear = () => {
  const yearEl = qs("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
};

renderGallery();
renderAboutMe();
renderHighlights();
renderProfileRail();
renderSkills();
renderProjects();
renderNews();
renderExperience();
renderPublications();
renderHonors();
renderContact();
setupNav();
setupReveal();
setYear();
initSlider();

