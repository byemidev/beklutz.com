/**
 * traducir textos mediante 
 * esta funcion usando deepl-node api ?
 * o pedir al navegador?
*/
const languageSelector = document.querySelector('#language-selector');
let languageSelected = 'none';
languageSelected = languageSelector.addEventListener('change', (e) =>{
  console.log(languageSelected=(e.target.value));
  let uri = `../src/languages/${languageSelected}.json`;

  console.log(uri);

  fetch(uri)
     .then(res => res.json())
     .then(data => {
       document.querySelector('.contentToChange').textContent = data.content.p;
     })
       .catch(err => {  
       console.log('catch**************' + err);
       });
});



  