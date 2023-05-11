const customCursor = document.querySelector('.custom-cursor') as HTMLDivElement;
const title = document.querySelector('h1') as HTMLHeadingElement;
const subTitle = document.querySelector('p') as HTMLParagraphElement;
const heroPushLink = document.querySelector('.hero-push-link') as HTMLAnchorElement;
const discoverImg = document.querySelector('.discover-img') as HTMLDivElement;
const contactBtn = document.querySelector('.contact-btn') as HTMLAnchorElement;
const h2s = [...document.querySelectorAll('h2')];
const h3s = [...document.querySelectorAll('h3')];
const paragraphes = [...document.querySelectorAll('.section-subtitle')];
const modelItems = [...document.querySelectorAll('.model-item')];
const elementsToAnimate = [...h2s, ...h3s, ...paragraphes, ...modelItems, discoverImg, contactBtn];

const titleTxt: string =  'Porshe, set free.';

const observerObj = {
    root: null,
    rootMagin: '0px',
    threshold: 1.0
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('active');
            console.log(entry.target);
        }
    })
}, observerObj);

elementsToAnimate.forEach(element=>{
    observer.observe(element);
    console.log(element);
})

window.addEventListener('mousemove', handleCustomCursor);

function handleCustomCursor(e: MouseEvent){
    customCursor.style.left = `${e.clientX.toString()}px`;
    customCursor.style.top = `${e.clientY.toString()}px`;
}

function typewritter(txt: string, index: number){
    if(index == 3) subTitle.classList.add('active');
    if(index == 6) heroPushLink.classList.add('active')
    setTimeout(() => {
        if(index < txt.length)
            title.innerHTML += `<span>${txt[index]}</span>`;
            typewritter(titleTxt, index + 1)
    }, 150);
}

setTimeout(()=>typewritter(titleTxt, 0), 300);