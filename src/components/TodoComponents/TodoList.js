import React from "react";
import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { todo: props.todo };
  }
  render() {
    return (
      <ul className="TodoList">
        {this.state.todo.map(t => (
          <Todo value={t.task} key={t.id} completed={t.completed} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
