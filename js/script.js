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

// const hamburger = document.getElementById('hamburger');
//   const closeIcon = document.getElementById('close-icon');
//   const navDrawer = document.getElementById('nav-drawer');

//   hamburger.addEventListener('click', () => {
//     navDrawer.classList.add('active');
//     hamburger.classList.add('active');
//     closeIcon.classList.add('active');
//   });

//   closeIcon.addEventListener('click', () => {
//     navDrawer.classList.remove('active');
//     hamburger.classList.remove('active');
//     closeIcon.classList.remove('active');
//   });
