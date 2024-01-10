/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

describe('Angular Demo Website',()=>{
    let multipledata
          
          before(()=>{
          cy.log('Enter Before the Angular Website Practice Page')
          cy.fixture('example').its('data').then(function(data){
            multipledata=data
            // return data1          
              })
  
          })
        
       it('First Demo Practice Page',()=>{
          cy.visit('https://rahulshettyacademy.com/angularpractice/')

          cy.login().type(text)

        //   Creating Random Generetor Name

        //   cy.get('div.form-group input[name="name"]').type(userID_Alpha())
        //   function userID_Alpha() {
        //     var text = "";
        //      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
        //      for (var i = 0; i < 10; i++)
        //      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
        //      return text;}
        
        multipledata.forEach(data2 => {    
            
            // Validate the Length
            cy.get('div.form-group input[name="name"]').should('have.attr','minlength','2')
  
          cy.get('div.form-group input[name="name"]').type(data2.name)
          
          cy.get('div.form-group input[name="email"]').type(data2.email)
          
          cy.get('#exampleInputPassword1').type(data2.password)
          
          cy.get('#exampleCheck1').check()
          
          cy.get('#exampleFormControlSelect1').select(data2.gender)
          
          cy.get('#inlineRadio1').check()
          
          cy.get('input[name="bday"]').type(data2.dob)
          
          cy.get('input[value="Submit"]').click()
         
          cy.get('.alert').contains('Success')

          
            // Validate the Name is Presenting or not
            cy.get("h4 input[name='name']").should('contain.value',data2.name)

            // Validate the Min Length using invoke
            cy.get('div.form-group input[name="name"]').invoke('attr', 'minlength').should('contain', 2)
            
            // Validate the element is disabled
            cy.get('#inlineRadio3').should('be.disabled')
            cy.get('#inlineRadio2').should('not.be.disabled')

            cy.wait(3000)
            cy.reload()
        })
        
    });
  
        after(()=>{
          cy.log('Enter After the Angular Website Practice Page')
          })
  
      
  })