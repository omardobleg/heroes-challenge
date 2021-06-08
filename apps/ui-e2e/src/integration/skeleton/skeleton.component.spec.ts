describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=skeletoncomponent--primary'));

  it('should render the component', () => {
    cy.get('heroes-skeleton').should('exist');
  });
});
