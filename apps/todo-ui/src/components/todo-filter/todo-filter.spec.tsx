import { render } from '@testing-library/react';

import TodoFilter from './todo-filter';

describe('TodoFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoFilter setFilter={() => { return '' }} />);
    expect(baseElement).toBeTruthy();
  });
});
