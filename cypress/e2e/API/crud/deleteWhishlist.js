export function deleteWishlist(userId, token) {
    cy.request({
        method: 'DELETE',
        url: `https://bookcart.azurewebsites.net/api/Wishlist/${userId}`,
        headers: {
            'Accept': 'text/plain',
            'Authorization': `bearer ${token}`
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('response:', response);

        cy.request({
            method: 'GET',
            url: `https://bookcart.azurewebsites.net/api/Wishlist/${userId}`,
            headers: {
                'Accept': 'text/plain',
                'Authorization': `bearer ${token}`
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.empty;
            cy.log('response:', response.body.title);
        });
    });
}