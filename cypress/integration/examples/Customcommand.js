
/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

describe('Angular Demo Website',()=>{

    it('First Demo Practice Page',()=>{
        
       var name = cy.set_typeCarName()
        cy.log(name)
        
    })
   
})