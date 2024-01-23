class Homepage{

    getProductlist(){
       return cy.get('h4.card-title a')
    
        }
    
    getAddbtnlist(){
        return cy.get('.btn.btn-info')
    }
    
    }
    
    export default Homepage