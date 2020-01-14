import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { AppContainer, ClearButton } from "./AppStyles";

const example = [
  {
    task: "get Baked in Garage",
    id: 1528817077420,
    completed: false
  },
  {
    task: "Organize Cookies",
    id: 1528817084420,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = { todo: [...example] };
  }

  addTask = name => {
    const newTask = {
      task: name,
      id: Date.now(),
      completed: false
    };
    const clone = { ...this.state };
    clone.todo.push(newTask);
    this.setState(clone);
  };

  toggleComplete = id => {
    const item = this.state.todo.find(item => item.id === id);
    const idx = this.state.todo.indexOf(item);
    item.completed = !item.completed;
    const clone = { ...this.state };
    clone.todo[idx] = item;
    this.setState(clone);
    console.log(idx, item);
  };

  removeCompleted = () => {
    const todo = this.state.todo.filter(item => item.completed === false);
    this.setState({ todo });
  };

  render() {
    return (
      <AppContainer className="Todo-App">
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} toggleComplete={this.toggleComplete} />
        <TodoForm addtask={this.addTask} />
        <ClearButton onClick={this.removeCompleted}>
          clear completed
        </ClearButton>
      </AppContainer>
    );
  }
}

export default App;
