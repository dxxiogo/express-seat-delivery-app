/// <reference types="cypress" />

describe("SignUp Page E2E", () => {
  it("deve permitir cadastro com dados válidos", () => {
    cy.visit("/signup");
    cy.get('input[placeholder="digite seu Nome"]').type("Usuário Teste");
    cy.get('input[placeholder="digite seu email"]').type("teste@email.com");
    cy.get('input[placeholder="digite seu CPF"]').type("12345678900");
    cy.get('input[placeholder="digite sua senha"]').type("senhaSegura123");
    cy.contains("Entrar").click();

    cy.url().should("include", "/home");
  });
});
