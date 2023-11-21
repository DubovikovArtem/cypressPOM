export class MainPage {
    loginName;
    constructor() {
        this.loginName = 'button.mat-button[aria-haspopup="true"] > span:nth-child(1)';
    }

    isLogged(name){
        cy.get(this.loginName).contains(name).should('exist');
    }
}