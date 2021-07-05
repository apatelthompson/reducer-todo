import React from "react";

const Todo = props => {
  console.log(props);

  const { todo, dispatch } = props;

  return (
    <div
      className={`todo${todo.completed ? "-done" : ""}`}
      onClick={() => dispatch({ type: "TOGGLE_TASK", payload: todo.id })}
    >
      {todo.task}
    </div>
  );
};

export default Todo;
