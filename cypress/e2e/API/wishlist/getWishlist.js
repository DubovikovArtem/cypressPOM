export function getWish(userId, token) {
    cy.request({
        method: 'GET',
        url: `https://bookcart.azurewebsites.net/api/Wishlist${userId}`,
        headers: {
            'Accept': 'text/plain',
            'Authorization': `bearer ${token}`
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('response:', response);
    });
}