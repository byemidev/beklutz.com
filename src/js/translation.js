/**
 * traducir textos mediante 
 * esta funcion usando deepl-node api ?
 * o pedir al navegador?
*/
const languageSelector = document.querySelector('#language-selector');
const textToChange = document.querySelectorAll('[data-section]');
const txt = null;
languageSelector.addEventListener("change",(e) => {
  let i = e.target.value ;
  

  
  if(i == 'es'){
    console.log('hola');
  }else if(i == 'fr'){
    console.log('bagueteeee');
  }else if(i == 'en'){
    console.log('englishshssh');
  }else if (i == 'none'){
      console.log('naaaaaaaah');
  }
});





/**
 * @param {*} language 
const txtToChange = document.querySelectorAll("[data-section]");
 * 
const changeLanguage = async (language) => {
  const requestJson = await fetch(`../languages/${language}.json`);
  const txt = await requestJson.json();
  console.log(txt);
};

*/