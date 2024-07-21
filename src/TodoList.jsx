import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {
  return todos.map((todo) => <Todo todo={todo} key={todo} />);
}

export default TodoList