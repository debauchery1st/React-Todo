import React from "react";
import TodoList from "./components/TodoComponents/TodoList";

const example = [
  {
    task: "get Baked in Garage",
    id: 1528817077420,
    completed: false
  },
  {
    task: "Organize Cookies",
    id: 1528817084358,
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
    const clone = [...this.state.todo];
    clone.push(newTask);
    this.setState({ todo: clone });
  };
  removeTask = name => {
    const idx = this.state.todo.find(item => item.task === name).indexOf();
    const newTodo = [
      ...this.state.todo.slice(0, idx),
      ...this.state.todo.slice(idx + 1)
    ];
    this.setState(newTodo);
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="Todo-App">
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
