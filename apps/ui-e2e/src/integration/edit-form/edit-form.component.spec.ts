describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=editformcomponent--primary&knob-loading=false&knob-hero'));

  it('should render the component', () => {
    cy.get('heroes-edit-form').should('exist');
  });
});
