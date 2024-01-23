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
import { eq } from 'cypress/types/lodash';
import Homepage from '../integration/PageObjects/Homepage';

export { }

Cypress.Commands.add('AssertionValue', (Actualvalue, Expectvalue) => {
    try {
        expect(Actualvalue).be().equal(Expectvalue)
        cy.log('Expected Value Matched.')
    }
    catch (error) {
        cy.log('Expected Value Not-Matched.')
    }

})

Cypress.Commands.add('setrandomvalue', () => {

    var random = Math.random().toString(36).substring(2, 14)
    return random
});


Cypress.Commands.add('RandGenderGen', () => {

    let gen = ['Male', 'Female']

    var gender = gen[Math.floor(Math.random() * gen.length)]

    return gender

})

Cypress.Commands.add('Addproduct', (Prodname) => {

    const home = new Homepage()

    cy.get('h4.card-title a').each(($cartitem, index, $listofvegetablesincart) => {

        var text = $cartitem.text()
        cy.log(text)

        if (text.includes(Prodname)) {
            cy.wait(4000)
            cy.get('.btn.btn-info').eq(index).then($addbtn => {

                cy.wrap($addbtn).scrollIntoView().click()
                cy.wait(2000)
                $addbtn.css('border', '3px solid black')
            })
        }
    })
})




