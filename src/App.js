import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { AppContainer, ClearButton } from "./AppStyles";
import { storeMemory, loadMemory } from "./services/persistance";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todo: [...loadMemory()] };
  }

  persist = state => {
    this.setState(state); // set the state
    storeMemory(state.todo); // bake the cookies
  };

  addTask = name => {
    const newTask = {
      task: name,
      id: Date.now(),
      completed: false
    };
    const clone = { ...this.state };
    clone.todo.push(newTask);
    this.persist(clone);
  };

  toggleComplete = id => {
    const item = this.state.todo.find(item => item.id === id);
    const idx = this.state.todo.indexOf(item);
    const clone = { ...this.state };
    item.completed = !item.completed;
    clone.todo[idx] = item;
    this.persist(clone);
  };

  removeCompleted = () => {
    const clone = { ...this.state };
    clone.todo = clone.todo.filter(item => item.completed === false);
    this.persist(clone);
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
