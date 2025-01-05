describe('Testing app', () => {
  beforeEach(() => {
    cy.visit('https://personalized-itinerary-generator.vercel.app/')
  })

  it('is able to log in', () => {
    cy.contains('Login').should('exist')
    cy.contains('Login').click()
    cy.contains('Enter your email and password to access your account').should('exist', { timeout: 10000 })
    cy.get('input[name="email"]').type('<your-email@gmail.com>')

    cy.get('input[name="password"]').type('<your-password>')

    cy.get('button[type="submit"]').click()

    cy.reload()

    cy.contains('Get Started').should("exist", {timeout: 10000})
  })

})
