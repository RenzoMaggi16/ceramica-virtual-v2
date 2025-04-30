
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.querySelectorAll('.subsection-title').forEach(title => {
  title.addEventListener('click', () => {
    // Alternamos active en el título
    title.classList.toggle('active');

    // Buscamos el contenedor padre (.subsection-block)
    const block = title.closest('.subsection-block');
    if (block) {
      block.classList.toggle('open');
    }
  });
});
 // Efecto de escritura (mejorado con verificación de elemento)
 const initTypingEffect = () => {
  const typingElement = document.querySelector('.typing-animation');
  if(typingElement) {
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
      // Delay inicial para sincronizar con otras animaciones
      setTimeout(typeWriter, 500);
  }
};
initTypingEffect();