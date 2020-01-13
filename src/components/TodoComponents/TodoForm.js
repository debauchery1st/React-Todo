import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addtask(this.state.value);
    this.clearState();
  };
  clearState = () => this.setState({ value: "" });
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} />
        <button>add</button>
      </form>
    );
  }
}

export default TodoForm;
