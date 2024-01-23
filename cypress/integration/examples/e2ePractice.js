describe("Practice Test", () => {

    var prdlist = []

    it("Test One", () => {

        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')


        cy.fixture('practice').then(prodata => {
            prdlist = prodata.productdata
            cy.log(prdlist)
            for (let index = 0; index < prdlist.length; index++) {
                const element = prdlist[index];

                cy.Addproduct(element)

            }
            
        })






        // cy.get('h4.card-title a').each(($cartitem, index, $listofvegetablesincart) => {

        //     var text = $cartitem.text()

        //     cy.log(text)

        //     if (text.includes('Samsung')) {
        //         cy.wait(4000)
        //         cy.get('.btn.btn-info').eq(index).then($addbtn => {

        //             cy.wrap($addbtn).click()
        //             cy.wait(2000)
        //             $addbtn.css('border', '3px solid black')

        //         })
        //     }
        // })
    })
})