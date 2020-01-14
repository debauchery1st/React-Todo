import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: String(this.props.searchFor) };
  }
  handleChange = e => {
    this.setState({ value: e.target.value });
    this.props.filterTodo(e.target.value);
  };
  render() {
    return (
      <input
        placeholder="search"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
