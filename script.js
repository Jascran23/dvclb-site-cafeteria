const btnIconMobile = document.querySelector('.icon-menu-list');
const menuList = document.getElementById('navbar-mobile');
const navLinks = document.querySelectorAll('.list');

btnIconMobile.addEventListener(('click'), ()=> {
    if(menuList.style.display == 'none'){
        menuList.style.display = 'block';
        
    navLinks.forEach((link, index) => {  
        link.style.animation = `effectTranslate 2s ease forwards ${
        index / 7 + 0.1
        }s`;
    });

    navLinks.style.backgroundColor = 'red';
     
    }
    else {
        menuList.style.display = 'none'; 
        
        navLinks.forEach((link, index) => {         
                link.style = 'none';
            });
        }

})
