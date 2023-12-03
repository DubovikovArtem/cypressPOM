import { userLogin, token, userId } from "../API/APIHelpers"
import { MainPage } from "../pages/mainPage"
import { addToWish } from "../API/wishlist/createWishlist"

describe('Login as user', () => {
    beforeEach(() => {
        userLogin();
        cy.visit(Cypress.env('baseUrl').ui, {
            onBeforeLoad: (contentWindow) => {
                contentWindow.window.localStorage.setItem('authToken', token)
            }
        })
    })
    it('test user login', () => {
        let mainPage = new MainPage();
        mainPage.isLogged(Cypress.env('username'));
        addToWish(userId, 2, token);
        cy.reload();
    })
})