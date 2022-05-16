
describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('do the arithmetical buttons updated the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '10')

  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '8')
  })

  it('is the output expected for minus numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-1')
  })

  it('is the output expected for decimal numbers', () => {
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '1.1')

  })

  it('is the output expected for large numbers', () => {
    cy.get('#number3').click();
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '31546.4');
  })

  it('what happens when you divide by zero?', () => {
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();

    cy.get('.display').should('contain', 'error');
  })
})