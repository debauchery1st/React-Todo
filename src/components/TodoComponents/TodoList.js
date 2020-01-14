import React from "react";
import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
  render() {
    return (
      <ul className="TodoList">
        {this.props.todo.map(t => (
          <Todo
            key={t.id}
            value={t.task}
            id={t.id}
            completed={t.completed}
            toggleComplete={this.props.toggleComplete}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
