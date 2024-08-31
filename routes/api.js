'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
        let text = req.body.text;
        let locale = req.body.locale;
        let translation = "";
        if(locale === undefined || text === undefined){
          res.json({error: 'Required field(s) missing'});
          return;
        }
        
        if(!text){
          res.json({error: 'No text to translate'});
          return;
        } 
        
        if(locale === "american-to-british"){
          translation = translator.translateToBritEng(text);         
        }else if(locale === "british-to-american"){
          translation = translator.translateToAmerEng(text);  
        }else{
          res.json({error: 'Invalid value for locale field'});
          return;
        }
  
        if(text === translation){
          translation = "Everything looks good to me!"; 
        }
        return res.json({text: text, translation: translation}); 
      });
    });
};
