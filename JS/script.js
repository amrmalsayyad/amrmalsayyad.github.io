/* scroll sections active link */
let sections = document.querySelectorAll("section");
let navlink = document.querySelectorAll("header nav a");

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset+height){
            navlink.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*="'+ id +'"]').classList.add('active');

            })
        }
    });
    /* Sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle("sticky",window.scrollY>100)
}
/* Scroll reveal */
const sr = ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });
  
sr.reveal('.home-content', { origin: 'top' });
sr.reveal('.heading', { origin: 'top' });
sr.reveal('.home-img', {origin: 'bottom'});
sr.reveal('.services-container', {origin: 'bottom'});
sr.reveal('.home-content h1' , { origin: 'left' })
sr.reveal('.about-img' , { origin: 'left' })
sr.reveal('.home-content p' , { origin: 'right' }) 
sr.reveal('.about-content',{origin:'right'}) 

/* typed js */
const typed = new Typed('.multiple-text' , {
    strings:['Comp. Sci. enthusiast','Polyglot 多种语言' , 'Fitness lover'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})
