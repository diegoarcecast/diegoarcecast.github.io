// ==========================================================================
// Supreme Portfolio - Main JavaScript
// ==========================================================================

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ==========================================================================
// Theme Management
// ==========================================================================

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Get saved theme or use default
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);

// Theme toggle handler
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ==========================================================================
// Language Management (Bilingual EN/ES)
// ==========================================================================

const translations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.greeting': "Hello, I'm",
        'hero.name': 'Juan Diego Arce Castro',
        'hero.title': 'Senior Data & Systems Engineer',
        'hero.description': 'Delivering mission-critical data solutions in regulated environments. Specialized in SQL Server, Business Intelligence, Azure, and legacy modernization.',
        'hero.glance.title': 'At a Glance',
        'hero.domain': 'Domain:',
        'hero.domain.value': 'Government & regulated systems',
        'hero.strengths': 'Strengths:',
        'hero.strengths.value': 'SQL, BI, ETL & data integrity',
        'hero.cloud': 'Cloud:',
        'hero.cloud.value': 'Azure (VMs, SQL DB, DevOps)',
        'hero.impact': 'Impact:',
        'hero.impact.value': 'Process automation, audits & AI initiatives',
        'hero.download.cv': 'Download CV',
        'hero.view.projects': 'View Projects',
        'hero.contact.me': 'Contact Me',

        // About Section
        'about.title': 'About Me',
        'about.intro': "I'm a Senior Data & Systems Engineer with deep expertise in mission-critical systems within regulated government environments.",
        'about.p1': "Over the past 5+ years, I've specialized in SQL Server, Business Intelligence, and Azure infrastructure, with a proven track record of delivering enterprise-grade solutions for the Costa Rican government.",
        'about.p2': 'My approach combines technical precision with a focus on data integrity and auditability—critical in regulated environments. I excel at modernizing legacy systems, automating complex processes, and implementing innovative solutions like AI-powered workflows.',

        // Skills Section
        'skills.title': 'Technical Skills',

        // Experience Section
        'experience.title': 'Professional Experience',
        'experience.inamu.title': 'Senior Data & Systems Engineer',
        'experience.inamu.company': 'INAMU (National Institute for Women) – Costa Rica Government',
        'experience.inamu.period': '2023 - Present',
        'experience.inamu.summary': "Leading data infrastructure and system modernization initiatives across the organization's mission-critical platforms. Responsible for SQL Server architecture, Business Intelligence solutions, Azure cloud migration, and enterprise-level system integration.",
        'experience.inamu.systems.title': 'Primary Systems',

        'experience.amazon.title': 'Fraud Risk Specialist',
        'experience.amazon.company': 'Amazon Costa Rica – Global Services (Risk Mining Operations)',
        'experience.amazon.period': 'Sep 2019 - May 2023',
        'experience.amazon.summary': 'Data-driven fraud detection and risk analysis supporting global e-commerce operations. Leveraged SQL and advanced analytics to identify anomalies and strengthen risk controls.',
        'experience.amazon.responsibilities.title': 'Key Responsibilities',
        'experience.amazon.resp1': 'Data analysis to detect anomalies and fraud patterns across global platforms',
        'experience.amazon.resp2': 'SQL and advanced Excel reporting to support operational monitoring and investigations',
        'experience.amazon.resp3': 'Collaboration with Analytics/Product teams to improve internal risk controls based on data',

        // Projects Section
        'projects.title': 'Featured Projects',
        'projects.viewdetails': 'View Details',

        // Metrics Section
        'metrics.years': 'Years of Experience',
        'metrics.systems': 'Systems Managed',
        'metrics.deployments': 'Cloud Deployments',
        'metrics.users': 'End Users Supported',

        // Contact Section
        'contact.title': "Let's Connect",
        'contact.intro': 'Available for remote opportunities with US/EU companies. Open to senior data engineering, BI architecture, and technical leadership roles.',
        'contact.email': 'Email',
        'contact.phone': 'Phone',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.copy.email': 'Copy Email',
        'contact.copy.phone': 'Copy Phone',
        'contact.view.profile': 'View Profile',
        'contact.view.projects': 'View Projects',

        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.updated': 'Last updated:'
    },
    es: {
        // Navegación
        'nav.about': 'Acerca de',
        'nav.skills': 'Habilidades',
        'nav.experience': 'Experiencia',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',

        // Sección Hero
        'hero.greeting': 'Hola, soy',
        'hero.name': 'Juan Diego Arce Castro',
        'hero.title': 'Ingeniero Senior de Datos y Sistemas',
        'hero.description': 'Entregando soluciones de datos críticas en entornos regulados. Especializado en SQL Server, Business Intelligence, Azure y modernización de sistemas legacy.',
        'hero.glance.title': 'De un Vistazo',
        'hero.domain': 'Dominio:',
        'hero.domain.value': 'Sistemas gubernamentales y regulados',
        'hero.strengths': 'Fortalezas:',
        'hero.strengths.value': 'SQL, BI, ETL e integridad de datos',
        'hero.cloud': 'Nube:',
        'hero.cloud.value': 'Azure (VMs, SQL DB, DevOps)',
        'hero.impact': 'Impacto:',
        'hero.impact.value': 'Automatización de procesos, auditorías e iniciativas de IA',
        'hero.download.cv': 'Descargar CV',
        'hero.view.projects': 'Ver Proyectos',
        'hero.contact.me': 'Contáctame',

        // Sección Acerca de
        'about.title': 'Acerca de Mí',
        'about.intro': 'Soy un Ingeniero Senior de Datos y Sistemas con amplia experiencia en sistemas críticos dentro de entornos gubernamentales regulados.',
        'about.p1': 'Durante los últimos 5+ años, me he especializado en SQL Server, Business Intelligence e infraestructura Azure, con un historial comprobado de entrega de soluciones de nivel empresarial para el gobierno de Costa Rica.',
        'about.p2': 'Mi enfoque combina precisión técnica con un enfoque en la integridad de datos y auditabilidad—crítico en entornos regulados. Destaco en la modernización de sistemas legacy, automatización de procesos complejos e implementación de soluciones innovadoras como flujos de trabajo impulsados por IA.',

        // Sección Habilidades
        'skills.title': 'Habilidades Técnicas',

        // Sección Experiencia
        'experience.title': 'Experiencia Profesional',
        'experience.inamu.title': 'Ingeniero Senior de Datos y Sistemas',
        'experience.inamu.company': 'INAMU (Instituto Nacional de las Mujeres) – Gobierno de Costa Rica',
        'experience.inamu.period': '2023 - Presente',
        'experience.inamu.summary': 'Liderando infraestructura de datos e iniciativas de modernización de sistemas en las plataformas críticas de la organización. Responsable de la arquitectura SQL Server, soluciones de Business Intelligence, migración a la nube Azure e integración de sistemas de nivel empresarial.',
        'experience.inamu.systems.title': 'Sistemas Principales',

        'experience.amazon.title': 'Especialista en Riesgo de Fraude',
        'experience.amazon.company': 'Amazon Costa Rica – Servicios Globales (Operaciones de Minería de Riesgos)',
        'experience.amazon.period': 'Sep 2019 - Mayo 2023',
        'experience.amazon.summary': 'Detección de fraude basada en datos y análisis de riesgos en apoyo a operaciones de comercio electrónico global. Utilicé SQL y análisis avanzados para identificar anomalías y fortalecer los controles de riesgo.',
        'experience.amazon.responsibilities.title': 'Responsabilidades Clave',
        'experience.amazon.resp1': 'Análisis de datos para detectar anomalías y patrones de fraude en plataformas globales',
        'experience.amazon.resp2': 'Reportes SQL y Excel avanzados para apoyar monitoreo operacional e investigaciones',
        'experience.amazon.resp3': 'Colaboración con equipos de Analítica/Producto para mejorar controles internos de riesgo basados en datos',

        // Sección Proyectos
        'projects.title': 'Proyectos Destacados',
        'projects.viewdetails': 'Ver Detalles',

        // Sección Métricas
        'metrics.years': 'Años de Experiencia',
        'metrics.systems': 'Sistemas Gestionados',
        'metrics.deployments': 'Despliegues en la Nube',
        'metrics.users': 'Usuarios Finales Atendidos',

        // Sección Contacto
        'contact.title': 'Conectemos',
        'contact.intro': 'Disponible para oportunidades remotas con empresas de EE. UU./UE. Abierto a roles senior de ingeniería de datos, arquitectura de BI y liderazgo técnico.',
        'contact.email': 'Correo',
        'contact.phone': 'Teléfono',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.copy.email': 'Copiar Correo',
        'contact.copy.phone': 'Copiar Teléfono',
        'contact.view.profile': 'Ver Perfil',
        'contact.view.projects': 'Ver Proyectos',

        // Pie de página
        'footer.rights': 'Todos los derechos reservados.',
        'footer.updated': 'Última actualización:'
    }
};

// Language state
let currentLang = localStorage.getItem('lang') || 'en';
const langToggle = document.getElementById('lang-toggle');
const langText = document.querySelector('.lang-text');

// Function to apply translations
function applyTranslations(lang) {
    const t = translations[lang];

    // Navigation
    document.querySelectorAll('.nav-links a').forEach((link, i) => {
        const texts = ['nav.about', 'nav.skills', 'nav.experience', 'nav.projects', 'nav.contact'];
        if (t[texts[i]]) link.textContent = t[texts[i]];
    });

    // Hero section
    const heroGreeting = document.querySelector('.hero-greeting');
    const heroName = document.querySelector('.hero-name');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');

    if (heroGreeting) heroGreeting.textContent = t['hero.greeting'];
    if (heroName) heroName.textContent = t['hero.name'];
    if (heroSubtitle) heroSubtitle.textContent = t['hero.title'];
    if (heroDescription) heroDescription.textContent = t['hero.description'];

    // Quick scan card
    const quickScanTitle = document.querySelector('.quick-scan-title');
    if (quickScanTitle) quickScanTitle.textContent = t['hero.glance.title'];

    const quickScanItems = document.querySelectorAll('.quick-scan-list li');
    if (quickScanItems.length >= 4) {
        quickScanItems[0].querySelector('strong').textContent = t['hero.domain'];
        quickScanItems[0].querySelector('span').innerHTML = `<strong>${t['hero.domain']}</strong> ${t['hero.domain.value']}`;

        quickScanItems[1].querySelector('strong').textContent = t['hero.strengths'];
        quickScanItems[1].querySelector('span').innerHTML = `<strong>${t['hero.strengths']}</strong> ${t['hero.strengths.value']}`;

        quickScanItems[2].querySelector('strong').textContent = t['hero.cloud'];
        quickScanItems[2].querySelector('span').innerHTML = `<strong>${t['hero.cloud']}</strong> ${t['hero.cloud.value']}`;

        quickScanItems[3].querySelector('strong').textContent = t['hero.impact'];
        quickScanItems[3].querySelector('span').innerHTML = `<strong>${t['hero.impact']}</strong> ${t['hero.impact.value']}`;
    }

    // Hero buttons
    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
        const buttons = heroCta.querySelectorAll('.btn');
        if (buttons[0]) buttons[0].childNodes[2].textContent = ' ' + t['hero.download.cv'];
        if (buttons[1]) buttons[1].childNodes[2].textContent = ' ' + t['hero.view.projects'];
        if (buttons[2]) buttons[2].textContent = t['hero.contact.me'];
    }

    // Section titles
    const sections = {
        'about': 'about.title',
        'skills': 'skills.title',
        'experience': 'experience.title',
        'projects': 'projects.title',
        'contact': 'contact.title'
    };

    Object.keys(sections).forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const title = section.querySelector('.section-title');
            if (title) title.textContent = t[sections[id]];
        }
    });

    // Contact section
    const contactIntro = document.querySelector('.contact-intro');
    if (contactIntro) contactIntro.textContent = t['contact.intro'];

    const contactCards = document.querySelectorAll('.contact-card');
    if (contactCards.length >= 3) {
        // Email card
        if (contactCards[0].querySelector('h3')) contactCards[0].querySelector('h3').textContent = t['contact.email'];
        if (contactCards[0].querySelector('.copy-text')) contactCards[0].querySelector('.copy-text').textContent = t['contact.copy.email'];

        // Phone card
        if (contactCards[1].querySelector('h3')) contactCards[1].querySelector('h3').textContent = t['contact.phone'];
        if (contactCards[1].querySelector('.copy-text-phone')) contactCards[1].querySelector('.copy-text-phone').textContent = t['contact.copy.phone'];

        // LinkedIn card
        if (contactCards[2].querySelector('h3')) contactCards[2].querySelector('h3').textContent = t['contact.linkedin'];
        const linkedInLink = contactCards[2].querySelector('.contact-link');
        if (linkedInLink) linkedInLink.childNodes[1].textContent = ' ' + t['contact.view.profile'];

        // GitHub card
        if (contactCards[3]) {
            if (contactCards[3].querySelector('h3')) contactCards[3].querySelector('h3').textContent = t['contact.github'];
            const githubLink = contactCards[3].querySelector('.contact-link');
            if (githubLink) githubLink.childNodes[1].textContent = ' ' + t['contact.view.projects'];
        }
    }

    // Metrics section
    const metricCards = document.querySelectorAll('.metric-card');
    if (metricCards.length >= 4) {
        const metricLabels = metricCards[0].parentElement.querySelectorAll('.metric-label');
        if (metricLabels[0]) metricLabels[0].textContent = t['metrics.years'];
        if (metricLabels[1]) metricLabels[1].textContent = t['metrics.systems'];
        if (metricLabels[2]) metricLabels[2].textContent = t['metrics.deployments'];
        if (metricLabels[3]) metricLabels[3].textContent = t['metrics.users'];
    }

    // Experience section - INAMU
    const inamuTitle = document.querySelector('.timeline-item:first-child .experience-header h3');
    const inamuCompany = document.querySelector('.timeline-item:first-child .company');
    const inamuPeriod = document.querySelector('.timeline-item:first-child .period');
    const inamuSummary = document.querySelector('.timeline-item:first-child .experience-summary');

    if (inamuTitle) inamuTitle.textContent = t['experience.inamu.title'];
    if (inamuCompany) inamuCompany.textContent = t['experience.inamu.company'];
    if (inamuPeriod) inamuPeriod.textContent = t['experience.inamu.period'];
    if (inamuSummary) inamuSummary.textContent = t['experience.inamu.summary'];

    // Experience section - Amazon
    const amazonTitle = document.querySelector('.timeline-item:nth-child(2) .experience-header h3');
    const amazonCompany = document.querySelector('.timeline-item:nth-child(2) .company');
    const amazonPeriod = document.querySelector('.timeline-item:nth-child(2) .period');
    const amazonSummary = document.querySelector('.timeline-item:nth-child(2) .experience-summary');

    if (amazonTitle) amazonTitle.textContent = t['experience.amazon.title'];
    if (amazonCompany) amazonCompany.textContent = t['experience.amazon.company'];
    if (amazonPeriod) amazonPeriod.textContent = t['experience.amazon.period'];
    if (amazonSummary) amazonSummary.textContent = t['experience.amazon.summary'];

    const amazonRespTitle = document.querySelector('.timeline-item:nth-child(2) .experience-achievements h4');
    if (amazonRespTitle) amazonRespTitle.textContent = t['experience.amazon.responsibilities.title'];

    const amazonRespList = document.querySelectorAll('.timeline-item:nth-child(2) .experience-achievements li');
    if (amazonRespList.length >= 3) {
        amazonRespList[0].textContent = t['experience.amazon.resp1'];
        amazonRespList[1].textContent = t['experience.amazon.resp2'];
        amazonRespList[2].textContent = t['experience.amazon.resp3'];
    }

    // Update language indicator
    langText.textContent = lang.toUpperCase();
    currentLang = lang;
    localStorage.setItem('lang', lang);
}

// Language toggle handler
langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'es' : 'en';
    applyTranslations(newLang);
});

// Apply saved language on load
applyTranslations(currentLang);


// ==========================================================================
// Smooth Scrolling & Scrollspy
// ==========================================================================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = document.getElementById('main-nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scrollspy - Highlight active section in navigation
const navLinks = document.querySelectorAll('[data-nav-link]');
const sections = document.querySelectorAll('.section, .hero-section');

function updateActiveNav() {
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav(); // Initial call

// ==========================================================================
// Scroll Animations with GSAP
// ==========================================================================

// Fade-in animations for sections
const animateElements = document.querySelectorAll(
    '.hero-content, .section-title, .about-text, .skill-card, .timeline-item, .project-card, .metric-card, .contact-card'
);

animateElements.forEach((element, index) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: index % 3 === 0 ? 0 : (index % 3) * 0.1,
        ease: 'power2.out'
    });
});

// Parallax effect for hero content - reversed (starts visible, fades as you scroll)
gsap.fromTo('.hero-content',
    {
        y: 0,
        opacity: 1
    },
    {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: -100,
        opacity: 0,
        ease: 'none'
    }
);

// ==========================================================================
// Skills Filter
// ==========================================================================

const skillFilters = document.querySelectorAll('.skill-filter');
const skillCards = document.querySelectorAll('.skill-card');

skillFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Update active filter
        skillFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');

        const category = filter.getAttribute('data-filter');

        // Filter skill cards
        skillCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (category === 'all' || cardCategory === category) {
                card.classList.remove('hidden');
                gsap.from(card, {
                    opacity: 0,
                    y: 20,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ==========================================================================
// Animated Counters for Metrics
// ==========================================================================

const metricObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const metricValue = entry.target;
            const target = parseInt(metricValue.getAttribute('data-target'));
            animateCounter(metricValue, target);
            metricObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.metric-value').forEach(metric => {
    metricObserver.observe(metric);
});

function animateCounter(element, target) {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(target * easeOutQuad(progress));
        element.textContent = currentCount;

        if (frame === totalFrames) {
            clearInterval(counter);
            element.textContent = target;
        }
    }, frameDuration);
}

function easeOutQuad(t) {
    return t * (2 - t);
}

// ==========================================================================
// Project Modals
// ==========================================================================

const modalOverlay = document.getElementById('modal-overlay');
const projectLinks = document.querySelectorAll('.project-link');
const modalCloses = document.querySelectorAll('.modal-close');

// Open modal
projectLinks.forEach(link => {
    link.addEventListener('click', () => {
        const modalId = link.getAttribute('data-modal') + '-modal';
        const modal = document.getElementById(modalId);

        if (modal) {
            modalOverlay.classList.add('active');
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';

            // Trigger animation
            setTimeout(() => {
                gsap.from(modal, {
                    scale: 0.9,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }, 10);
        }
    });
});

// Close modal
function closeModal() {
    const activeModals = document.querySelectorAll('.modal');
    activeModals.forEach(modal => {
        modal.style.display = 'none';
    });
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalCloses.forEach(close => {
    close.addEventListener('click', closeModal);
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// ==========================================================================
// Copy Email to Clipboard
// ==========================================================================

const copyEmailBtn = document.getElementById('copy-email');
const emailAddress = document.getElementById('email-address').textContent;

copyEmailBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(emailAddress);

        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span class="copy-text">Copied!</span>
        `;
        copyEmailBtn.classList.add('copied');

        setTimeout(() => {
            copyEmailBtn.innerHTML = originalText;
            copyEmailBtn.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy email:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = emailAddress;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        alert('Email copied to clipboard!');
    }
});

// ==========================================================================
// Copy Phone Number
// ==========================================================================

const copyPhoneBtn = document.getElementById('copy-phone');
const phoneNumber = document.getElementById('phone-number');

if (copyPhoneBtn && phoneNumber) {
    copyPhoneBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(phoneNumber.textContent);

            const originalText = copyPhoneBtn.innerHTML;
            copyPhoneBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span class="copy-text-phone">Copied!</span>
            `;
            copyPhoneBtn.classList.add('copied');

            setTimeout(() => {
                copyPhoneBtn.innerHTML = originalText;
                copyPhoneBtn.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy phone:', err);
        }
    });
}

// ==========================================================================
// Footer - Auto Update Year and Date
// ==========================================================================

// Current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Last updated date
const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
document.getElementById('last-updated').textContent = lastUpdated;

// ==========================================================================
// Navbar Background on Scroll
// ==========================================================================

const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.boxShadow = 'var(--shadow-md)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// ==========================================================================
// Reduced Motion Support
// ==========================================================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
    // Disable GSAP animations
    gsap.globalTimeline.clear();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Remove scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView();
                }
            }
        });
    });
}

// ==========================================================================
// Keyboard Navigation Enhancement
// ==========================================================================

// Trap focus in modal when open
modalOverlay.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('active')) return;

    const activeModal = Array.from(document.querySelectorAll('.modal')).find(
        modal => modal.style.display === 'block'
    );

    if (!activeModal) return;

    const focusableElements = activeModal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// ==========================================================================
// Initialize on DOM Load
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initialized successfully');

    // Add fade-in to body
    gsap.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
});
