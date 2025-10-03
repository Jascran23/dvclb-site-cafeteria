const btnIconMobile = document.querySelector('.icon-menu-list');
const menuList = document.getElementById('navbar-mobile');


btnIconMobile.addEventListener(('click'), ()=> {
    if(menuList.style.display == 'none'){
        menuList.style.display = 'block';
    }
    else {menuList.style.display = 'none';}
    
})