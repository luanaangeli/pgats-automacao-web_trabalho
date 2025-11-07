class Menu{
    navegarParaLogin() {
        cy.get('a[href="/login"]').click()
    } 

    efetuarLogout() {
        cy.get(`a[href="/logout"]`).should(`be.visible`).click()        
    }

    navegarParaContactUs(){
      
        cy.get('a[href*=contact]').click()
        
    }

    navegarParaProdutos(){
        //cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('a[href="/products"]').click()
    }


}


export default new Menu()
