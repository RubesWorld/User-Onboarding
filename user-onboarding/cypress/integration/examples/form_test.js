describe("User-Onboarding",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    });

    const nameInput = () => cy.get('input[name="name"]'); 

     it('MVP', ()=>{
        nameInput().type('Ruben')
        nameInput().should('have.value','Ruben')
     })
})