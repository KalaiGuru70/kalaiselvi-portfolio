// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Typing effect for role =====
const roles = ['Web Developer', 'Full-Stack Developer', 'React Enthusiast', 'AI Explorer'];
const typedEl = document.getElementById('typedRole');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 85);
}
typeLoop();

// ===== Resume button placeholder handling =====
const resumeBtn = document.getElementById('resumeBtn');
resumeBtn.addEventListener('click', (e) => {
  if (resumeBtn.getAttribute('href') === '#') {
    e.preventDefault();
    alert('Add your resume PDF link to the "Download Resume" button in index.html (id="resumeBtn").');
  }
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();