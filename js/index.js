let menuicon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuicon.onclick=()=>{
    menuicon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
    
    
}
let sections=document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header nav a');


window.onscroll=()=>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset=sec.offsetTop -150;
        let height=sec.offsetHeight;   
let id=sec.getAttribute('id');
if (top >=offset && top < offset + height){
navlinks.forEach(links => {
    links.classList.remove("active");
    document.querySelector('header nav a[href*='+id+']').classList.remove("active");
})
}
    })
    menuicon.classList.remove("fa-xmark");
    navbar.classList.remove("active")
}

ScrollReveal({
    distance:"80px",
    duration:1500,
    delay:150
}
);

ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.home-img ,.services-container,.portfolio-container,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.aboutimg',{origin:'left'})
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'})



var typed = new Typed('#text', {
    strings:["Frontend Developer","Video Editor"],
    typeSpeed:70,
    backspeed:70,
    loop:true
  });