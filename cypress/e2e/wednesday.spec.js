describe('Wednesday Page', () => {
  it('should schedule a wednesday class', () => {
    cy.visit('/');
    //Add name
    cy.get('input[name="myusername"]').click();
    cy.get('input[name="myusername"]').should('have.focus');
    cy.get('input[name="myusername"]').type('Darnedo');

    //Add pwd
    cy.get('input[name="mypassword"]').click();
    cy.get('input[name="mypassword"]').should('have.focus');
    cy.get('input[name="mypassword"]').type('abc123');

    //Click Enter
    cy.get('input[class="btn-block btn btn-primary btn-justified"]').click();

    //Go to Reservas
    cy.get(':nth-child(4) > .btn').click();

    //Go to Activitats dirigides
    cy.get('[href*="d41d8cd98f00b204e9800998ecf8427e"]').click();

    //Select Friday Bodypump 17:15
    // cy.get('[id*="1715_72"]').click();

    //Select Friday Les mills core
    cy.get('[id*="1830_21"]').click();

    //Accept popup
    cy.get('#Reservar').click();

    //Accept popup
    cy.get('#Tancar').click();
  });
});
