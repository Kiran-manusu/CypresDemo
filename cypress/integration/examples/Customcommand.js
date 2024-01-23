
/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

describe('Angular Demo Website',()=>{

    it('First Demo Practice Page',()=>{
        
       cy.setrandomvalue().then((value)=>{
        cy.log(value)

       })

       cy.RandGenderGen().then(gender=>{
        cy.log(gender)
       })
        
        
    })
   
})