describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=gridcomponent--primary'));

  it('should render the component', () => {
    cy.get('heroes-grid').should('exist');
  });
});
