class Navbar {
  get linkCourses() {return cy.get('[data-qa="topmenu-Courses"]')}
  get linkInterviewQuestions() {return cy.get('[data-qa="topmenu-Interview Questions"]')}
}

export default new Navbar()
