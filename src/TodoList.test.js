import React from 'react';
import { render } from '@testing-library/react';

import TodoList from './TodoList';

describe('TodoList', () => {
  test('should TodoList component exists and underfind todoList should work', () => {
    render(<TodoList />);
  })

  test('should todo list be empty', () => {
    const { getByTestId } = render(<TodoList todoList={[]} />);

    expect(getByTestId('todolist-ul').children.length).toBe(0);
  })

  test('should render a todo list', () => {
    const { getByTestId } = render(<TodoList todoList={['Learn React']} />);

    expect(getByTestId('todolist-ul').children.length).toBe(1);
  })

  test('should render two item into todo list', () => {
    const { getByTestId } = render(<TodoList todoList={['Learn React', 'Learn Redux']} />);

    expect(getByTestId('todolist-ul').children.length).toBe(2);
  })

  // 1. When I click on button (Add Item) 
  // 2. value should be rendered here
})