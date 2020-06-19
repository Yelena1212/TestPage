const {expect} = require('chai');

describe('REGISTRATION PAGE', () => {
    before(() => {
        browser.maximizeWindow();
        browser.url('https://stage.pasv.us/user/register');
    })
    it('should verify that Title is correct', function () {
        const actualText = $('//h1').getText();
        const expectedText = 'User Register';
        expect(actualText).eq(expectedText);

    });

    it('should submit button is not clickable', function () {
        const submitBtn = $('//button[@type="submit"]');
        const result = submitBtn.isClickable();
        expect(result).false;

    });

    it('should fill out first name field', function () {
        const firstNameField = $('//input[@name="firstName"]');
        firstNameField.setValue('Yelena');
        // const text = firstNameField.getValue();
        // expect(text).eq('Yelena');
    });

    it('should verify that first name field is valid', function () {
        const firstNameField = $('//input[@name="firstName"]');
        browser.keys('Tab');
        const result = firstNameField.getAttribute('class');
        expect(result).contain('is-valid');
        // console.log('----------------------');
        // console.log(result);
        // console.log('----------------------');

    });

    it('should fill out last name field', function () {
        const lastNameField = $('//input[@name="lastName"]');
        lastNameField.setValue('Baranchuk');
    });

    it('should verify that last name field is valid', function () {
        const lastNameField = $('//input[@name="lastName"]');
        browser.keys('Tab');
        const result = lastNameField.getAttribute('class');
        expect(result).contain('is-valid');

    });

    it('should fill out email name field', function () {
        const emailField = $('//input[@name=\'email\']')
        emailField.setValue('Baranchukyelena@gmail.com');
    });

    it('should verify that email field is valid', function () {
        const emailField = $('//input[@name=\'email\']')
        browser.keys('Tab');
        const result = emailField.getAttribute('class');
        expect(result).contain('is-valid');

    });

    it('should fill out password name field', function () {
        const passwordField = $('input[name="password"]');
        passwordField.setValue('1234567890ABC');
    });

    it('should verify that password field is valid', function () {
        const passwordField = $('input[name="password"]');
        browser.keys('Tab');
        const result = passwordField.getAttribute('class');
        expect(result).contain('is-valid');

    });

    it('should submit button is not clickable', function () {
        const submitBtn = browser.$('//button[@type="submit"]');
        const result = submitBtn.isClickable();
        expect(result).true;
        browser.pause(3000);

    });


})