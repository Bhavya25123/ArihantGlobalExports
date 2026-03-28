// script.js

document.addEventListener("DOMContentLoaded", function() {
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
});
