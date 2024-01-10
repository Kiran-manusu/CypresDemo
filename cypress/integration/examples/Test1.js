/// <reference types="Cypress" />
describe('My First Suite',function(){

    it("My First test case ",function(){
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.product>.product-name').should('have.length','30')

        cy.get("input.search-keyword").type('ca').should('have.value','ca')
        cy.get("form>.search-button").click()
        cy.wait(3000)

        // To find the particular element
        cy.get('.products').find('.product').should('have.length', '4')
        // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        //each loop
        cy.get('.products').find('.product').each(($element, index, $veglist)=>{
            const vegname = $element.find('h4.product-name').text()
           
            if(vegname.includes('Cash') || vegname.includes('Carrot')  || vegname.includes('Cauli')){
               cy.wrap($element).find("button[type='button']").click()
                cy.log("########## Vegetabel Name is "+ vegname)
            }
            else{
                cy.log()
                cy.log("########## Vegetabel is not present !! ")
            }


        })

        // Handel Cypress promisess our own

        cy.get('.brand').then((elelogo)=>{
            cy.log(elelogo.text())

        })





        // const logo = cy.get('.brand').text()
        // cy.log(logo)

        // To fillter the invisible element
        // cy.get('.product:visible').should('have.length','4')

        // cy.get('.product>.product-name').should('have.length','1')

    })
})