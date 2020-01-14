import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { AppContainer, ClearButton } from "./AppStyles";
import { storeMemory, loadMemory } from "./services/persistence";
import SearchBar from "./components/TodoComponents/SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [...loadMemory()],
      searchString: ""
    };
  }

  persist = state => {
    this.setState(state); // set the state
    storeMemory(state.todo); // bake the cookies
  };

  addTask = name => {
    if (name.length === 0) return; // no blank tasks
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

  filterTodo = str => {
    // update the search string
    this.setState({ searchString: str });
  };

  whichTodo = () => {
    return this.state.searchString.length > 0
      ? this.state.todo.filter(t =>
          t.task.toLowerCase().includes(this.state.searchString.toLowerCase())
        )
      : this.state.todo;
  };

  render() {
    return (
      <AppContainer className="Todo-App">
        <SearchBar filterTodo={this.filterTodo} />
        <h2>Todo!</h2>
        <TodoList
          todo={this.whichTodo()}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm addtask={this.addTask} />
        <ClearButton onClick={this.removeCompleted}>
          clear completed
        </ClearButton>
      </AppContainer>
    );
  }
}

export default App;
