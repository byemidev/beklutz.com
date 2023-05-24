import * as deepl from 'deepl-node';
const authKey = "e7d2ed65-2493-083a-ed95-1ac031bdd094:fx"; // Replace with your key
/**
 * traducir textos mediante 
 * esta funcion usando deepl-node api ?
 * o pedir al navegador?
*/
const translator = new deepl.Translator(authKey);

let languageSelector = document.querySelector('#language-selector');
languageSelector.addEventListener("change",function(){

  var selectedLanguage = languageSelector.value;
  let p = document.querySelector('#node-translate-p > span');
  let fr = document.querySelector('#fr');
  if(selectedLanguage=='es'){
    let es = document.querySelector('#es');
    //code 
  }else if(selectedLanguage=='fr'){
    try{
      (async () => {
          const result = await translator.translateText(p, null, 'fr');
          fr.onclick = () =>{
            p.innerHTML = result.text;
          }
          })();
    }catch( error ){
        console.log('error')
    }
  }else if(selectedLanguage=='en'){
    //code
  }
});