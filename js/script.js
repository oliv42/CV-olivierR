const animeNavBar = () => {
    const navBarButton = document.getElementById("navBarButton");
    const menuNavBar = document.getElementById("navbar-default");
    const navLinks = document.querySelectorAll("a[href^='#']");

    navBarButton.addEventListener('click',()=>{ 
        
        if (menuNavBar.classList.contains('hidden')) {

            menuNavBar.classList.remove('hidden');
        } else {
            menuNavBar.classList.add('hidden');
        }
    });

    navLinks.forEach(navlink => navlink.addEventListener('click',() => {menuNavBar.classList.add('hidden');}));

};
animeNavBar();