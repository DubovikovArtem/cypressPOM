import { userLogin, token } from "../API/APIHelpers"
import { MainPage } from "../pages/mainPage"
//import {visitWithToken} from "../modules/modulHelper"
describe('Login as user', () => {
    it('test user login', () => {
        userLogin();
        cy.visit(Cypress.env('baseUrl').ui, {
            onBeforeLoad: (contentWindow) => {
                contentWindow.window.localStorage.setItem('authToken', token)
            }
        })

        /**почему то это не работает 
         * результат "СЕРЫЙ ЭКРАН"
         * visitWithToken(Cypress.env('baseUrl').ui, token);
         */

        let mainPage = new MainPage();
        mainPage.isLogged(Cypress.env('username'));
    })
})
