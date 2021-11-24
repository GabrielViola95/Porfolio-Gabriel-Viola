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
// home

sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 400})
sr.reveal('.home__social-icon',{delay: 600})
sr.reveal('.button',{interval: 200})

// botón switch
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active-mode");
})