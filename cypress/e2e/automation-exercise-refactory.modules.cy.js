import userData from '../fixtures/example.json'
import {getRandomNumber, 
        getRandomEmail
 } from '../support/helpers'

import { faker } from '@faker-js/faker'

import menu from '../modules/menu'
import login from '../modules/login'
import cadastro from '../modules/cadastro'
import contato from '../modules/contato'


describe('Automation Exercise', () => {
     beforeEach(() =>{
      cy.viewport('iphone-xr')
      cy.visit('https://www.automationexercise.com')

      menu.navegarParaLogin()
      menu.navegarParaContactUs()
     });


   //Test Case 1: Register User  
    it('Cadastrar um usuário', () => {

      login.preencherFormularioDePreCadastro()
      cadastro.preencherFormularioDeCadastroCompleto()

      //Assert
       cy.url().should('includes','account_created')
       cy.contains('b', 'Account Created!')
       cy.get('h2[data-qa="account-created"]').should('have.text', 'Account Created!')

    });

    //Test Case 2: Login User with correct email and password
    //qa-tester-1761782358212@test.com
    it('Login de Usuário com e-mail e senha corretos', () => {
      login.preencherFormularioDeLogin(userData.user, userData.password)

       cy.get('i.fa-user').parent().should('contain', userData.name)
       cy.get(`a[href="/logout"]`).should(`be.visible`)

       cy.contains('b',userData.name)
       cy.contains(`Logged in as ${userData.name}`).should('be.visible')
         
    });   


    //Test Case 3: Login User with incorrect email and password
    it('Login de Usuário com e-mail e senha incorretos', () => { 
      login.preencherFormularioDeLogin(userData.user, '54321')

      cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')

    });

    //Test Case 4: Logout User
    it('Logout de Usuário', () => {
      login.preencherFormularioDeLogin(userData.user, userData.password)
      menu.efetuarLogout()

      cy.url().should('contain','login')
      cy.contains('Login to your account')
      cy.get('a[href="/logout"]').should('not.exist')
      cy.get('a[href="/login"]').should('contain','Signup / Login')

    });

    //Test Case 5: Register User with existing email
    it('Cadastrar Usuário com email existente no sistema', () => {
      login.preencherFormularioDeLoginExistente(userData.name, userData.user)

       cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!')

    });    


     //Test Case 6: Contact Us Form
    it.only('Enviar um Formulário de Contato com upload de arquivo', () => {
        contato.preencherContactUs(userData.name, userData.email, userData.subject, userData.message)
       
        cy.get('.status').should('be.visible')
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
      
    });

   

    //Test Case 8: Verify All Products and product detail page

    //Test Case 9: Search Product

    //Test Case 10: Verify Subscription in home page

    //Test Case 15: Place Order: Register before Checkout




});

