export function deleteWish(userId, token) {
    cy.request({
        method: 'DELETE',
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