/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to ... add your description here
     * @example cy.clickOnMyJourneyInCandidateCabinet()
     */
    searchProduct(productName: string): Chainable<null>;
    selectProduct(itemIndex: string): Chainable<null>;
    getProductName(): Chainable<null>;
    addProductBag(): Chainable<null>;
  }
}
