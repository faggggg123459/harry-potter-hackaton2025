document.addEventListener("DOMContentLoaded", () => {
    // Створення магічних частинок
    const particlesContainer = document.querySelector(".particles-container");

    for (let i = 0; i < 80; i++) {
        const particle = document.createElement("div");
        particle.className = "magic-particle";
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.left = `${Math.random() * 100}vw`;
        particlesContainer.appendChild(particle);
    }

    animateParticles();

    // Виправлення бічної смуги
    document.body.style.overflowX = "hidden";
});

// Анімація руху частинок
function animateParticles() {
    setInterval(() => {
        const particles = document.querySelectorAll(".magic-particle");
        particles.forEach(particle => {
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.opacity = `${Math.random() * 0.5 + 0.5}`;
            particle.style.transition = "6s ease-in-out";
        });
    }, 5000);
}
