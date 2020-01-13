import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      value: props.value,
      id: props.id,
      completed: props.completed
    };
  }
  render() {
    return <li>{this.state.value}</li>;
  }
}

export default Todo;
