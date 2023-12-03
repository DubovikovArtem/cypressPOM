import { addToWishlist } from "../API/crud/putToWishlist"
import { userLogin, token, userId } from "../API/APIHelpers"
import {deleteWishlist} from "../API/crud/deleteWhishlist"
import {getWishlist} from "../API/crud/getUserWishList"

describe("Test CRUD whishlist", () => {
    beforeEach(() => {
        userLogin();
        cy.visit(Cypress.env('baseUrl').ui, {
            onBeforeLoad: (contentWindow) => {
                contentWindow.window.localStorage.setItem('authToken', token);
                contentWindow.window.localStorage.setItem('userId', userId);
            }
        })
    })
    it("Test add book by ID to user by ID", () => {
        addToWishlist(userId, 3, token);
        cy.reload();
    })

    it("Test get user whishlist",()=>{
        getWishlist(userId, token);
    })

    it("Test delete user whishlist",()=>{
        deleteWishlist(userId, token);
    })
})