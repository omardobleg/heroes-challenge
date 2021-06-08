import { getGreeting } from '../support/app.po';

describe('heroes-app', () => {
  beforeEach(() => cy.visit('/'));
  it('should navigate to villains', () => {
    cy.visit('/villains');
    cy.get('heroes-grid').contains('Akira Iwako');
  });

  it('should navigate to about', () => {
    cy.visit('/about');
    const paragraph = cy.get('p');
    paragraph.contains('about works!');
  });

  describe('characters page', () => {
    it('should have a grid', () => {
      cy.get('heroes-grid').contains('All For One');
    });
    it('should have an add button and navigate to create', () => {
      cy.get('.float-button').click();
      cy.url().should('contain', 'create');
    });

    it('should have a paginator and fetch pages', () => {
      cy.get('button[icon="tuiIconChevronRight"]')
        .first()
        .click()
        .then(() => cy.get('._focused').first().contains('2'));
    });

    it('should have a filter and filter response', () => {
      cy.contains('Filter search')
        .click()
        .then(() => cy.get('tui-input[formcontrolname="alias"]').type('stun'))
        .type('{enter}')
        .then(() => cy.get('heroes-card').contains('Denki Kaminari'));
    });
  });

  describe('create page', () => {
    beforeEach(() => cy.visit('/characters/create'));
    const getInputAndType = (name: string, text: string) =>
      cy.get(`tui-input[formcontrolname="${name}"]`).type(text);
    const fillForm = () => {
      getInputAndType('name', 'Test');
      getInputAndType('alias', 'Testman');
      getInputAndType('quirk', 'superstrength');
      getInputAndType('affiliation', 'marvel');
    };
    it('should create a hero', () => {
      fillForm();
      cy.get('button[type="submit"]').click()
      .then(()=> cy.get('tui-notification').contains('Created'))
    });

    it('should clear a form', () => {
      fillForm();
      cy.contains('Clear').click()
      .then(()=>cy.get(`tui-input[formcontrolname="name"]`).invoke('val').should('be.empty'))
    });
  });
});
