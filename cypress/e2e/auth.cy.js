import AuthPage from '../pages/auth.page'

describe('Authentication', () => {
  beforeEach(() => {
    AuthPage.open()
  })

  it('Log in with valid credentials', () => {
    AuthPage.logIn(Cypress.env('email'), Cypress.env('password'))

    cy.location('pathname').should('include', 'profile')
    cy.get('.ant-avatar-square').should('be.visible')
  })

  it('Log in with incorrect credentials', () => {
    AuthPage.logIn(Cypress.env('email'), '123456')

    cy.location('pathname').should('include', '/user/login')
    AuthPage.toast
      .should('be.visible')
      .should('have.text', 'Auth failed')
  })
})
