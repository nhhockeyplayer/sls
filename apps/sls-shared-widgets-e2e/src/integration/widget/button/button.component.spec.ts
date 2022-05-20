describe('sls-shared-widgets', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&args=attr.id;attr.type:button;size:sm;active:false;disabled:false;style:primary;border:info&#34;;extraClasses;'));
  it('should render the component', () => {
    cy.get('sls-button').should('exist');
  });
});