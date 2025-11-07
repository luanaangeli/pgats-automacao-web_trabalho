import { faker } from '@faker-js/faker'
import { getRandomEmail } from '../../support/helpers'
//import userData from '../fixtures/example.json'
//import { getRandomNumber } from '../../support/helpers'

class Contato{

    preencherContactUs(name, email, subject, message) {

        cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
        cy.wait(1000)
        cy.get('[data-qa="name"]').type(name)
        cy.get('[data-qa="email"]').type(email)
        cy.get('[data-qa="subject"]').type(subject)
        cy.get('[data-qa="message"]').type(message)

        cy.fixture('example.json').as('arquivo')
        cy.get('input[type=file]').selectFile('@arquivo')

        cy.get('[data-qa="submit-button"]').click()

    }   

}

export default new Contato()