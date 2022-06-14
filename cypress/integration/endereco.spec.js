/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page';
import EderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require ('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(() => {
            cy.login('aluno_ebac@teste.com', 'teste@teste.com')
        })
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EderecoPage.editarEnderecoFaturamento('Darci','Santos','Google','Brasil','Av Paulista','9901','Sorocaba','São Paulo','06587400')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        EderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep
             )


        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });


});