const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    translateToBritEng(text){
        this.translateInput(text);
        const wordAmericanSpelling = {...americanOnly, ...americanToBritishSpelling };
        const amerBritTitles = americanToBritishTitles;
        const translateBrit = this.translateTo(text, wordAmericanSpelling, amerBritTitles);
        return translateBrit;
    }
    translateToAmerEng(text){
        this.translateInput(text);
        const britishToAmericanSpelling = this.reverseObject(americanToBritishSpelling);
        const wordBritishSpelling = {...britishOnly, ...britishToAmericanSpelling };
        const britishToAmericanTitles = this.reverseObject(americanToBritishTitles);
        const britAmerTitles = britishToAmericanTitles;
        const translateAmer = this.translateTo(text, wordBritishSpelling, britAmerTitles);
        return translateAmer;
    }
    translateTo(text, wordSpelling, titles){
        let objTitles = Object.entries(titles);
        let objSpelling = Object.entries(wordSpelling);
        let toLowerCaseText = text.toLowerCase();
        let regexTime = /([1-9]|1[012]):[0-5][0-9]/gi;
        let translateTime = toLowerCaseText.match(regexTime);
        let regexTime2 = /([1-9]|1[012]).[0-5][0-9]/gi;
        let translateTime2 = toLowerCaseText.match(regexTime2);
        let translatedText = "";
        
        objTitles.map(([key, value]) => {
            let lowerCaseKey = toLowerCaseText.includes(key);
            if (lowerCaseKey) {
                let newRegex = new RegExp(key, "gi");
                let spanVal = value[0].toUpperCase() + value.slice(1);
                translatedText = text.replace(newRegex, `<span class="highlight">${spanVal}</span>`) || text;
            };
        });
        translatedText = translatedText || text;

        if (translateTime) {
            translateTime.map(time => {
                translatedText = translatedText.replace(time, `<span class="highlight">${time.replace(':', '.')}</span>`) || text;
            });
        };
        if (translateTime2) {
            translateTime2.map(time => {
                translatedText = translatedText.replace(time, `<span class="highlight">${time.replace('.', ':')}</span>`) || text;
            });
        };
        
        objSpelling.map(([key, value]) => {
            let newRegex = new RegExp(`\\b${key}\\b`, "gi");
            let regTest = newRegex.test(toLowerCaseText);
            if (regTest) { 
                translatedText = translatedText.replace(new RegExp(key, "gi"), `<span class="highlight">${value}</span>`) || text;
            };
        });
        if (!translatedText) {
            return text;
        }else{
            return translatedText;
        };
    };
    reverseObject(obj){
        let reverse =  Object.entries(obj);
        return reverse.reduce((acc, [key, value]) => {
            if (acc[value]) {            
                !Array.isArray(acc[value]) 
                ? acc[value] = [acc[value]] 
                : acc[value].push(key)               
            } else {
                acc[value] = key;
            }
            return acc;
        }, {});
    };
    translateInput(text) {
        if (typeof text !== 'string') {
            throw new Error('Input must be a string');
        }
        return typeof text;
    };
}

module.exports = Translator;
