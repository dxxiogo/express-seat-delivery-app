/// <reference types="cypress" />

describe("Item Page E2E", () => {
  it("deve renderizar imagem, título, descrição, textarea e botões", () => {
    cy.visit("/item/1"); 
    cy.get('img[alt="Panqueca Recheada"]').should("exist");
    cy.contains("Panqueca Recheada").should("exist");
    cy.contains("Recheada com doce de leite e carinho.").should("exist");
    cy.get('textarea[placeholder="Observação"]').should("exist");
    cy.contains("button", "-").should("exist");
    cy.contains("button", "+").should("exist");
    cy.contains("button", /Adicionar R\$ 20,00/i).should("exist");
  });
});
