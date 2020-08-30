import React, { useState } from 'react';

import TodoList from './TodoList';
import AddTodoItem from './AddTodoItem';

const TodoPage = () => {
  const [todoList, setTodoList] = useState([]);
  return <>
    <AddTodoItem addTodoItem={(newTodoItem) => setTodoList([...todoList, newTodoItem])} />
    <TodoList todoList={todoList} />
  </>
}

export default TodoPage;