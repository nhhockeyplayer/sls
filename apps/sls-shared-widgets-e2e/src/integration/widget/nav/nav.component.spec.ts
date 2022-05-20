describe('sls-shared-widgets', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navcomponent--primary'));
  it('should render the component', () => {
    cy.get('sls-nav').should('exist');
  });
});