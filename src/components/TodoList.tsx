import React from 'react';
import Todo from './Todo';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
  inputValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  inputValue,
  handleInputChange,
  handleAddTodo,
  handleToggleTodo,
  handleDeleteTodo,
}) => {
  return (
    <div>
      <Todo
        todos={todos}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleAddTodo={handleAddTodo}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoList;
