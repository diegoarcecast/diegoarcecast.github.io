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
