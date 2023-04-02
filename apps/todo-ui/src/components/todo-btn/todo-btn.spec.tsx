import { render } from '@testing-library/react';

import TodoBtn from './todo-btn';

describe('TodoBtn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoBtn />);
    expect(baseElement).toBeTruthy();
  });
});
