// MENU

const header = document.querySelector('.navbar__menu');  
const dropdownMenu = document.querySelector('.dropdown');
const overlay = document.querySelector('.overlay');
const hero = document.querySelector('.hero');

const visible = (e, obj, obj2, style) => {
    e = e.currentTarget;
    if (obj.classList.contains(style)) {
        obj.classList.remove(style);
        obj2.classList.remove(style);
    } else {
        obj.classList.add(style);
        obj2.classList.add(style);
    }
}

const backOpacity = (obj, obj2, style) => {
    if (obj.classList.contains(style)) {
        obj.classList.remove(style);
        obj2.classList.remove(style);
    } else {
        obj.classList.add(style);
        obj2.classList.add(style);
    }
}

header.addEventListener('click', (e) => {
    visible(e, overlay, dropdownMenu, 'menu_show');
    backOpacity(hero, header, 'backHide');
})

dropdownMenu.addEventListener('click', (e) => {
    visible(e, overlay, dropdownMenu, 'menu_show');
    backOpacity(hero, header, 'backHide');
})


const mainSection = document.querySelector('.main');

mainSection.addEventListener('mouseover', (e) => {
    let back = e.target;
    let parentBack = back.parentNode;

    if (parentBack.classList.contains('background_hide')) {
        parentBack.classList.remove('background_hide'); 
    } else {
        parentBack.classList.add('background_hide'); 
    }
})

mainSection.addEventListener('mouseout', (e) => {
    let back = e.target;
    let parentBack = back.parentNode;

    if (parentBack.classList.contains('background_hide')) {
        parentBack.classList.remove('background_hide'); 
    } else {
        parentBack.classList.add('background_hide'); 
    }
})