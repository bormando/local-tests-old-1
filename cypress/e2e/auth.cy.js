describe('Authentication', () => {
  it('Log in with valid credentials', () => {
    cy.visit('/user/login')

    cy.get('#normal_login_email')
      .type('test@example.com')
    cy.get('#normal_login_password')
      .type('Qwerty!23')
    cy.get('[type="submit"]')
      .click()

    cy.location('pathname')
      .should('include', 'profile')
    cy.get('.ant-avatar-square')
      .should('be.visible')
  })
})
