describe("User-Onboarding",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    });

    const nameInput = () => cy.get('input[name="name"]'); 
    const emailInput = () => cy.get('input[name="email"]');
    const password = () => cy.get('input[name=password]');
    const tos = () => cy.get('input[type=checkbox]');
    const submitButton = () => cy.get('#submitBtn')
    const errName = () =>cy.get('#errName');
    const errEmail = () => cy.get('#errEmail');
    const errPw = () =>cy.get('#errPw');
    const errTos = () =>cy.get('#errTos');

     it('name check', ()=>{
        nameInput().type('Ruben')
        nameInput().should('have.value','Ruben')
     })
     it('email check',()=>{
        emailInput().type('ra15@outlook.com')
        emailInput().should('have.value','ra15@outlook.com');
     })
     it('pass word check', ()=>{
        password().type('pimpsauce5')
        password().should('have.value','pimpsauce5');
     })
     it('Terms of Service check',()=>{
        tos().check()
        tos().should('have.value','on')
     })
     it('Submit Button',()=>{
        nameInput().type('ruben')
        emailInput().type('ra15@outlook.com')
        password().type('asdfasdf')
        tos().check()
        submitButton().should('not.be.disabled')
     })
     it('form validation',()=>{
        errName().should('exist')
        errPw().should('exist')


     })
})