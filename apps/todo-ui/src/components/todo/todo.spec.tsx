import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Todo from './todo';

describe('Todo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Todo />
      </BrowserRouter>

    );
    expect(baseElement).toBeTruthy();
  });
});
