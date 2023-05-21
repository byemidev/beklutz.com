let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};
//scroll instance
const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});
//apply scroll for .klutzyboy-text
sr.reveal('.klutzyboy-text',{delay:200, origin:'top'});

//footer js hidden show 
let scrollDown = document.querySelector('.scroll-down');
let footer = document.querySelector('footer');
let fnav = document.querySelector('.footer-navlist');

scrollDown.onclick = () =>{
footer.style.display = "block";
fnav.style.display = "flex";
}

//.klutzyboy-img js code to scroll origin right