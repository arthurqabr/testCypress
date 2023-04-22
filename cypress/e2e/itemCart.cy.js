// Todos os comandos estão definidos em /support/commands.js e /support/index.d.ts
// Dessa forma o código fica mais organizado, reutilizável e parametrizável
// O comando cy.searchProduct() deve ser definido com o produto que será pesquisado
// O comando cy.selectProdut() deve ser definido com o valor do index do produto

describe('Pesquisando e adicionando um item à sacola', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Acessa a página da loja online', () => {
    cy.visit('/');
  });

  it('Busca por um produto e valida se a busca foi realiza', () => {
    cy.searchProduct('notebook')
    cy.contains('Resultados para').should('be.visible');
  });

  it('Escolhe um produto na lista e adiciona ao carrinho, valida se foi direcionado e se o produto foi adicionado', () => {
    cy.searchProduct('notebook')
    cy.selectProduct('4')
    cy.getProductName()
    cy.addProductBag()
    cy.visit('/')
    cy.searchProduct('iphone')
    cy.selectProduct('2')
    cy.getProductName()
    cy.addProductBag()
  });
});
