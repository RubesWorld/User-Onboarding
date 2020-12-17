describe("User-Onboarding",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    });

    const nameInput = () => cy.get('input[name="name"]'); 
    const emailInput = () => cy.get('input[name="email"]');


     it('name check', ()=>{
        nameInput().type('Ruben')
        nameInput().should('have.value','Ruben')
     })
     it('email check',()=>{
         emailInput().type('ra15@outlook.com')
        emailInput().should('have.value','ra15@outlook.com')
     })

})