// Parallax Effect
document.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset;
    // Adjust the speed factor (0.5 means half speed)
    const speed = 0.5;
    const body = document.body;

    // We can't easily move the background-image of body purely with JS properly for parallax without jitter.
    // A better approach is usually a fixed background or a separate div.
    // However, since we are using body::before for a clean CSS-only parallax or JS controlled, let's try a simple CSS variable approach if we were using a div.

    // BUT, for a simple background image on body, we can manipulate background-position-y.
    // Default center is 50%. We want to move it vertically.
    // Let's assume top alignment effectively for calculation:
    // body.style.backgroundPositionY = -(scrollPosition * speed) + 'px';

    // Since we want to use the existing structure without major HTML changes, let's use a pseudo-element on the body or a fixed div.
    // The previous instruction asked for pure CSS or simple JS. 
    // Let's go with the pseudo-element 'container' approach which leads to the smoothest result.
    // But since I cannot edit HTML to add a wrapper easily without risk, let's stick to the ::before method in CSS + JS update? 
    // Actually, simply using `background-attachment: fixed` IS the standard "don't move" (0 speed). 
    // "Slower scroll" implies moving, but slower.

    // Let's use the specific parallax background element we just created in CSS
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrollPosition * speed}px)`;
    }
});
