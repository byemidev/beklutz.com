/**
 * traducir textos mediante 
 * esta funcion usando deepl-node api ?
 * o pedir al navegador?
*/
let languageSelector = document.querySelector('#language-selector');
languageSelector.addEventListener("change",function(){

  var selectedLanguage = languageSelector.value;
  let p = document.querySelector('#node-translate-p > span');
  let fr = document.querySelector('#fr');
  if(selectedLanguage=='es'){
    let es = document.querySelector('#es');
    //code 
  }else if(selectedLanguage=='fr'){
   
  }else if(selectedLanguage=='en'){
    //code
  }
});