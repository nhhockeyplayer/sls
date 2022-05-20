describe('sls-shared-widgets', () => {
  beforeEach(() => cy.visit('/iframe.html?id=radiocomponent--primary'));
  it('should render the component', () => {
    cy.get('sls-radio').should('exist');
  });
});