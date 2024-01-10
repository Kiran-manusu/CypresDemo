/// <reference types="Cypress" />
describe('My Practice Suite',function(){

    it("My Practice test case ",function(){
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get("input.search-keyword").type('ca').should('have.value','ca')
        cy.get("form>.search-button").click()
        cy.wait(3000)
        cy.get('.products').find('.product').each(($element, index, $veglist)=>{

            const vegname = $element.find('h4.product-name').text()
           
            if(vegname.includes('Cash') || vegname.includes('Carrot')){

               cy.wrap($element).find("button[type='button']").click()
               
                cy.log("########## Vegetabel Name is "+ vegname)
                cy.wait(2000)
               
            }
            else{
                    cy.log("########## Vegetabel is not present !! ")
            }
        })
        // cy.get('.cart-icon>img').click()
        cy.get('a.cart-icon').then($button => {
            $button.css('border', '1px solid red')
            cy.wrap($button).click()
          })   

        cy.get('div.cart-preview.active').find('.product-info').each(($cartelement, index, $veglist)=>{

             var cartitem = $cartelement.find('p.product-name').text() 

                cy.log("########## Vegetabel Name is "+ cartitem)

                if(cartitem.includes('Carrot')|| cartitem.includes('Cashews')){

                $cartelement.css('border' , '1px solid green')
    
                cy.log("Product added successfully to basket!!")
                }
                else{
                     cy.log("Product not added to the basket...")
                    }                    

            })

        cy.get('div.action-block button:visible').click()      

        cy.get('button').contains('Place Order').then($placeorder =>{
            $placeorder.css('border', '1px solid red')
            cy.wrap($placeorder).click()
        })

        cy.get('select').select('India')
        cy.get('.chkAgree').check().should('be.checked')
        cy.wait(1000)
        cy.get('button').contains('Proceed').click()
        cy.wait(3000)
           
        })
        


    })
