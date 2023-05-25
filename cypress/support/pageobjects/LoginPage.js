/// <reference types="Cypress" />

import LoginElements from "../elements/LoginElements";
const loginElements = new LoginElements();

class LoginPage {
  visitPage() {
    cy.visit("/");
  }

  campoVazioEmail() {
    cy.get(loginElements.campoEmail).should("be.empty");
  }

  preenchendoEmail(email) {
    cy.get(loginElements.campoEmail).type(email);
  }

  preenchendoSenha(senha) {
    cy.get(loginElements.CampoSenha).type(senha, { log: false });
  }

  campoVazioSenha() {
    cy.get(loginElements.CampoSenha).should("be.empty");
  }

  clicarBotaoEntrar() {
    cy.get(loginElements.botãoEntrar).click();
  }

  mensagemErro(cont, texto) {
    cy.get(loginElements.mensagemErro)
      .eq(cont)
      .should("be.visible")
      .and("have.text", texto)
      .and("have.css", "background-color", "rgb(243, 150, 154)")
      .and("have.css", "color", "rgb(255, 255, 255)");
  }

  botãoLogout() {
    cy.get(loginElements.botãoLogout)
      .should("be.visible")
      .and("have.text", "Logout")
      .and("have.css", "background-color", "rgb(108, 195, 213)")
      .and("have.css", "border-color", "rgb(108, 195, 213)")
      .and("have.css", "color", "rgb(255, 255, 255)");
  }
}

export default LoginPage;
