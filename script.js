
    // Année dynamique
    document.getElementById('y').textContent = new Date().getFullYear();

    // Menu mobile toggle
    const menuBtn = document.getElementById('menu');
    const mobile = document.getElementById('mobile');
    menuBtn?.addEventListener('click', () => {
      const open = mobile.classList.toggle('show');
      mobile.hidden = !open;
      menuBtn.setAttribute('aria-expanded', String(open));
    });

    // Thème clair/sombre
    const themeBtn = document.getElementById('theme');
    themeBtn?.addEventListener('click', () => {
      document.documentElement.classList.toggle('light');
      localStorage.setItem('prefersLight', document.documentElement.classList.contains('light'));
    });
    // Persistance du thème
    if(localStorage.getItem('prefersLight') === 'true'){
      document.documentElement.classList.add('light');
    }
