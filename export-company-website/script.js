// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Universal navbar injection
    const navTemplate = `
    <nav class="nav-wrap">
      <div class="container nav-inner">
        <div class="brand">
          <img class="brand-logo" src="images/Arihant%20Global%20exports%20logo.png" alt="Arihant Global Exports logo">
          <div class="brand-text">
            <span class="brand-name">Arihant Global</span>
            <span class="brand-tag">Exports · Ahmedabad, India</span>
          </div>
        </div>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="products.html">Products</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <div class="nav-social">
          <a href="https://wa.me/917434988777" aria-label="WhatsApp" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 2.6 19.3L2 23l3.8-1a11.5 11.5 0 1 0 6.2-21.5Zm0 21a9.5 9.5 0 0 1-4.8-1.3l-.3-.2-2.3.6.6-2.3-.2-.3a9.5 9.5 0 1 1 6.9 3.5Zm5.4-7.2c-.3-.2-1.8-.9-2-.9s-.3-.1-.5.2-.6.9-.8 1c-.1.2-.3.2-.6.1a7.8 7.8 0 0 1-3.8-3.3c-.3-.5.4-.5.5-1.1 0-.1 0-.2-.1-.3l-1-2.4c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.8.3s-1 1-1 2.4 1 2.7 1.1 2.9a8.6 8.6 0 0 0 3.2 3 3.7 3.7 0 0 0 2.2.7 2 2 0 0 0 1.4-.6c.2-.3.6-.8.6-1s0-.2 0-.3-.3-.2-.6-.4Z"/></svg>
          </a>
          <a href="https://www.instagram.com/arihant.globalexports?igsh=MTUxc2VrZzAwcnByNQ==" aria-label="Instagram" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/arihant-global-exports/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1-.01 5 2.5 2.5 0 0 1 .01-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1a4.1 4.1 0 0 1 3.7-2c3.9 0 4.6 2.6 4.6 6v6.3h-4V15c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v6.1H10V9Z"/></svg>
          </a>
        </div>
        <a class="nav-cta" href="contact.html">Get In Touch</a>
      </div>
    </nav>`;
    const navMount = document.getElementById('nav');
    if (navMount) {
        navMount.outerHTML = navTemplate;
    }

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");

            // Ignore bare "#" links
            if (targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            // If the target exists on the page, smooth scroll; otherwise let the
            // browser handle the navigation (e.g., to another page).
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // Subtle animations on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // WhatsApp handoff for enquiry form
    const form = document.getElementById('inquiry');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(form);
            const parts = [
                '🌿 NEW ENQUIRY — Arihant Global Exports',
                '─────────────────────────────',
                `👤 Name: ${data.get('fullName') || '—'}`,
                `🏢 Company: ${data.get('company') || '—'}`,
                `📧 Email: ${data.get('email') || '—'}`,
                `📞 Phone: ${data.get('phone') || '—'}`,
                `🌍 Country: ${data.get('country') || '—'}`,
                '─────────────────────────────',
                `📦 Product Category: ${data.get('interest') || '—'}`,
                `🎯 Specific Product: ${data.get('message') || '—'}`,
            
                '─────────────────────────────',
                '💬 Additional Information:',
                `${data.get('message') || '—'}`,
                '─────────────────────────────',
                'Sent via Arihant Global Exports Website'
            ];
            const message = encodeURIComponent(parts.join('\n'));
            window.open(`https://wa.me/917434988777?text=${message}`, '_blank');
        });
    }
});
