const menu = document.getElementById('side-menu');
const overlay = document.getElementById('menu-overlay');
const body = document.body;

document.getElementById('menu-toggle').addEventListener('click', function () {
    menu.classList.remove('translate-x-full');
    menu.classList.add('translate-x-0');
    
    overlay.classList.remove('translate-x-full');
    overlay.classList.add('translate-x-0');

    body.classList.add('overflow-hidden');
});

document.getElementById('close-menu').addEventListener('click', function () {
    menu.classList.remove('translate-x-0');
    menu.classList.add('translate-x-full');
    
    overlay.classList.remove('translate-x-0');
    overlay.classList.add('translate-x-full');

    body.classList.remove('overflow-hidden');
});

overlay.addEventListener('click', function () {
    document.getElementById('close-menu').click();
});