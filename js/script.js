const animeNavBar = () => {
    const navBarButton = document.getElementById("navBarButton");
    const menuNavBar = document.getElementById("navbar-default");

    navBarButton.addEventListener('click',()=>{ 
        
        if (menuNavBar.classList.contains('hidden')) {

            menuNavBar.classList.remove('hidden');
        } else {
            menuNavBar.classList.add('hidden');
        }
    })
};
animeNavBar();