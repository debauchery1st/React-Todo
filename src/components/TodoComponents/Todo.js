import React from "react";

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
      <li
        className={`Task${this.props.completed ? "-complete" : "-pending"}`}
        onClick={this.toggle}
      >
        {this.state.value}
      </li>
    );
  }
}

export default Todo;
