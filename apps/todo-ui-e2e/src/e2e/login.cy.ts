import { getH2 } from '../support/app.po';

describe('todo-ui', () => {
  beforeEach(() => cy.visit('/login'));

  it('should display Login page', () => {
    getH2().contains('Welcome back!');
  });
});
