/*
        Proof of concept for detecting mouse distance
        from an object from there css can make it bigger
let name = document.getElementById('name');

gitInfo = name.getBoundingClientRect();

document.addEventListener('mousemove', (event) => {
    let x = event.pageX;
    let y = event.pageY;

    let dx = x - gitInfo.left;
    let dy = y - gitInfo.top;

    dist = Math.max(0, 100 - Math.sqrt((dx*dx) + (dy*dy)));

    lg-heading.style.fontSize = '7rem';
    console.log(dist);
});*/


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

const nightBtn = document.getElementById('nice');
const mainPart = document.getElementById('home');

let showMenu = false;
let nightMode = true;

menuBtn.addEventListener('click', () => {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        
        showMenu = false;
    }
});

nightBtn.addEventListener('click', () => {
    if (!nightMode) {
        mainPart.classList.add('night');
        mainPart.classList.remove('day');
        nightBtn.className = "fas fa-lightbulb fa-2x";
        nightMode = !nightMode;
    } else {
        mainPart.classList.remove('night');
        mainPart.classList.add('day');
        nightBtn.className = "far fa-lightbulb fa-2x";
        nightMode = !nightMode;
    }
});