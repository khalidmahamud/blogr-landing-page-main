const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const hamburgerIcon = document.querySelector('#hamburger-icon');
const closeIcon = document.querySelector('#close-icon');
const navLink = document.querySelectorAll('.navlinks')

menuToggleBtn.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        const parent = link.parentElement;
        const navLinkMenu = parent.querySelector('ul');

        navLinkMenu.classList.toggle('navlink-active');
        navLinkMenu.classList.toggle('h-0');
    });
});