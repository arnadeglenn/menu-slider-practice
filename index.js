const aboutNav = document.querySelector('.about-nav');
const productNav = document.querySelector('.product-nav');
const impactNav = document.querySelector('.impact-nav');
const aboutDrop = document.querySelector('.about-drop');
const productDrop = document.querySelector('.product-drop');
const impactDrop = document.querySelector('.impact-drop');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');



const navDropDown = function(navItem, dropItem) {
    navItem.addEventListener('mouseenter', (e) => {
        dropItem.style.display = 'flex';
    })
    navItem.addEventListener('mouseleave', (e) => {
        dropItem.style.display = 'none';
    })
}

const hamburgerNav = function () {
    hamburger.addEventListener('click', (e) => {
        console.log('clicked')
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            nav.style.display = 'none';
            document.body.style.overflowY = 'visible';
        }
    })
}

if (window.innerWidth < 321) {
    hamburgerNav();
}



navDropDown(aboutNav, aboutDrop);
navDropDown(productNav, productDrop);
navDropDown(impactNav, impactDrop);