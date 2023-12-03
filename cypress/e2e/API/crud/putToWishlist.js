// export function postWish() {
//     cy.request({
//         method: 'POST',
//         url: `https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/21284/2`,
//         headers: {
//             'accept': 'text/plain',
//             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ4cXdlQVMxMjEyMyIsInVzZXJpZCI6IjIxMjg0IiwidXNlclR5cGVJZCI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIyIiwianRpIjoiYTI4YmRiMTMtNzNlOC00ZWFiLWJlZGUtYjdjMzMxMzVhODQ3IiwiZXhwIjoxNzAxNjE4MDI2LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8ifQ.5uobWgWGua9jTziK_rUTHjqhw-2DNOkK6ZoZLxkW07w'
//         },
//     }).then((response) => {
//         expect(response.status).to.eq(200);
//         cy.log('response:', response);
//         cy.log('response:', response);
//         cy.log('responseHead', response.headers.Authorization);
//     });
// }

export function addToWishlist(userId, bookId, token) {
    cy.request({
        method: 'POST',
        url: `https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/${userId}/${bookId}`,
        headers: {
            'Accept': 'text/plain',
            'Authorization': `bearer ${token}`
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).not.empty;
        cy.log('response:', response);
        cy.log('responseHead', response.headers);
    });
}