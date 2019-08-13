import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h2>Welcome to your Todo App!</h2>
      <TodoForm />
    </div>
  );
};

export default App;
