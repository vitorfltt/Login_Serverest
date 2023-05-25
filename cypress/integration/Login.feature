Feature: Login serveRest

    Scenario: Tentativa de acesso sem preencher campo algum
        Given que eu não preencha campo algum
        When eu clico no botão entrar
        Then é apresentado erro de campos obrigatórios

    Scenario: Tentativa de acesso preenchendo apenas campo email
        Given que eu preencha apenas o campo email
        When eu clico no botão entrar
        Then é apresentado erro de campo password obrigatório

    Scenario: Tentativa de acesso preenchendo apenas campo senha
        Given que eu preencha apenas o campo senha
        When eu clico no botão entrar
        Then é apresentado erro de campo email obrigatório

    Scenario: Tentativa de acesso sem o .com no email
        Given que eu preencha o campo email sem o .com sem a senha 
        When eu clico no botão entrar
        Then é apresentado erro de email invalido e password obrigatório

    Scenario: Tentativa de acesso com os dados todos inválidos
        Given que eu preencha o campo email e senha com dados de usuários inválidos
        When eu clico no botão entrar
        Then é apresentado erro com a mensagem de Email ou senha invalido

    Scenario: Tentativa de acesso com e-mail valido e senha invalida
        Given que eu preencha o campo email com um usuario existente e senha invalida
        When eu clico no botão entrar
        Then é apresentado erro com a mensagem de Email ou senha invalido

    Scenario: Tentativa de acesso com e-mail invalido e senha valida
        Given que eu preencha o campo email com um usuario inexistente e senha valida
        When eu clico no botão entrar
        Then é apresentado erro com a mensagem de Email ou senha invalido

    Scenario: Tentativa de acesso com todos os campos preenchidos corretamente com dados existentes
        Given que eu preencha os campos email e senha com usuário valido
        When eu clico no botão entrar
        Then consigo acessar e visulizar as funcionalidades do sistema

    

    