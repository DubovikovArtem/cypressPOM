let listOfWishist;
export function getWishlist(userId, token) {
    cy.request({
        method: 'GET',
        url: `https://bookcart.azurewebsites.net/api/Wishlist/${userId}`,
        headers: {
            'Accept': 'text/plain',
            'Authorization': `bearer ${token}`
        },
    }).then((response) => {
        listOfWishist = response.body;
        expect(response.status).to.eq(200);
        expect(response.body).not.empty;
        cy.log('response:', response.body.title);
    });
}