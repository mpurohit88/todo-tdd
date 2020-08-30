import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import AddTodoItem from './AddTodoItem';

describe('AddTodoItem', () => {
  test('should AddTodoItem component exists', () => {
    render(<AddTodoItem />)
  })

  test('should input box exists', () => {
    const { getByRole } = render(<AddTodoItem />);
    expect(getByRole('textbox')).toBeTruthy();
    expect(getByRole('textbox')).toBeInTheDocument();
  })

  test('should texbox empty on initial load', () => {
    const { getByRole } = render(<AddTodoItem />);
    expect(getByRole('textbox').value).toBe('');
  })

  test('should input box accept item value', () => {
    const { getByRole } = render(<AddTodoItem />);

    const todoItem = 'Learn React';
    const textbox = getByRole('textbox');
    fireEvent.change(textbox, { target: { value: todoItem } });
    expect(textbox.value).toBe(todoItem);
  })

  test('should button exists', () => {
    const { getByRole, getByText } = render(<AddTodoItem />);
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText(/add item/i)).toBeInTheDocument();

  })

  test('should button trigger method onClick event', () => {
    const addTodoItem = jest.fn();
    const { getByText } = render(<AddTodoItem addTodoItem={addTodoItem} />);

    const button = getByText(/add item/i);

    fireEvent.click(button);
    expect(addTodoItem).toBeCalled();
    expect(addTodoItem).toBeCalledTimes(1);

  })

  // on button click pass textbox value to method
  // Clear textbox on button click

  test('should send textbox item value on button click to method', () => {
    const addTodoItem = jest.fn();
    const { getByRole, getByText } = render(<AddTodoItem addTodoItem={addTodoItem} />);

    // putting item value into textobx
    const todoItem = 'Learn React';
    const textbox = getByRole('textbox');
    fireEvent.change(textbox, { target: { value: todoItem } });

    // trigger button click event
    const button = getByText(/add item/i);
    fireEvent.click(button);
    expect(addTodoItem).toBeCalledWith(todoItem);
    expect(textbox.value).toBe('');
  })
})