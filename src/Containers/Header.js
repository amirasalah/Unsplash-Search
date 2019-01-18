import React, { Component } from "react";
import SearchBar from "../Components/SearchBar";
import UnsplashAxiosInstance from "../APIs/unsplash";
import Button from "../Components/Button";
import styled from "styled-components";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVisible: false,
      GeneratedImages: [],
      numOfImages: 0
    };
  }
  onSearchSubmit = searchTerm => {
    UnsplashAxiosInstance.get(`search/photos`, {
      params: {
        query: searchTerm
      }
    })
      .then(response => {
        this.setState({
          GeneratedImages: response.data.results
        });
        this.props.ImagesResults(this.state.GeneratedImages);
      })
      .catch(function(error) {});
  };
  generateRandomImages(count) {
    UnsplashAxiosInstance.get("/photos/random", {
      params: {
        count
      }
    }).then(response => {
      if (response) {
        this.setState({
          inputVisible: false,
          GeneratedImages: response.data
        });
        this.props.ImagesResults(this.state.GeneratedImages);
      }
    });
  }
  keyPress = e => {
    if (e.keyCode === 13) {
      if (this.state.numOfImages > 1) {
        this.generateRandomImages(this.state.numOfImages);
      } else {
        alert("Please specify number of images");
      }
    }
  };
  imagesCount = e => {
    this.setState({
      numOfImages: e.target.value
    });
  };
  showInput = () => {
    this.setState({
      inputVisible: true
    });
  };
  render() {
    let inputText;
    const Header = styled.header`
      background: linear-gradient(to right, #e25c59, #f2c39a);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction:column;
      padding: 50px 0;
    `;
    if (this.state.inputVisible) {
      inputText = (
        <input
          type="text"
          onKeyDown={this.keyPress}
          onChange={this.imagesCount}
          value={this.state.numOfImages}
        />
      );
    }
    return (
      <Header>
        <SearchBar searchSubmit={this.onSearchSubmit} />
        <div>
          <Button
            buttonText="Generate one Random Image!"
            buttonClicked={() => this.generateRandomImages(1)}
          />
          <Button
            buttonText="Generate Many Random Images!"
            buttonClicked={this.showInput}
          />
        </div>

        {inputText}
      </Header>
    );
  }
}

export default Header;
