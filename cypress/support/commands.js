// https://on.cypress.io/custom-commands

Cypress.Commands.add('getByTestId', (id) => {
  return cy.get(`[data-test="${id}"]`);
});
