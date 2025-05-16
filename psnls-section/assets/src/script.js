const initMobileMenu = () => {
  const menuButton = document.querySelector('.header-menu-mobile');
  const nav = document.querySelector('.header-nav');

  if (!menuButton || !nav) return;

  const toggleMenu = () => {
    nav.classList.toggle('active');
    menuButton.classList.toggle('open');
  };

  menuButton.addEventListener('click', toggleMenu);

  // Cerrar menú al hacer click fuera
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuButton.contains(e.target)) {
      nav.classList.remove('active');
      menuButton.classList.remove('open');
    }
  });
};

initMobileMenu(); // Aseguramos que se ejecute


// Scroll efecto en header
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Acordeón de preguntas
document.querySelectorAll('.subsection-title').forEach(title => {
  title.addEventListener('click', () => {
    title.classList.toggle('active');
    const block = title.closest('.subsection-block');
    if (block) {
      block.classList.toggle('open');
    }
  });
});

// Efecto de escritura (mejorado con verificación de elemento)
const initTypingEffect = () => {
  const typingElement = document.querySelector('.typing-animation');
  if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.width = 'fit-content';
    typingElement.style.borderRight = '2px solid #333';

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        typingElement.style.borderRight = 'none';
      }
    };
    setTimeout(typeWriter, 500);
  }
};

initTypingEffect();
