import MainPage from '../pages/app/main.page'
import CoursesPage from '../pages/app/courses.page'
import InterviewQuestionsPage from '../pages/app/interview-questions.page'

describe('Navigation', () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'))
    MainPage.open()
  })

  it('Courses', () => {
    MainPage.navbar.linkCourses.click()

    CoursesPage.path.should('include', '/course')
    CoursesPage.header.should('be.visible')
  })

  it('Interview Questions', () => {
    MainPage.navbar.linkInterviewQuestions.click()

    InterviewQuestionsPage.path.should('include', '/flash')
    InterviewQuestionsPage.header.should('be.visible')
  })
})
