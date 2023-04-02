import { render } from '@testing-library/react';

import TodoText from './todo-text';

describe('TodoText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoText />);
    expect(baseElement).toBeTruthy();
  });
});
