import React, { useState } from 'react';
import "../styles/todo.css"

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Math.random(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list-container">
      <h1>T O D O</h1>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter a new todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={handleAddTodo}>Add Todo</button>
      <ul className="todo-items">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
            <button className="delete-button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
