describe('sls-shared-widgets', () => {
  beforeEach(() => cy.visit('/iframe.html?id=alertcomponent--primary'));
  it('should render the component', () => {
    cy.get('sls-alert').should('exist');
  });
});