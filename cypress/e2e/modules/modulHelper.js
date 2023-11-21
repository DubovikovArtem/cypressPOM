export function visitWithToken(url, userToken){
    cy.visit(url, {
        onBeforeLoad: (contentWindow) => {
            contentWindow.window.localStorage.setItem('authToken', userToken)
        }
    }).then(()=>{
        cy.wait(3000);
    })
}