import React from "react";
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import "./components/TodoComponents/Todo.css";

const tasks = [
  { task: "Learn React", id: "1", completed: false },
  { task: "Use State", id: "2", completed: false },
  { task: "Clean house", id: "3", completed: false }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks
    };
  }

  addTask = taskName => {
    const newTodo = { task: taskName, id: Date.now(), completed: false };
    this.setState({ tasks: [...this.state.tasks, newTodo] });
  };

  clearDone = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };

  toggleTask = id => {
    console.log(id);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} />
        <TodoForm
          className="todo-form"
          addTask={this.addTask}
          updateTodo={this.updateTodo}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
