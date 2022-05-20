describe('sls-shared-widgets', () => {
  beforeEach(() => cy.visit('/iframe.html?id=checkboxcomponent--primary'));
  it('should render the component', () => {
    cy.get('sls-checkbox').should('exist');
  });
});