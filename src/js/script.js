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
sr.reveal('.klutzyboy-text',{delay:210, origin:'top'});

//footer js hidden show 
let menuFooter = document.querySelector('#footer-icon');
let footer = document.querySelector('footer');
let fnav = document.querySelector('.footer-navlist');

menuFooter.onclick = () =>{
footer.classList.toggle('open');
}

//.klutzyboy-img js code to scroll origin right

//sr2.reveal('.klutzyboy-img',{delay:700,origin:'top'});