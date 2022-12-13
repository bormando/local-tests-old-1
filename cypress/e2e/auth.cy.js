describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/user/login')
  })

  it('Log in with valid credentials', () => {
    cy.get('#normal_login_email').type('test@example.com')
    cy.get('#normal_login_password').type('Qwerty!23')
    cy.get('[type="submit"]').click()

    cy.location('pathname').should('include', 'profile')
    cy.get('.ant-avatar-square').should('be.visible')
  })

  it('Log in with incorrect credentials', () => {
    cy.get('#normal_login_email').type('test@example.com')
    cy.get('#normal_login_password').type('123456')
    cy.get('[type="submit"]').click()

    cy.location('pathname').should('include', '/user/login')
    cy.get('.ant-notification-notice-message')
      .should('be.visible')
      .should('have.text', 'Auth failed')
  })
})
