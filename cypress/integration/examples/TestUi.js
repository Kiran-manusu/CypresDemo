describe('Ui testing using cypress',()=>{

    it('Handling the Check box',()=>{
        //Single Check box
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        cy.get('#checkBoxOption3').check().should('be.checked').should('have.value','option3')
        // cy.get('#checkBoxOption3').uncheck().should('not.be.checked').should('have.value','option3')
        cy.wait(2000)

        //Multiple Checking
        cy.get("input[type='checkbox']").check(['option1','option2'])

        //Multiple checking 
        // cy.get("input[type='checkbox']").each(($element, index, $veglist)=>{

        //     var Checkname = $element.val()           
        //     if(Checkname.includes('option1') || Checkname.includes('option2')){
        //        cy.wrap($element).click()              
        //         cy.wait(2000)               
        //     }
        // })

        // Select Static dropdown
        cy.get('select').select('option1').should('have.value','option1')

         // Select Dynamic dropdown
         cy.get('#autocomplete').type('ind')
         cy.get('.ui-menu-item').each(($dymele, index, $list) =>{

            var dymelename = $dymele.find('div').text()
            cy.log(dymelename)

            if(dymelename===('India')){
                cy.wrap($dymele).click()
                cy.wait(2000)
            }
         })

         cy.get('#autocomplete').should('have.value','India').then($dynmicele =>{
            $dynmicele.css('border', '3px solid green')
            cy.wait(3000)
         })
        // select Radio button 
         cy.get('#radio-btn-example').find('input').each(($radio, index, $list) =>{
            var radioname = $radio.val()
            cy.log(radioname)
              if(radioname.includes('radio2')){
                cy.wrap($radio).click()
                cy.wait(2000)
            }
         })

    })

    
})