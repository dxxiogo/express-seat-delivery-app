/// <reference types="cypress" />

describe("Login Page E2E", () => {
  it("deve permitir login com dados válidos", () => {
    cy.visit("/login");
    cy.get('input[placeholder="digite seu email"]').type("usuario@email.com");
    cy.get('input[placeholder="digite sua senha"]').type("senhaSegura123");
    cy.contains("Entrar").click();

    cy.url().should("include", "/home");
  });
});
