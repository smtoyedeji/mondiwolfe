//Hamburger Menu
const menuBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-container");
const body = document.querySelector("body");


menuBtn.addEventListener("click", function() {
    menu.classList.toggle("change");
    menuBtn.classList.toggle("active");
    body.classList.toggle("overflow");
    
});

//Sticky header
const nav = document.querySelector('#nav');
const socialIcons = document.querySelector('#social-media-icons')
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('sticky');
    socialIcons.style.display ="none"
  } else {
    nav.classList.remove('sticky');
    socialIcons.style.display ="block"    
  }
}
window.addEventListener('scroll', fixedNav);

//Create lightbox
//Create html element for lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

//select all images for lightbox
const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img);
        
    })
})

//add eventlistener for image click
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active')
})