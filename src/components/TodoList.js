import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  // Function to fetch todos from backend
  const fetchTodos = () => {
    fetch('http://localhost:5000/api/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  };

  // Function to delete an item from the list
  const deleteTodo = (id) => {
    fetch(`http://localhost:5000/api/todos/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(`Todo with ID ${id} deleted successfully`);
        // After deletion, fetch updated todos
        fetchTodos();
      })
      .catch(error => console.error('Error deleting todo:', error));
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
