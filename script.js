const header = document.querySelector(".header");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})

const menulistLi = document.querySelectorAll(".menu-list li");

menulistLi.forEach(item => {
    item.addEventListener("click", () => {
        header.classList.remove("mobile-header");
        document.body.classList.remove("no-scroll");
    })
})

const headerBottom = document.querySelector(".header-bottom");
const headerContent = document.querySelector(".header-content");

if(window.innerWidth <= 950) {
    headerContent.style.top = `${headerBottom.offsetHeight + 160}px`;
}

// ------------------------------------swiper--------------------------------------------
const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'cube',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


const bannerSection = document.querySelector(".banner-section");
bannerSection.style.marginTop = `-${header.offsetHeight}px`;  

// -------------------------------------popup--------------------------------------
const popup = document.querySelector('.popup')
const popupShowBtns = document.querySelectorAll('.show-popup')
const closeFormBtn = document.querySelector('.close-form')

popupShowBtns.forEach(item => {
    item.addEventListener('click', () => {
        popup.classList.add('show-popup')
        document.body.classList.add('no-scroll')
    })
})

closeFormBtn.addEventListener('click', () => {
    popup.classList.remove('show-popup')
    document.body.classList.remove('no-scroll')
})

document.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('show-popup')
        document.body.classList.remove('no-scroll')
    }
});