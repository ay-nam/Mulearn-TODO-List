import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/todo.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoProps {
  todos: Todo[];
  inputValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({
  todos,
  inputValue,
  handleInputChange,
  handleAddTodo,
  handleToggleTodo,
  handleDeleteTodo,
}) => {
  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
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
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Todo;
