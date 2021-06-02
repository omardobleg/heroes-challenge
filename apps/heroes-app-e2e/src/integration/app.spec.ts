import { getGreeting } from '../support/app.po';

describe('heroes-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
   // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
   // getGreeting().contains('Welcome to heroes-app!');
   const paragraph =cy.get('p');
   paragraph.contains('Hello world');
  });

  
  it('should navigate to villains', () => {
   cy.visit('/villains');
   const paragraph =cy.get('p');
   paragraph.contains('villains works!');
  });

  it('should navigate to about', () => {
    cy.visit('/about');
   const paragraph =cy.get('p');
   paragraph.contains('about works!');
  });
});
