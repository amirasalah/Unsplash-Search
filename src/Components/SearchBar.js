import React, { Component } from "react";
import styled from "styled-components";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "Fancy Wha ?!"
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
    const SearchBar = styled.input`
      width: 50vw;
      height: 50px;
      padding: 0 20px;
      margin-bottom: 25px;
      border: 5px solid #f2c39a;
      ::placeholder {
        color: rosybrown;
      }
    `;
    return (
      <form onSubmit={this.onFormSubmit}>
        <SearchBar
          placeholder={this.state.searchTerm}
          onChange={this.onInputChange}
          type="text"
        />
      </form>
    );
  }
}

export default SearchBar;
