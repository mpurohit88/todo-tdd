import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TodoPage from './TodoPage';

describe('TodoPage', () => {
  test('should TodoPage component exists', () => {
    render(<TodoPage />)
  });

  test('should add todo item and show on ui', () => {
    const { getByRole, getByTestId } = render(<TodoPage />);
    const textbox = getByRole('textbox');
    const itemValue = 'Learn React';

    fireEvent.change(textbox, { target: { value: itemValue } });

    const button = getByRole('button');
    fireEvent.click(button);

    expect(getByTestId('todolist-ul').children.length).toBe(1);
  })
});