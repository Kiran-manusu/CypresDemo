describe('Handeling the Window table',()=>{
    // it('Window Table',function(){

    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
    //     cy.get("table[name='courses'] tr td:nth-child(2)").each(($courseele, index, $courselist)=>{
    //         var corname = $courseele.text()
    //         cy.log(corname)

    //         if(corname.includes('Python')){
    //             var name = $courseele.next().text()
    //             cy.log(name)
    //         }
    //     })   

    // })
    it('Window Table',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        cy.get(".tableFixHead tr td:nth-child(1)").each(($nameele, index, $courselist)=>{
            var fixname = $nameele.text()
            cy.log(fixname)

            if(fixname.includes('Smith')){
                // cy.get(".tableFixHead tr td:nth-child(1)").eq(index).next().next().next().then(($fixele)=>{
                //     var name = $fixele.text()
                //     cy.log(name)
                //     expect(name).equal('33')
                // })

                cy.get(".tableFixHead tr td:nth-child(1)").eq(index).next().next().next().should('have.text','33')
            }
        })
    })
})