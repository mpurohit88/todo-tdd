import React from 'react';

const TodoList = ({ todoList }) => {
  return <>
    <ul data-testid="todolist-ul">
      {
        (todoList || []).map(item => <li>{item}</li>)
      }
    </ul>
  </>
}

export default TodoList;