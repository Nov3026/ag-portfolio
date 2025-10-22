document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navDrawer = document.getElementById('nav-drawer');
    const closeIcon = document.getElementById('close-icon');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navDrawer.classList.toggle('active');
        closeIcon.style.display = navDrawer.classList.contains('active') ? 'block' : 'none';
    });

    closeIcon.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navDrawer.classList.remove('active');
        closeIcon.style.display = 'none';
    });
});


