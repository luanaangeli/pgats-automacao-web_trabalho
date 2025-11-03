//Test Case 1: Register User
//Test Case 2: Login User with correct email and password
//Test Case 3: Login User with incorrect email and password
//Test Case 4: Logout User
//Test Case 5: Register User with existing email

import userData from '../fixtures/example.json'
import {getRandomNumber, 
        getRandomEmail
 } from '../support/helpers'

import { faker } from '@faker-js/faker'

faker.animal.dog


describe('Automation Exercise', () => {
     beforeEach(() =>{
      cy.viewport('iphone-xr')
      cy.visit('https://www.automationexercise.com')
      cy.get('a[href="/login"]').click()

     });

     it.only('Exemplos de Logs', () => {
      cy.log(`STEP 1:: PGATS AUTOMACAO WEB CY LOG`)
      cy.log(`STEP 1:: PGATS AUTOMACAO WEB CY LOG`)

      cy.log(`getRandomNumber: ${getRandomNumber()} `)
      cy.log(`getRandomEmail: ${getRandomEmail()} `)

      cy.log(`Dog Breed: ${ faker.animal.dog()}`)
      cy.log(`Cat Breed: ${ faker.animal.cat()}`)
      cy.log(`fullName: ${ faker.person.fullName()}`)
      cy.log(`Company: ${ faker.company.name()}`)

     });


    it.only('Cadastrar um usuário', () => {

        const timestamp = new Date().getTime()       

       cy.get('[data-qa="signup-name"]').type('QA Tester')
       cy.get('[data-qa="signup-email"]').type(`qa-tester-${timestamp}@test.com`)
       cy.contains('button', 'Signup').click()

       //radio ou checkboxes -> check
       //cy.get('input[type=radio]')check('Mrs')
       cy.get('#id_gender1').check()

       cy.get('input#password').type('12345', {log: false})

       //para comboboxex ou selects -> select
       cy.get('select[data-qa=days').select('20')
       cy.get('select[data-qa=months').select('September')
       cy.get('select[data-qa=years').select("1992")

       //radio ou checkboxes -> check
       cy.get('input[type=checkbox]#newsletter').check()
       cy.get('input[type=checkbox]#optin').check()

       cy.get('input#first_name').type(faker.person.firstName())
       cy.get('input#last_name').type(faker.person.lastName())
       cy.get('input#company').type(`PGATS ${faker.company.name()}`)
       cy.get('input#address1').type(faker.location.streetAddress())
       cy.get('select#country').select('Canada')
       cy.get('input#state').type(faker.location.state())
       cy.get('input#city').type(faker.location.city())
       cy.get('[data-qa="zipcode"]').type(faker.location.zipCode())
       cy.get('[data-qa="mobile_number"]').type('111 222 333')

       cy.get('[data-qa="create-account"]').click()

       //triplo a - Arrange, Act, Assert
       cy.url().should('includes','account_created')
       cy.contains('b', 'Account Created!')

    });

    //qa-tester-1761782358212@test.com
    it('Login de Usuário com e-mail e senha corretos', () => {
       cy.get(`[data-qa="login-email"]`).type(`qa-tester-1761782358212@test.com`)
       cy.get(`[data-qa="login-password"]`).type(`12345`)

       cy.get(`[data-qa="login-button"]`).click()

       cy.get('i.fa-user').parent().should('contain', 'QA Tester')
       cy.get(`a[href="/logout"]`).should(`be.visible`)

       cy.contains(`b`,`QA Tester`)
   
    });   


    it('Login de Usuário com e-mail e senha incorretos', () => { 
       cy.get(`[data-qa="login-email"]`).type(`qa-tester-1761782358212@test.com`)
       cy.get(`[data-qa="login-password"]`).type(`54231`)

       cy.get(`[data-qa="login-button"]`).click()

       cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')

    });

    it('Logout de Usuário', () => {
       cy.get(`[data-qa="login-email"]`).type(`qa-tester-1761782358212@test.com`)
       cy.get(`[data-qa="login-password"]`).type(`12345`)

       cy.get(`[data-qa="login-button"]`).click()

       cy.get('i.fa-user').parent().should('contain', 'QA Tester')
       cy.get(`a[href="/logout"]`).should(`be.visible`).click()

       cy.url().should('contain','login')
       cy.contains('Login to your account')

       cy.get('a[href="/logout"]').should('not.exist')
       cy.get('a[href="/login"]').should('contain','Signup / Login')

    });

    it('Cadastrar Usuário com email existente no sistema', () => {
       cy.get(`[data-qa="signup-name"]`).type(`QA Tester`)
       cy.get(`[data-qa="signup-email"]`).type(`qa-tester-1761782358212@test.com`)

       cy.contains('button', 'Signup').click()

       cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!')

    });    


     //Test Case 6: Contact Us Form
    it('Enviar um Formulário de Contato com upload de arquivo', () => {
        cy.get('a[href*=contact]').click()

        cy.get('[data-qa="name"]').type(userData.name)
        cy.get('[data-qa="email"]').type(userData.email)
        cy.get('[data-qa="subject"]').type(userData.subject)
        cy.get('[data-qa="message"]').type(userData.message)

        cy.fixture('example.json').as('arquivo')
        cy.get('input[type=file]').selectFile('@arquivo')

        cy.get('[data-qa="submit-button"]').click()

        //asserts
        cy.get('.status').should('be.visible')
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
      
    });

   

    //Test Case 8: Verify All Products and product detail page

    //Test Case 9: Search Product

    //Test Case 10: Verify Subscription in home page

    //Test Case 15: Place Order: Register before Checkout




});

