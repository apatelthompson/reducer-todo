import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(props);
  return (
    <div className="todo-list">
      {props.todos.todos.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />
      ))}
    </div>
  );
};

export default TodoList;
