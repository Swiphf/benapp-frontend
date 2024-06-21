import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList'; 
import TodoItem from './components/TodoItem'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
  ]);

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1 className="app-title">Todo List App</h1>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
