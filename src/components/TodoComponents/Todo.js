import React from "react";
import { ListItem } from "./componentStyles";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      value: props.value,
      id: props.id
    };
  }

  toggle = e => {
    e.preventDefault();
    this.props.toggleComplete(this.state.id);
  };

  render() {
    return (
      <ListItem
        className={`Task${this.props.completed ? "-complete" : "-pending"}`}
        onClick={this.toggle}
      >
        {this.props.completed ? "✅" + this.state.value : this.state.value}
      </ListItem>
    );
  }
}

export default Todo;
