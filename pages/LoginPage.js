import { Selector } from 'testcafe';

class LoginPage {
    constructor() {
        this.emailInput = Selector('#username'); // Seletor para o input de e-mail
        this.passwordInput = Selector('#password'); // Seletor para o input de senha
        this.loginButton = Selector('button').withText('Entrar'); // Seletor para o botão de login
    }

    async login(t, email, password) {
        await t
            .typeText(this.emailInput, email) // Digita o e-mail
            .typeText(this.passwordInput, password) // Digita a senha
            .click(this.loginButton); // Clica no botão de login
    }
}

export default new LoginPage();