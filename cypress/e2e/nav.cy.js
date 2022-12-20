describe('Navigation', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
    cy.visit('/')
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
