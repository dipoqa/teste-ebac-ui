/// <reference types ="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    })

    it ('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        //.first()
        //.eq(3)
        .contains('Abominable Hoodie')
        .click()
    })

    it ('Deve adicionar o produto ao carrinho', () => {
        
        
    })

})