/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

describe('Angular Demo Website',()=>{
   let data1
        
        before(()=>{
        cy.log('Enter Before the Angular Website Practice Page')
        cy.fixture('example').then(function(data){
          data1=data
          // return data1          
            })

        })

     it('First Demo Practice Page',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('div.form-group input[name="name"]').type(data1.name)
        cy.wait(2000)
        cy.get('div.form-group input[name="email"]').type(data1.email)
        cy.wait(2000)
        cy.get('#exampleInputPassword1').type(data1.password)
        cy.wait(2000)
        cy.get('#exampleCheck1').check()
        cy.wait(2000)
        cy.get('#exampleFormControlSelect1').select(data1.gender)
        cy.wait(2000)
        cy.get('#inlineRadio1').check()
        cy.wait(2000)
        cy.get('input[name="bday"]').type(data1.dob)
        cy.wait(2000)
        cy.get('input[value="Submit"]').click()
        cy.wait(3000)
        cy.get('.alert').contains('Success')
      })

      after(()=>{
        cy.log('Enter After the Angular Website Practice Page')
        })

    
})