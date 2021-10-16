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
    socialIcons.style.display ="none";
    nav.style.marginTop = 0;
  } else {
    nav.classList.remove('sticky');
    socialIcons.style.display ="block";
    nav.style.borderBottom = "none"   
  }
}
window.addEventListener('scroll', fixedNav);

//Animate elements
//select elements to animate
const scrollOffset = 100;
 
const scrollElement = document.querySelector(".js-scroll");
 
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}
 
const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}
 
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})