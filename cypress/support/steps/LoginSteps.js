/* global Given, Then, When */

import LoginPage from "../pageobjects/LoginPage";
import { randEmail, randPassword } from "@ngneat/falso";
const loginPage = new LoginPage();

beforeEach(() => {
  loginPage.visitPage();
});

Given("que eu não preencha campo algum", () => {
  loginPage.campoVazioEmail();
  loginPage.campoVazioSenha();
});

When("eu clico no botão entrar", () => {
  loginPage.clicarBotaoEntrar();
});

Then("é apresentado erro de campos obrigatórios", () => {
  loginPage.mensagemErro(0, "×Email é obrigatório");
  loginPage.mensagemErro(1, "×Password é obrigatório");
});

Given("que eu preencha apenas o campo email", () => {
  loginPage.preenchendoEmail(randEmail());
});

When("eu clico no botão entrar", () => {
  loginPage.clicarBotaoEntrar();
});

Then("é apresentado erro de campo password obrigatório", () => {
  loginPage.mensagemErro(0, "×Password é obrigatório");
});

Given("que eu preencha apenas o campo senha", () => {
  loginPage.preenchendoSenha(randPassword());
});

When("eu clico no botão entrar", () => {
  loginPage.clicarBotaoEntrar();
});

Then("é apresentado erro de campo email obrigatório", () => {
  loginPage.mensagemErro(0, "×Email é obrigatório");
});

Given("que eu preencha o campo email sem o .com sem a senha", () => {
  loginPage.preenchendoEmail("vitor@teste");
});

When("eu clico no botão entrar", () => {
  loginPage.clicarBotaoEntrar();
});

Then("é apresentado erro de email invalido e password obrigatório", () => {
  loginPage.mensagemErro(0, "×Email deve ser um email válido");
  loginPage.mensagemErro(1, "×Password é obrigatório");
});

Given(
  "que eu preencha o campo email e senha com dados de usuários inválidos",
  () => {
    loginPage.preenchendoEmail(randEmail());
    loginPage.preenchendoSenha(randPassword());
  }
);

When("eu clico no botão entrar", () => {
  loginPage.clicarBotaoEntrar();
});

Then("é apresentado erro com a mensagem de Email ou senha invalido", () => {
  loginPage.mensagemErro(0, "×Email e/ou senha inválidos");
});

Given(
  "que eu preencha o campo email com um usuario existente e senha invalida",
  () => {
    loginPage.preenchendoEmail(Cypress.config("email"));
    loginPage.preenchendoSenha(randPassword());
  }
);

When("eu clico no botão entrar", () => {
  loginPage.clicarBotaoEntrar();
});

Then("é apresentado erro com a mensagem de Email ou senha invalido", () => {
  loginPage.mensagemErro(0, "×Email e/ou senha inválidos");
});

Given(
  "que eu preencha o campo email com um usuario inexistente e senha valida",
  () => {
    loginPage.preenchendoEmail(randEmail());
    loginPage.preenchendoSenha(Cypress.config("senha"));
  }
);

When("eu clico no botão entrar", () => {
  loginPage.clicarBotaoEntrar();
});

Then("é apresentado erro com a mensagem de Email ou senha invalido", () => {
  loginPage.mensagemErro(0, "×Email e/ou senha inválidos");
});

Given("que eu preencha os campos email e senha com usuário valido", () => {
  loginPage.preenchendoEmail(Cypress.config("email"));
  loginPage.preenchendoSenha(Cypress.config("senha"));
});

When("eu clico no botão entrar", () => {
  loginPage.clicarBotaoEntrar();
});

Then("consigo acessar e visulizar as funcionalidades do sistema", () => {
  loginPage.botãoLogout();
});
