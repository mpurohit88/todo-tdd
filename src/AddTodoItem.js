import React, { useState } from 'react';

const AddTodoItem = ({ addTodoItem }) => {
  const [todoItem, setTodoItem] = useState('');

  const addTodoItemFn = (todoItem) => {
    addTodoItem(todoItem);
    setTodoItem('');
  }

  return <>
    <input value={todoItem}
      onChange={event => setTodoItem(event.target.value)} />
    <button onClick={() => addTodoItemFn(todoItem)}>Add Item</button>
  </>
}

export default AddTodoItem;