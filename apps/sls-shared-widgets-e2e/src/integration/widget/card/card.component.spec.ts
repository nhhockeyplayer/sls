describe('sls-shared-widgets', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary&args=id;title:h1;className;'));
  it('should render the component', () => {
    cy.get('sls-card').should('exist');
  });
});