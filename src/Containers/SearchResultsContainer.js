import React from "react";
import UnsplashAxiosInstance from "../APIs/unsplash";
import ImageCard from "../Components/ImageCard";

class SearchResultsContainer extends React.Component {
  state = {
    manyGeneratedImages: [],
    numOfImages: 0
  };

  imagesCount = e => {
    this.setState({
      numOfImages: e.target.value
    });
  };

  render() {
    let RandomImageComponent;
    if (this.state.manyGeneratedImages.length) {
      RandomImageComponent = (
        <ImageCard generatedImages={this.state.manyGeneratedImages} />
      );
    }

    return <div className="search__container">{RandomImageComponent}</div>;
  }
}
export default SearchResultsContainer;
