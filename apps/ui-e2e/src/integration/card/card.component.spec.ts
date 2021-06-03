describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary'));

  it('should render the component', () => {
    cy.get('heroes-card').should('exist');
  });
});
