/// <reference types="cypress" />

describe("Restaurant Page E2E", () => {
  it("deve renderizar preview, itens, avaliações e permitir adicionar avaliação", () => {
    cy.visit("/restaurant/1"); 

    cy.get('img').should('exist');
    cy.contains("Avaliações").should("exist");

    cy.get('a[href="/item/1"]').should("exist");
    cy.get('button').contains("Adicionar").should("exist");

    cy.get('textarea[placeholder="Feedback"]').type("Ótimo restaurante!");

    cy.get('.text-yellow-400 .cursor-pointer').eq(4)
      .should('have.attr', 'fill', 'none');

    cy.get('.text-yellow-400 .cursor-pointer').eq(4).click();

    cy.get('.text-yellow-400 .cursor-pointer').eq(4)
      .should('have.attr', 'fill', 'currentColor');

    cy.get('button').contains("Adicionar").click();
  });
});
