declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Log into application
     * @example
     * cy.login('email@example.com', 'qwerty')
     */
    login(email: string, password: string): void
  }
}
