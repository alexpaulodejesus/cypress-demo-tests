describe('Testes de demonstração com Cypress', () => {

  it('Visita a página e interage com campos de texto', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
    cy.get('.action-email')
      .type('teste@exemplo.com')
      .should('have.value', 'teste@exemplo.com');
  });

  it('Valida presença de botões em uma lista', () => {
    cy.visit('https://example.cypress.io/commands/querying');
    cy.get('.query-btn').should('contain', 'Button');
    cy.get('#querying .well>button').should('have.length', 5);
  });

  it('Trabalha com checkboxes', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked');
    cy.get('.action-checkboxes [type="checkbox"]').last().uncheck().should('not.be.checked');
  });

  it('Seleciona opções em dropdown', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-select').select('apples').should('have.value', 'apples');
  });

  it('Faz asserções em elementos visíveis', () => {
    cy.visit('https://example.cypress.io/commands/assertions');
    cy.get('.assertion-table').should('be.visible');
    cy.get('.assertion-table tbody tr').should('have.length.gte', 3);
  });

  it('Interage com botões e valida comportamento', () => {
    cy.visit('https://example.cypress.io/commands/actions');
    cy.get('.action-btn').click().should('have.class', 'active');
  });

});