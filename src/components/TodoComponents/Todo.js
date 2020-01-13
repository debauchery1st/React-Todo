import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: props.item };
  }
  render() {
    return <li>{this.state.task}</li>;
  }
}

export default Todo;
