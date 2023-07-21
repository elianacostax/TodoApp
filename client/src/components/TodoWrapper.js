import { React, useState, useEffect } from "react";
import { TodoFrom } from "./TodoFrom.js";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo.js";
import { EditTodoForm } from "./EditTodoForm";
import axios from "axios";

uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);



/*    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/`);
        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);  */

  console.log(todos);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className="TodoWrapper">
      <h1>Tareas del día.</h1>
      <TodoFrom addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
