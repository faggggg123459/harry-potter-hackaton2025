document.addEventListener("DOMContentLoaded", () => {
  // Анімація заголовка при завантаженні
  const title = document.querySelector("h1");
  title.style.opacity = "0";
  setTimeout(() => {
    title.style.opacity = "1";
    title.style.transition =
      "opacity 1.5s ease-in-out, text-shadow 0.5s ease-in-out";
    title.style.textShadow = "0px 0px 30px #A020F0";
  }, 500);

  // Анімоване появлення розділів
  const sections = document.querySelectorAll(".magic-title");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition =
        "opacity 1s ease-in-out, transform 0.8s ease-in-out";
    }, 800 * (index + 1));
  });

  // Анімація картинок при завантаженні
  const images = document.querySelectorAll(
    ".catalog-item img, .character-card img"
  );
  images.forEach((img) => {
    img.style.opacity = "0";
    img.style.transform = "scale(0.9)";
    setTimeout(() => {
      img.style.opacity = "1";
      img.style.transform = "scale(1)";
      img.style.transition =
        "opacity 1.2s ease-in-out, transform 0.8s ease-in-out";
    }, 1200);
  });

  // Магічні частинки позаду каталогу
  const catalogItems = document.querySelectorAll(
    ".catalog-item, .character-card"
  );
  catalogItems.forEach((item) => {
    const particlesContainer = document.createElement("div");
    particlesContainer.className = "particles-container";
    item.insertBefore(particlesContainer, item.firstChild); // Додаємо частинки позаду каталогу

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = "magic-particle";
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      particlesContainer.appendChild(particle);
    }
  });

  animateParticles();
});

// Анімація руху частинок магії позаду каталогу
function animateParticles() {
  setInterval(() => {
    const particles = document.querySelectorAll(".magic-particle");
    particles.forEach((particle) => {
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = `${Math.random() * 0.5 + 0.5}`;
      particle.style.transition = "6s ease-in-out";
    });
  }, 5000);
}
