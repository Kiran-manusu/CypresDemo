// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe';

Cypress.Commands.add('AssertionValue', (Actualvalue, Expectvalue) => {
    try {
        expect(Actualvalue).be().equal(Expectvalue)
        cy.log('Expected Value Matched.')
    } 
    catch (error) {
        cy.log('Expected Value Not-Matched.')
    }
   
  })

  Cypress.Commands.add('set_typeCarName',() => {
    return cy.wrap(webnewsite.set_typeCarName()); //return the wrap and use in chain
    function userID_Alpha() {
        var text = "";
         var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

         for (var i = 0; i < 10; i++)
         text += possible.charAt(Math.floor(Math.random() * possible.length));

         return text;}
});



