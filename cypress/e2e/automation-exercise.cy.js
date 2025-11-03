// describe / context - suite ou conjunto de testes em um mesmo arquivo
// it  - um teste dentro de um bloco ou conjunto de testes

// describe -> Automation Exercise (tanto no cypress e playwrite)
// Cada 'it' é independente, ex: abre um novo navegador ou aba....um novo teste
//em testes de unidade fique menor possivel o it. mas em automação é o teste inteiro
//      it -> Cadastrar um usuario
//      outros testes... abcde
/**
Test Case 1: Register User
Test Case 2: Login User with correct email and password
Test Case 3: Login User with incorrect email and password
Test Case 4: Logout User
Test Case 5: Register User with existing email
Test Case 6: Contact Us Form
Test Case 8: Verify All Products and product detail page
Test Case 9: Search Product
Test Case 10: Verify Subscription in home page
Test Case 15: Place Order: Register before Checkout

 */



 //<reference types="cypress" />

describe('Automation Exercise', () => {
    it('Cadastrar um usuário', () => {

        const timestamp = new Date().getTime()

       cy.visit('https://www.automationexercise.com') 

       cy.get('a[href="/login"]').click()

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

       cy.get('input#first_name').type('Bob')
       cy.get('input#last_name').type('Narciso Pipoca')
       cy.get('input#company').type('PGATS')
       cy.get('input#address1').type('Avenida Selenium,, n 2004')
       cy.get('select#country').select('Canada')
       cy.get('input#state').type('California')
       cy.get('input#city').type('Los Angeles')
       cy.get('[data-qa="zipcode"]').type('90001')
       cy.get('[data-qa="mobile_number"]').type('111 222 333')

       cy.get('[data-qa="create-account"]').click()

       //triplo a - Arrange, Act, Assert
       cy.url().should('includes','account_created')
       cy.contains('b', 'Account Created!')


    });

    //qa-tester-1761782358212@test.com
    it('Login de Usuário com e-mail e senha corretos', () => {
       cy.visit('https://www.automationexercise.com') 
       cy.get('a[href="/login"]').click()

       cy.get(`[data-qa="login-email"]`).type(`qa-tester-1761782358212@test.com`)
       cy.get(`[data-qa="login-password"]`).type(`12345`)

       cy.get(`[data-qa="login-button"]`).click()

       cy.get('i.fa-user').parent().should('contain', 'QA Tester')
       cy.get(`a[href="/logout"]`).should(`be.visible`)

       cy.contains(`b`,`QA Tester`)

       /**
       cy.get(':nth-child(10) > a')
         .should('be.visible')
         .and('have.text', `Logged in as QA Teste`);

       cy.contains(`Logged in as ${testUser.name}`).should(`be.visible`)
       cy.contains(`Logged in as Leandro QA`).should(`be.visible`)
       */
    });    

    it('Login de Usuário com e-mail e senha incorretos', () => { 
       cy.visit('https://www.automationexercise.com') 
       cy.get('a[href="/login"]').click()

       cy.get(`[data-qa="login-email"]`).type(`qa-tester-1761782358212@test.com`)
       cy.get(`[data-qa="login-password"]`).type(`54231`)

       cy.get(`[data-qa="login-button"]`).click()

       cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')

    });

    it('Logout de Usuário', () => {
       cy.visit('https://www.automationexercise.com') 
       cy.get('a[href="/login"]').click()

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

    it.only('Cadastrar Usuário com email existente no sistema', () => {
       cy.visit('https://www.automationexercise.com') 
       cy.get('a[href="/login"]').click()

       cy.get(`[data-qa="signup-name"]`).type(`QA Tester`)
       cy.get(`[data-qa="signup-email"]`).type(`qa-tester-1761782358212@test.com`)

       cy.contains('button', 'Signup').click()

       cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!')

    });    





});

