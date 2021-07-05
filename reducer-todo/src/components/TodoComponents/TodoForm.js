import React, { useReducer, useState } from "react";
import { todoReducer, initialState } from "../../reducers/todoReducer";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [input, setInput] = useState("");

  const todoChangeHandler = event => {
    setInput(event.target.value);
  };

  const submitChange = event => {
    event.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: input
    });
    setInput("");
  };

  const removeItem = event => {
    event.preventDefault();
    dispatch({
      type: "CLEAR_DONE"
    });
  };

  return (
    <div className="todolist">
      <TodoList dispatch={dispatch} todos={state} />
      <form onSubmit={submitChange}>
        <input
          type="text"
          value={input}
          name="task"
          placeholder="add task..."
          onChange={todoChangeHandler}
        />
        <button className="add-btn" onClick={submitChange}>
          Add Todo
        </button>
        <button className="clear-btn" onClick={removeItem}>
          Clear Completed
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
