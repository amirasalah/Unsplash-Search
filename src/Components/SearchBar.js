import React, { Component } from "react";
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "Searching about ?!"
    };
  }
  onInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.searchSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder={this.state.searchTerm}
            onChange={this.onInputChange}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
