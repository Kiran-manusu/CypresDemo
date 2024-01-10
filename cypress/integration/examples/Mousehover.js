/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

describe('Mouse Hover Example',()=>{

    before(()=>{
        cy.log("Enter Before the iFrame Examples ")
    })
    after(()=>{
        cy.log("Enter After the iFrame Examples ")
    })


    // it('Mousehover',()=>{
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
    //     cy.get('#mousehover').invoke('show')
    //     cy.get('div.mouse-hover-content').find('a').contains('Top').click({force:true})
        
    //     cy.url().should('include','top')

    // })

    it("IFrame Example",()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        cy.frameLoaded("iframe[name='iframe-name']")
        cy.iframe().find('ul.navigation.clearfix li').find('a').contains('Mentorship').click()
        
        cy.wait(2000)
        cy.iframe().find('div.bg-pattern-1 h1').should('have.length',2)
        cy.iframe().find('div.bg-pattern-1 h1').contains('BRONZE')
        
        // cy.iframe().find('div.bg-pattern-1 h1').each(($element, index ,$list)=>{
        //     var name = $element.text()
        //     cy.log(name)
        //     })
        cy.wait(2000)

        // cy.frameLoaded('#courses-iframe')
        // cy.iframe().find('.main-menu div ul li a').contains('Mentorship').click()

    })
})