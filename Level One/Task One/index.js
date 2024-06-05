/* Scroll Receal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.main-body ,.heading', { origin: 'top' });
ScrollReveal().reveal('.clients, .left-menu form, .clients img', { origin: 'bottom' });
ScrollReveal().reveal('.our-service p, .our-process img, .left-menu p, .icons, .board-directors img, .name p, .main-body p', { origin: 'left' });
ScrollReveal().reveal('.our-service img, .our-process p, .services-section p, .desc, .icon', { origin: 'right' });
