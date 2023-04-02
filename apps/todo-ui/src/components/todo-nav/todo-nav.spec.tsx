import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import TodoNav from './todo-nav';

describe('TodoNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <TodoNav />)
      </BrowserRouter>);
    expect(baseElement).toBeTruthy();
  });
});
