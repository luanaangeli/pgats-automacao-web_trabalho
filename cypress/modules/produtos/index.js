class Produtos {
    VerificarDetalhesDoProduto() {
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
    
    }

    ProcurarProdutos() {
        cy.get('#search_product').type('tshirt').should('be.visible')
        cy.get('#submit_search').click()

    }
        
}

export default new Produtos();