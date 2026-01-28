// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true, // Animation happens only once
        offset: 50
    });

    // Parallax Background Setup
    const parallaxBg = document.createElement('div');
    parallaxBg.classList.add('parallax-bg');
    document.body.prepend(parallaxBg);

    window.addEventListener('scroll', function () {
        const scrolled = window.scrollY;
        // Move background slower than scroll (parallax effect)
        // usage of negative value to move it up but slower than content
        parallaxBg.style.transform = `translateY(${-scrolled * 0.3}px)`;
    });

    // EmailJS Initialization
    // Check if emailjs is defined (it might not be loaded on all pages)
    if (typeof emailjs !== 'undefined') {
        emailjs.init("JCop6yM0v1HvhWI7k"); // Public Key
    }

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
            const serviceID = 'service_7pk5kag';
            const templateID = 'template_deosqpr';

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

                    alert('Une erreur est survenue lors de l\'envoi du message : ' + (error.text || JSON.stringify(error)) + '\n\nVeuillez vérifier vos identifiants EmailJS (Service ID, Template ID, Public Key) ou utiliser directement mon adresse email.');

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
    // Modal Logic
    const modal = document.getElementById('project-modal');
    if (modal) {
        const modalImg = document.getElementById('modal-img');
        const modalIcon = document.getElementById('modal-icon');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');
        const modalDetails = document.getElementById('modal-details');
        const modalTools = document.getElementById('modal-tools');
        const closeModal = document.querySelector('.close-modal');

        // Open Modal
        // Open Modal (Event Delegation)
        document.addEventListener('click', function (e) {
            const card = e.target.closest('.card');
            if (card && card.querySelector('.card-details')) {
                const iconHtml = card.querySelector('.card-icon').innerHTML;
                const title = card.querySelector('.card-title').innerText;
                const desc = card.querySelector('.card-desc').innerText;
                const detailsHtml = card.querySelector('.card-details').innerHTML;
                const toolsHtml = card.querySelector('.card-tools').innerHTML;
                const imageSrc = card.getAttribute('data-image');

                // Set content
                const modalImg = document.getElementById('modal-img');
                const modalBody = document.querySelector('.modal-body');

                if (imageSrc) {
                    modalImg.src = imageSrc;
                    modalImg.parentElement.style.display = 'block'; // Make sure container is clear
                } else {
                    modalImg.src = 'assets/default_project.png'; // Fallback
                    modalImg.parentElement.style.display = 'block';
                }

                // Clear background image that was used previously
                if (modalBody) modalBody.style.backgroundImage = 'none';

                modalIcon.innerHTML = iconHtml;
                modalTitle.innerText = title;
                modalDesc.innerText = desc;
                modalDetails.innerHTML = detailsHtml;
                modalTools.innerHTML = toolsHtml;

                modal.style.display = 'block';
                // Trigger reflow
                void modal.offsetWidth;
                modal.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevent scrolling background
            }
        });

        // Close Modal
        function hideModal() {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        }

        closeModal.addEventListener('click', hideModal);

        // Close on click outside
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                hideModal();
            }
        });

        // Close on Escape header
        document.addEventListener('keydown', function (event) {
            if (event.key === "Escape" && modal.classList.contains('show')) {
                hideModal();
            }
        });
    }
});
