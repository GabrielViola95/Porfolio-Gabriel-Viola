// MENU SHOW

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle("show")
        })
    }
}
showMenu("nav-toggle","nav-menu");

// Active and Remove Menu

const navLink = document.querySelectorAll(`.nav__link`)

function linkAction(){
    navLink.forEach(n => n.classList.remove(`active`))
    this.classList.add(`active`)

    // remover menu show
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove("show")
}

navLink.forEach(n => n.addEventListener(`click`, linkAction))

// scroll reveal animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
// home reveal

sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 400})
sr.reveal('.home__social-icon',{delay: 600})
sr.reveal('.button',{interval: 200})

// Acerca de reveal

sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})

// habilidades reveal

sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{delay: 200})
sr.reveal('.skills__img',{delay: 400})

// proyectos reveal

sr.reveal('.work__img',{delay: 200})

sr.reveal('.contact__input',{delay: 200})

// botón switch
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active-mode");
})

// video


let vid = document.getElementById('video1')

vid.addEventListener("mouseover", ()=>{
    vid.autoplay = "true";
    vid.load();
})

vid.addEventListener("mouseout", ()=>{
    vid.autoplay = "";
    vid.load();
})

let vid2 = document.getElementById('video2')

vid2.addEventListener("mouseover", ()=>{
    vid2.autoplay = "true";
    vid2.load();
})

vid2.addEventListener("mouseout", ()=>{
    vid2.autoplay = "";
    vid2.load();
})

let vid3 = document.getElementById('video3')

vid3.addEventListener("mouseover", ()=>{
    vid3.autoplay = "true";
    vid3.load();
})

vid3.addEventListener("mouseout", ()=>{
    vid3.autoplay = "";
    vid3.load();
})

let vid4 = document.getElementById('video4')

vid4.addEventListener("mouseover", ()=>{
    vid4.autoplay = "true";
    vid4.load();
})

vid4.addEventListener("mouseout", ()=>{
    vid4.autoplay = "";
    vid4.load();
})