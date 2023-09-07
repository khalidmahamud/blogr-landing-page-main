const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const hamburgerIcon = document.querySelector('#hamburger-icon');
const closeIcon = document.querySelector('#close-icon');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.navlinks');

let currentlyOpenNavLinkMenu = null;

menuToggleBtn.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('hidden');
    navMenu.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        const parent = link.parentElement;
        const arrowIcon = parent.querySelector('a > picture')
        const navLinkMenu = parent.querySelector('ul');

        // If the clicked link is the same as the currently open one, close it.
        if (navLinkMenu === currentlyOpenNavLinkMenu) {
            //select the paernt of currently open navLinkMeny
            const parent = currentlyOpenNavLinkMenu.parentElement;
            //select the arrow of currently open navLinkMeny
            const currentArrowIcon = parent.querySelector('a > picture')

            navLinkMenu.classList.remove('navlink-active');
            navLinkMenu.classList.add('h-0');
            currentArrowIcon.classList.remove('rotate-180');

            currentlyOpenNavLinkMenu = null; // Reset the currently open menu
        } else {
            // Close the currently open menu if one exists.
            if (currentlyOpenNavLinkMenu) {
                //select the parent of currently open navLinkMeny
                const parent = currentlyOpenNavLinkMenu.parentElement;
                //select the arrow of currently open navLinkMeny
                const currentArrowIcon = parent.querySelector('a > picture')

                currentlyOpenNavLinkMenu.classList.remove('navlink-active');
                currentlyOpenNavLinkMenu.classList.add('h-0');
                currentArrowIcon.classList.remove('rotate-180');
            }
            
            // Open the clicked navLinkMenu.
            navLinkMenu.classList.add('navlink-active');
            navLinkMenu.classList.remove('h-0');
            arrowIcon.classList.add('rotate-180');
            
            // Set the new currently open navLinkMenu.
            currentlyOpenNavLinkMenu = navLinkMenu;
        }
    });
});
