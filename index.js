const aboutNav = document.querySelector('.about-nav');
const productNav = document.querySelector('.product-nav');
const impactNav = document.querySelector('.impact-nav');
const aboutDrop = document.querySelector('.about-drop');
const productDrop = document.querySelector('.product-drop');
const impactDrop = document.querySelector('.impact-drop');



const navDropDown = function(navItem, dropItem) {
    navItem.addEventListener('mouseenter', (e) => {
        dropItem.style.display = 'block';
    })
    navItem.addEventListener('mouseleave', (e) => {
        dropItem.style.display = 'none';
    })
}

navDropDown(aboutNav, aboutDrop);
navDropDown(productNav, productDrop);
navDropDown(impactNav, impactDrop);