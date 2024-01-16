document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('hidden');
    });

    // Scroll suave al hacer clic en un enlace del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Función para cambiar entre modos claro y oscuro
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
