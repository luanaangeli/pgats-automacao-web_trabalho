class Menu{
    navegarParaLogin() {
        cy.get('a[href="/login"]').click()
    } 

    efetuarLogout() {
        cy.get(`a[href="/logout"]`).should(`be.visible`).click()        
    }

    navegarParaContactUs(){
        cy.get('a[href*=contact]').click()
        //cy.get(`a[href="/contact_us"]`).click()
    }
}


export default new Menu()
