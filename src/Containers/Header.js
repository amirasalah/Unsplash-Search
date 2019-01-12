import React, { Component } from "react";
import SearchBar from "../Components/SearchBar";
import UnsplashAxiosInstance from "../APIs/unsplash";
import Button from "../Components/Button";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      inputVisible: false
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
          images: response.data.results
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  keyPress = e => {
    if (e.keyCode === 13) {
      if (this.state.numOfImages > 1) {
        this.generateRandomImages(this.state.numOfImages);
      } else {
        alert("Please specify number of images");
      }
    }
  };
  generateRandomImages(count) {
    UnsplashAxiosInstance.get("/photos/random", {
      params: {
        count
      }
    }).then(response => {
      if (response) {
        this.setState({
          manyGeneratedImages: response.data,
          inputVisible: false
        });
      }
    });
  }
  showInput = () => {
    this.setState({
      inputVisible: true
    });
  };
  render() {
    let inputText;
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
      <div>
        <SearchBar searchSubmit={this.onSearchSubmit} />
        <Button
          buttonText="Generate one Random Image!"
          buttonClicked={() => this.generateRandomImages(1)}
        />
        <Button
          buttonText="Generate Many Random Images!"
          buttonClicked={this.showInput}
        />
        {inputText}
      </div>
    );
  }
}

export default Header;
