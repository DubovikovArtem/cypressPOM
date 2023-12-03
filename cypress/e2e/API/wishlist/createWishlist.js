export function addToWish() {
    cy.request({
        method: 'POST',
        url: `https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/21284/2`,
        headers: {
            'Accept': 'text/plain',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ4cXdlQVMxMjEyMyIsInVzZXJpZCI6IjIxMjg0IiwidXNlclR5cGVJZCI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIyIiwianRpIjoiOGVlYTI5YTAtM2MwNi00ZjA2LWFkYTAtNTQ5Y2MzZjE5YWU3IiwiZXhwIjoxNzAxNTk2NTExLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8ifQ.WgTQto5DFpUGnX8wYGt2Aha24ktzPk-zOTucoGEIQuo'
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
//             //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ4cXdlQVMxMjEyMyIsInVzZXJpZCI6IjIxMjg0IiwidXNlclR5cGVJZCI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIyIiwianRpIjoiOGVlYTI5YTAtM2MwNi00ZjA2LWFkYTAtNTQ5Y2MzZjE5YWU3IiwiZXhwIjoxNzAxNTk2NTExLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8ifQ.WgTQto5DFpUGnX8wYGt2Aha24ktzPk-zOTucoGEIQuo'
//         },
//     }).then((response) => {
//         expect(response.status).to.eq(200);
//         cy.log('response:', response);
//         cy.log('responseHead', response.headers);
//     });
// }