/**
 * traducir textos mediante 
 * esta funcion usando deepl-node api ?
 * o pedir al navegador?
*/
const languageSelector = document.querySelector('#language-selector');
let languageSelected = 'none';

languageSelected = languageSelector.addEventListener('change', (e) =>{
  console.log(languageSelected=(e.target.value));
  const uri = `../src/languages/${languageSelected}.json`;

  if(languageSelected =='none' || languageSelected == 'en'){
    document.location.reload();  
  }

  fetch(uri)
     .then(res => res.json())
     .then(data => {
       document.querySelector('.contentToChange').textContent = data.content.p;
       document.querySelector('.klutzyboy-text > h5').textContent = data.titles.h5;
       document.querySelector('.klutzyboy-text > h4').textContent = data.titles.h4;
       document.querySelector('.hello').textContent = data.navbar.hello;
       document.querySelector('.aboutUS').textContent = data.navbar.aboutUS;
     })
       .catch(err => {  
       console.log('catch**************' + err);
       });

  },[]);



  