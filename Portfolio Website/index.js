let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(nav =>{
                nav.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            })
        } 

    })

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-left, h1, h2', { origin: 'top' })

ScrollReveal().reveal('.home-right', { origin: 'right' })

ScrollReveal().reveal('.about-left h3, .about-left p, .about-left a, .service-container, .portfolio-container, form' ,  { origin: 'bottom' })

ScrollReveal().reveal('.about-right', { origin: 'left' })

const typed = new Typed('.multiple-text',{
    strings : ['MERN Developer', 'Graphic Designer', 'Digital Marketer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});