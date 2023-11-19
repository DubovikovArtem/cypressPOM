const email = "#";
export class LoginPage {
    usernameImput() {
        return cy.get('#email');
    }
    passwordImput() {
        return cy.get('#password');
    }
    loginButton() {
        return cy.get('button[type="submit"]');
    }
}