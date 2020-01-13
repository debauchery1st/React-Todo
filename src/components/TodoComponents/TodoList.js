import React from "react";
import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = { todo: [] };
  }
  render() {
    return (
      <ul className="TodoList">
        {this.state.todo.map(task => (
          <Todo item={task} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
