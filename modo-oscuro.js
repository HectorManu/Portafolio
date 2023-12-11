document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('toggleTheme');
    const body = document.body;

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });

    // Verifica el tema almacenado en localStorage al cargar la página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme + '-mode');
    }
});
