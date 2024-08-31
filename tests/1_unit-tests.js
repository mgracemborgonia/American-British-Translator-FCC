const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {
  suite("Translate American English to British English", () => {
    test("Translate 'Mangoes are my favorite fruit.' to British English", (done) => {
      let translateSentence = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      assert.equal(translator.translateToBritEng('Mangoes are my favorite fruit.'), translateSentence);
      done();
    });
    test("Translate 'I ate yogurt for breakfast.' to British English", (done) => {
      let translateSentence = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.equal(translator.translateToBritEng('I ate yogurt for breakfast.'), translateSentence);
      done();
    });
    test("Translate 'We had a party at my friend\'s condo.' to British English", (done) => {
      let translateSentence = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
      assert.equal(translator.translateToBritEng("We had a party at my friend\'s condo."), translateSentence);
      done();
    });
    test("Translate 'Can you toss this in the trashcan for me?' to British English", (done) => {
      let translateSentence = 'Can you toss this in the <span class="highlight">bin</span> for me?';
      assert.equal(translator.translateToBritEng("Can you toss this in the trashcan for me?"), translateSentence);
      done();
    });
    test("Translate 'The parking lot was full.' to British English", (done) => {
      let translateSentence = 'The <span class="highlight">car park</span> was full.';
      assert.equal(translator.translateToBritEng("The parking lot was full."), translateSentence);
      done();
    });
    test("Translate 'Like a high tech Rube Goldberg machine.' to British English", (done) => {
      let translateSentence = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
      assert.equal(translator.translateToBritEng("Like a high tech Rube Goldberg machine."), translateSentence);
      done();
    });
    test("Translate 'To play hooky means to skip class or work.' to British English", (done) => {
      let translateSentence = 'To <span class="highlight">bunk off</span> means to skip class or work.';
      assert.equal(translator.translateToBritEng("To play hooky means to skip class or work."), translateSentence);
      done();
    });
    test("Translate 'No Mr. Bond, I expect you to die.' to British English", (done) => {
      let translateSentence = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
      assert.equal(translator.translateToBritEng("No Mr. Bond, I expect you to die."), translateSentence);
      done();
    });
    test("Translate 'Dr. Grosh will see you now.' to British English", (done) => {
      let translateSentence = '<span class="highlight">Dr</span> Grosh will see you now.';
      assert.equal(translator.translateToBritEng("Dr. Grosh will see you now."), translateSentence);
      done();
    });
    test("Translate 'Lunch is at 12:15 today.' to British English", (done) => {
      let translateSentence = 'Lunch is at <span class="highlight">12.15</span> today.';
      assert.equal(translator.translateToBritEng("Lunch is at 12:15 today."), translateSentence);
      done();
    });
  });
  suite("Translate British English to American English", () => {
    test("Translate 'We watched the footie match for a while.' to American English", (done) => {
      let translateSentence = 'We watched the <span class="highlight">soccer</span> match for a while.';
      assert.equal(translator.translateToAmerEng("We watched the footie match for a while."), translateSentence);
      done();
    });
    test("Translate 'Paracetamol takes up to an hour to work.' to American English", (done) => {
      let translateSentence = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      assert.equal(translator.translateToAmerEng("Paracetamol takes up to an hour to work."), translateSentence);
      done();
    });
    test("Translate 'First, caramelise the onions.' to American English", (done) => {
      let translateSentence = 'First, <span class="highlight">caramelize</span> the onions.';
      assert.equal(translator.translateToAmerEng("First, caramelise the onions."), translateSentence);
      done();
    });
    test("Translate 'I spent the bank holiday at the funfair.' to American English", (done) => {
      let translateSentence = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
      assert.equal(translator.translateToAmerEng("I spent the bank holiday at the funfair."), translateSentence);
      done();
    });
    test("Translate 'I had a bicky then went to the chippy.' to American English", (done) => {
      let translateSentence = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
      assert.equal(translator.translateToAmerEng("I had a bicky then went to the chippy."), translateSentence);
      done();
    });
    test("Translate 'I've just got bits and bobs in my bum bag.' to American English", (done) => {
      let translateSentence = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
      assert.equal(translator.translateToAmerEng("I've just got bits and bobs in my bum bag."), translateSentence);
      done();
    });
    test("Translate 'The car boot sale at Boxted Airfield was called off.' to American English", (done) => {
      let translateSentence = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
      assert.equal(translator.translateToAmerEng("The car boot sale at Boxted Airfield was called off."), translateSentence);
      done();
    });
    test("Translate 'Have you met Mrs Kalyani?' to American English", (done) => {
      let translateSentence = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
      assert.equal(translator.translateToAmerEng("Have you met Mrs Kalyani?"), translateSentence);
      done();
    });
    test("Translate 'Prof Joyner of King\'s College, London.' to American English", (done) => {
      let translateSentence = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
      assert.equal(translator.translateToAmerEng("Prof Joyner of King's College, London."), translateSentence);
      done();
    });
    test("Translate 'Tea time is usually around 4 or 4.30.' to American English", (done) => {
      let translateSentence = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
      assert.equal(translator.translateToAmerEng("Tea time is usually around 4 or 4.30."), translateSentence);
      done();
    });
  });
  suite("Highlight translation", () => {
    test("Highlight translation in 'Mangoes are my favorite fruit.'", (done) => {
      let translateSentence = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      assert.equal(translator.translateToBritEng('Mangoes are my favorite fruit.'), translateSentence);
      done();
    });
    test("Highlight translation in 'I ate yogurt for breakfast.'", (done) => {
      let translateSentence = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.equal(translator.translateToBritEng('I ate yogurt for breakfast.'), translateSentence);
      done();
    });
    test("Highlight translation in 'We watched the footie match for a while.'", (done) => {
      let translateSentence = 'We watched the <span class="highlight">soccer</span> match for a while.';
      assert.equal(translator.translateToAmerEng("We watched the footie match for a while."), translateSentence);
      done();
    });
    test("Highlight translation in 'Paracetamol takes up to an hour to work.'", (done) => {
      let translateSentence = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      assert.equal(translator.translateToAmerEng("Paracetamol takes up to an hour to work."), translateSentence);
      done();
    });
  });
});
