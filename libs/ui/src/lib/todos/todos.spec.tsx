import React from 'react';
import { render } from '@testing-library/react';
import { Todo } from '@monorepo-whiskey-zulu/data';

import Todos from './todos';

describe(' Todos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Todos />);
    expect(baseElement).toBeTruthy();
  });
});
