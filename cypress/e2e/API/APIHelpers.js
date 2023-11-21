import { faker } from '@faker-js/faker'

export function userRegistration() {
    cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl').apiRegistration,
        body: {
            "userId": 0,
            "firstName": faker.person.firstName(),
            "lastName": faker.person.lastName(),
            "username": Cypress.env('username'),
            "password": Cypress.env('password'),
            "gender": "male",
            "userTypeId": faker.number.int(100)
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('response:', response);
    });
}
export let token;
export function userLogin() {
    cy.request({
        method: 'POST',
        url: Cypress.env('baseUrl').apiLogin,
        body: {
            "username": Cypress.env('username'),
            "password": Cypress.env('password'),
        }
    }).then((response) => {
        token = response.body.token;
        expect(response.status).to.eq(200);
        cy.log('response:', response.body);
    });
}

