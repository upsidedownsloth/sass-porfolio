const menuBtn = document.querySelector('.menu-btn');
const hambugur = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item')

//menu now show originally
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    // if showMenu = false
    if (!showMenu) {
        //open class created in _menu
        hambugur.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        
    
        showMenu = true;
    }else{
        hambugur.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}