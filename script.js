// magic-effects.js

// === Canvas з частинками ===
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];
const colors = ["#ffffff", "#e0d0ff", "#ffd700"];

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speedY = Math.random() * 0.7 + 0.3;
  }
  update() {
    this.y += this.speedY;
    if (this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 8;
    ctx.fill();
  }
}

function createParticles() {
  for (let i = 0; i < 200; i++) {
    particles.push(new Particle());
  }
}
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

createParticles();
animateParticles();

// === Зірки ===
const stars = document.querySelector(".stars");
for (let i = 0; i < 150; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.width = "2px";
  star.style.height = "2px";
  star.style.background = "#fff";
  star.style.position = "absolute";
  star.style.borderRadius = "50%";
  star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`;
  stars.appendChild(star);
}

// === Туман ===
const fog = document.querySelector(".fog");
for (let i = 0; i < 3; i++) {
  const fogLayer = document.createElement("div");
  fogLayer.classList.add("fog-layer");
  fogLayer.style.animationDelay = `${i * 3}s`;
  fog.appendChild(fogLayer);
}

// === Завантаження ===
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.add("loaded");
    }, 1000);
  }, 5000); // Завантаження точно 5 сек
});

