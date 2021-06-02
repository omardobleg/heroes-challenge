describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=filtercomponent--primary&knob-title='));

  it('should render the component', () => {
    cy.get('heroes-filter').should('exist');
  });
});
