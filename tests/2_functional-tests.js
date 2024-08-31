const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');
const translate_url = "/api/translate";
chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test("Translation with text and locale fields: POST request to '/api/translate'", (done) => {
        chai.request(server)
        .post(translate_url)
        .send({
            text: "Paracetamol takes up to an hour to work.",
            locale: "british-to-american"
        })
        .end((err,res) => {
            assert.equal(res.status,200);
            assert.deepEqual(
                res.body.text,"Paracetamol takes up to an hour to work.",
                res.body.locale,"british-to-american",
                res.body.translation,'<span class="highlight">Tylenol</span> takes up to an hour to work.');
            done();
        });
    });
    test("Translation with text and invalid locale field: POST request to '/api/translate'", (done) => {
        chai.request(server)
        .post(translate_url)
        .send({
            text: "Paracetamol takes up to an hour to work.",
            locale: "british-to-spanish"
        })
        .end((err,res) => {
            assert.equal(res.status,200);
            assert.equal(res.body.error,'Invalid value for locale field');
            done();
        });
    });
    test("Translation with missing locale field: POST request to '/api/translate'", (done) => {
        chai.request(server)
        .post(translate_url)
        .send({
            text: "Paracetamol takes up to an hour to work.",
            locale: undefined
        })
        .end((err,res) => {
            assert.equal(res.status,200);
            assert.equal(res.body.error,'Required field(s) missing');
            done();
        });
    });
    test("Translation with missing text field: POST request to '/api/translate'", (done) => {
        chai.request(server)
        .post(translate_url)
        .send({
            text: undefined,
            locale: "british-to-american"
        })
        .end((err,res) => {
            assert.equal(res.status,200);
            assert.equal(res.body.error,'Required field(s) missing');
            done();
        });
    });
    test("Translation with empty text: POST request to '/api/translate'", (done) => {
        chai.request(server)
        .post(translate_url)
        .send({
            text: "",
            locale: "british-to-american"
        })
        .end((err,res) => {
            assert.equal(res.status,200);
            assert.equal(res.body.error,'No text to translate');
            done();
        });
    });
    test("Translation with text that needs no translation: POST request to '/api/translate'", (done) => {
        chai.request(server)
        .post(translate_url)
        .send({
            text: "Paracetamol takes up to an hour to work.",
            locale: "american-to-british"
        })
        .end((err,res) => {
            assert.equal(res.status,200);
            assert.deepEqual(
                res.body.text,"Paracetamol takes up to an hour to work.",
                res.body.locale,"american-to-british",
                res.body.translation,'Everything looks good to me!');
            done();
        });
    });
});
