describe('sls-shared-widgets', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconcomponent--primary'));
  it('should render the component', () => {
    cy.get('sls-icon').should('exist');
  });
});