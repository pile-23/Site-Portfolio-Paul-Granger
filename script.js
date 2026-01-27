// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true, // Animation happens only once
        offset: 50
    });

    // EmailJS Initialization
    // IMPORTANT: Replace with your actual User ID / Public Key from EmailJS Dashboard
    emailjs.init("YOUR_PUBLIC_KEY"); // Placeholder

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const btnSubmit = this.querySelector('.btn-submit');
            const originalText = btnSubmit.innerHTML;

            // Show loading state
            btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            btnSubmit.disabled = true;

            // These IDs need to be customized
            const serviceID = 'YOUR_SERVICE_ID'; // Placeholder
            const templateID = 'YOUR_TEMPLATE_ID'; // Placeholder

            emailjs.sendForm(serviceID, templateID, this)
                .then(function () {
                    btnSubmit.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
                    btnSubmit.classList.add('success');
                    contactForm.reset();

                    setTimeout(() => {
                        btnSubmit.innerHTML = originalText;
                        btnSubmit.disabled = false;
                        btnSubmit.classList.remove('success');
                    }, 3000);
                }, function (error) {
                    console.error('FAILED...', error);
                    btnSubmit.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Erreur';
                    btnSubmit.classList.add('error');

                    alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou utiliser directement mon adresse email.');

                    setTimeout(() => {
                        btnSubmit.innerHTML = originalText;
                        btnSubmit.disabled = false;
                        btnSubmit.classList.remove('error');
                    }, 3000);
                });
        });
    }

    // Smooth scrolling for anchor links (fallback for older browsers often not needed but good for complete control)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
