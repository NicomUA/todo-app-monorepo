import { getH2 } from '../support/app.po';

describe('todo-ui', () => {
  beforeEach(() => cy.visit('/reg'));

  it('should display register page', () => {
    getH2().contains('Welcome!');
  });
});
