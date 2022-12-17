describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/user/login')
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type(Cypress.env('password'))
    cy.get('[type="submit"]').click()
  })

  it('Courses', () => {
    cy.get('[data-qa="topmenu-Courses"]').click()

    cy.location('pathname').should('include', '/course')
    cy.contains('Interactive Courses').should('be.visible')
  })

  it('Interview Questions', () => {
    cy.get('[data-qa="topmenu-Interview Questions"]').click()

    cy.location('pathname').should('include', '/flash')
    cy.contains('Interview practice cards').should('be.visible')
  })
})
