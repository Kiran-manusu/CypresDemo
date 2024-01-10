describe("Handeling the Alerts",()=>{

    it("Alert Handel",()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        cy.get('#alertbtn').click()
        cy.on('window:alert',(alert)=>{
            expect(alert).be.equal("Hello , share this practice page and share your knowledge")
        }) 
    })

    it("Windows Handel",()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        cy.get('#opentab').invoke('removeAttr','target').click()

        //Handel the another window with in the page

        cy.origin('https://www.qaclickacademy.com/',()=>{

        cy.get('#navbarSupportedContent').find('li.nav-item').contains('About us').click()
        cy.get('.mt-50 h2').should('contain','Welcome to QAClick Academy ')        
        
        // cy.get("#navbarSupportedContent a[href*='about']").click()
        // cy.get('.mt-50 h2').should('contain','Welcome to QAClick Academy ')

    })
})   
        
    })

