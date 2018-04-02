describe('Tag Cloud', () => {
  it('should assert that <title> is correct', () => {
    cy.visit('/');
    cy.title().should('include', 'Tag Cloud');
  });

  it('should print error when not valid hash tag', () => {
    cy
      .visit('/')
      .getByTestId('hashtag-input')
      .type('not a valid hastag');
    cy.getByTestId('submit-button').click();
    cy.getByTestId('validation-error').should('contain', 'Not a valid hashtag');
  });

  it('should render tag cloud', () => {
    cy
      .visit('/')
      .getByTestId('hashtag-input')
      .type('#epicsuccess');
    cy.getByTestId('submit-button').click();
    cy
      .getByTestId('tag-cloud')
      .find('.tag-cloud-tag')
      .should('have.length.above', 0);
  });
});
