describe('Navigation', () => {
  it('Courses', () => {
    cy.visit('/user/login')
    cy.get('#normal_login_email')
      .type('test@example.com')
    cy.get('#normal_login_password')
      .type('Qwerty!23')
    cy.get('[type="submit"]')
      .click()

    cy.get('[data-qa="topmenu-Courses"]')
      .click()

    cy.location('pathname')
      .should('include', '/course')
    cy.contains('Interactive Courses')
      .should('be.visible')
  })
})
