export function addToWish() {
    cy.request({
        method: 'POST',
        url: `https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/21284/2`,
        headers: {
            'Accept': 'text/plain',
            'Authorization': 'Bearer '
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('response:', response);
        cy.log('responseHead', response.headers);
    });
}
// export function addToWish(userId, bookId, token) {
//     cy.request({
//         method: 'POST',
//         url: `https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/${userId}/${bookId}`,
//         //url: `https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/21284/2`,
//         headers: {
//             'Accept': 'text/plain',
//             'Authorization': `bearer ${token}`
//             //'Authorization': 'Bearer '
//         },
//     }).then((response) => {
//         expect(response.status).to.eq(200);
//         cy.log('response:', response);
//         cy.log('responseHead', response.headers);
//     });
// }