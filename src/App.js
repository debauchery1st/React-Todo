import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todo: [] };
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
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
