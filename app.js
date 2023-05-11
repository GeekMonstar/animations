"use strict";
const customCursor = document.querySelector('.custom-cursor');
const title = document.querySelector('h1');
const subTitle = document.querySelector('p');
const heroPushLink = document.querySelector('.hero-push-link');
const discoverImg = document.querySelector('.discover-img');
const contactBtn = document.querySelector('.contact-btn');
const h2s = [...document.querySelectorAll('h2')];
const h3s = [...document.querySelectorAll('h3')];
const paragraphes = [...document.querySelectorAll('.section-subtitle')];
const modelItems = [...document.querySelectorAll('.model-item')];
const elementsToAnimate = [...h2s, ...h3s, ...paragraphes, ...modelItems, discoverImg, contactBtn];
const titleTxt = 'Porshe, set free.';
const observerObj = {
    root: null,
    rootMagin: '0px',
    threshold: 1.0
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            console.log(entry.target);
        }
    });
}, observerObj);
elementsToAnimate.forEach(element => {
    observer.observe(element);
    console.log(element);
});
window.addEventListener('mousemove', handleCustomCursor);
function handleCustomCursor(e) {
    customCursor.style.left = `${e.clientX.toString()}px`;
    customCursor.style.top = `${e.clientY.toString()}px`;
}
function typewritter(txt, index) {
    if (index == 3)
        subTitle.classList.add('active');
    if (index == 6)
        heroPushLink.classList.add('active');
    setTimeout(() => {
        if (index < txt.length)
            title.innerHTML += `<span>${txt[index]}</span>`;
        typewritter(titleTxt, index + 1);
    }, 150);
}
setTimeout(() => typewritter(titleTxt, 0), 300);
