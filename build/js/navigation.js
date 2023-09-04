const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const hamburgerIcon = document.querySelector('#hamburger-icon');
const closeIcon = document.querySelector('#close-icon');

menuToggleBtn.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});