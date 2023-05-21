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
let menuFooter = document.querySelector('#footer-icon');
let footer = document.querySelector('footer');
let fnav = document.querySelector('.footer-navlist');

menuFooter.onclick = () =>{
footer.classList.toggle('open');
sr.reveal(fnav,{delay:0, origin:'left'});
}

//.klutzyboy-img js code to scroll origin right

//sr2.reveal('.klutzyboy-img',{delay:700,origin:'top'});

let languageSelector = document.querySelector('#language-selector');


languageSelector.addEventListener("change",function(){
  var selectedLanguage = languageSelector.value;
  if(selectedLanguage=='es'){
    //usar AJAX para cargar el contenido en espanol 
  }else if(selectedLanguage=='fr'){
    //usar AJAX para cargar el contenido en Frances
  }else if(selectedLanguage=='en'){
    //cargar contenido por defecto en ingles
  }
});