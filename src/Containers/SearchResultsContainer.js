import React from "react";
import SearchBar from "../Components/SearchBar";
import ResultsContainer from "./ImagesGenerationContainer";
import UnsplashAxiosInstance from "../APIs/unsplash";
import Button from "../Components/Button";
import ImageCard from "../Components/ImageCard";

class SearchContainer extends React.Component {
  state = {
    images: [],
    manyGeneratedImages: [],
    numOfImages: 0,
    inputVisible: false
  };
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
  keyPress = e => {
    if (e.keyCode === 13) {
      if (this.state.numOfImages > 1) {
        this.generateRandomImages(this.state.numOfImages);
      } else {
        alert("Please specify number of images");
      }
    }
  };
  render() {
    let RandomImageComponent;
    let inputText;
    if (this.state.manyGeneratedImages.length) {
      RandomImageComponent = (
        <ImageCard generatedImages={this.state.manyGeneratedImages} />
      );
    }
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
      <div className="search__container">
        <SearchBar searchSubmit={this.onSearchSubmit} />{" "}
        <Button buttonText="Image Details Page"> </Button> <hr />
        <Button
          buttonText="Generate one Random Image!"
          buttonClicked={() => this.generateRandomImages(1)}
        />{" "}
        <Button
          buttonText="Generate Many Random Images!"
          buttonClicked={this.showInput}
        />{" "}
        <hr /> {inputText} {RandomImageComponent}{" "}
        <ResultsContainer images={this.state.images} />{" "}
      </div>
    );
  }
}
export default SearchContainer;
