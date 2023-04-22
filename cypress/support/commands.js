// Pesquisa por produto específico
Cypress.Commands.add('searchProduct', (productName) => {
    cy.get('#input-search').type(productName);
    cy.get('[data-testid="search-submit"]').click();
});

// Seleciona o index do item pesquisado
Cypress.Commands.add('selectProduct', (indexItem) => {
    cy.get(`:nth-child(${indexItem}) > [data-testid="product-card-container"] > [data-testid="product-card-content"]`).click()
});

let productDescription

// Busca o nome do produto e verifica se está visível
Cypress.Commands.add('getProductName', () => {
    cy.get('[data-testid="heading-product-title"]')
    .invoke('text')
    .then(text => {
      productDescription = text
      Cypress.env(productDescription, text)
      cy.contains(productDescription).should('be.visible')
    })
});

// Adiciona o produto na sacola, verifica se a URL está correta e se o item foi adicionado corretamente.
Cypress.Commands.add('addProductBag', () => {
    Cypress.on('uncaught:exception', (err) => {
        return !(err.message.includes('Already requesting showcase recommendation'));
      })
      
    cy.get(':nth-child(2) > [data-testid="bagButton"]').click()
    cy.get('[data-testid="summary-continue-btn"]').click()
    cy.url().should('be.equal', 'https://sacola.magazineluiza.com.br/#/')
    cy.contains('Subtotal').should('be.visible')
});
