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

const imageChange = document.getElementById('image-change');
const nextArrow = document.querySelector('.next-arrow');
const prevArrow = document.querySelector('.prev-arrow');
const darkGreen = '#022c22';
const midLightGreen = '#34d399';
const bub0 = document.querySelector('.bub0');
const bub1 = document.querySelector('.bub1');
const bub2 = document.querySelector('.bub2');
const bubbles = document.querySelectorAll('.bubble');
let imgNum = 0;
const imgArr = ["./images/image1.JPG", "./images/image2.JPG", "./images/image3.JPG"];

const bubbleColorChange = function() {
    if (imgNum === 0) {
        bub0.style.backgroundColor = darkGreen;
        bub1.style.backgroundColor = midLightGreen;
        bub2.style.backgroundColor = midLightGreen;
    } else if (imgNum === 1) {
        bub0.style.backgroundColor = midLightGreen;
        bub1.style.backgroundColor =  darkGreen;
        bub2.style.backgroundColor = midLightGreen;
    } else if (imgNum === 2) {
        bub0.style.backgroundColor = midLightGreen;
        bub1.style.backgroundColor = midLightGreen;
        bub2.style.backgroundColor = darkGreen;
    }
}

const changeImageOpacity = function (opacity) {
    imageChange.style.opacity = opacity;
}

const nextImg = function() {
    if (imgNum<imgArr.length-1) {
        imgNum += 1;
    } else {
        imgNum = 0;
    }

    changeImageOpacity(.2);
    imageChange.removeAttribute('src');
    imageChange.setAttribute('src', `${imgArr[imgNum]}`);

    bubbleColorChange();
    setTimeout(() => {
        changeImageOpacity(1);
    }, 500);
}

const prevImg = function() {
    if (imgNum>0) {
        imgNum -= 1;
    } else {
        imgNum = 2;
    }

    changeImageOpacity(.2);
    imageChange.removeAttribute('src');
    imageChange.setAttribute('src', `${imgArr[imgNum]}`);

    bubbleColorChange();
    setTimeout(() => {
        changeImageOpacity(1);
    }, 500);
}

const bubbleImgChange = function(event) {
    if (event.target.classList.contains('bubble')) {
        let bubbleBtn = event.target;
        let dataIndexNum = bubbleBtn.getAttribute('data-index');
        imgNum = parseInt(dataIndexNum);
    }
    
    changeImageOpacity(.2);
    imageChange.removeAttribute('src');
    imageChange.setAttribute('src', `${imgArr[imgNum]}`);
    bubbleColorChange();

    setTimeout(() => {
        changeImageOpacity(1);
    }, 500);
}




nextArrow.addEventListener('click', (e) => {
    nextImg();
});

prevArrow.addEventListener('click', (e) => {
    prevImg();
})

bubbles.forEach(bubble => {
    bubble.addEventListener('click',bubbleImgChange)
});

const autoTransition = function() {
    setTimeout(function() {
        nextImg();
        autoTransition();
    }, 5000);
}





navDropDown(aboutNav, aboutDrop);
navDropDown(productNav, productDrop);
navDropDown(impactNav, impactDrop);
autoTransition();