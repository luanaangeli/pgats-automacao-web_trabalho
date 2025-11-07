import { faker } from '@faker-js/faker'
import { getRandomEmail } from '../../support/helpers'

class Login{
    preencherFormularioDePreCadastro() {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()

        cy.get('.shop-menu > .nav > :nth-child(4) > a ').click()
        cy.wait(1000)
        cy.get('[data-qa="signup-name"]').type(`${firstName} ${lastName}`)
        cy.get('[data-qa="signup-email"]').type(getRandomEmail())
           
        cy.contains('button', 'Signup').click()
    }

    preencherFormularioDeLogin(user, pass){
       cy.get('.shop-menu > .nav > :nth-child(4) > a ').click()
       cy.wait(1000)
       cy.get(`[data-qa="login-email"]`).type(user)
       cy.get(`[data-qa="login-password"]`).type(pass)

       cy.get(`[data-qa="login-button"]`).click()
    }

    preencherFormularioDeLoginExistente(name, user){
       cy.get('.shop-menu > .nav > :nth-child(4) > a ').click()
       cy.wait(1000)
       cy.get(`[data-qa="signup-name"]`).type(name) //`QA Tester`
       cy.get(`[data-qa="signup-email"]`).type(user) //`qa-tester-1761782358212@test.com`

       cy.contains('button', 'Signup').click()
    }

}

export default new Login()