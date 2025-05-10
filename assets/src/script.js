document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll
    const header = document.querySelector('.header');
    const updateHeader = () => {
        header.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Inicializar estado

    // Animaciones con Intersection Observer (versión mejorada)
    const animateOnScroll = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Animación slide-up
                    if(element.classList.contains('slide-up')) {
                        element.classList.add('active');
                    }
                    
                    // Animación fade-in
                    if(element.classList.contains('fade-in')) {
                        element.classList.add('active');
                    }
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px' // Activa la animación 50px antes del borde
        });

        // Configurar elementos observados
        document.querySelectorAll('.slide-up, .fade-in').forEach(el => {
            observer.observe(el);
        });
    };

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

    // Menú móvil (versión mejorada con cierre al hacer click fuera)
    const initMobileMenu = () => {
        const menuButton = document.querySelector('.header-menu-mobile');
        const nav = document.querySelector('.header-nav');
        
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

    // Inicializar todo
    animateOnScroll();
    initTypingEffect();
    initMobileMenu();

    // Resetear animaciones al recargar
    window.onbeforeunload = () => {
        window.scrollTo(0, 0);
    };
});