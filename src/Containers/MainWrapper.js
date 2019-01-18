import React, { Component } from "react";
import SearchResultsContainer from "../Containers/SearchResultsContainer";
import Header from "../Containers/Header";

class MainWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GeneratedImages: [],
      clickedImage: {},
      hasGeneratedImages: false,
      hasClickedImages: false
    };
  }
  getImages = data => {
    this.setState({
      GeneratedImages: data,
      hasGeneratedImages: true,
      hasClickedImages: false
    });
  };
  clickedImage = image => {
    this.setState({
      clickedImage: image,
      hasGeneratedImages: false,
      hasClickedImages: true
    });
  };
  render() {
    return (
      <React.Fragment>
        <Header ImagesResults={this.getImages} />
        <SearchResultsContainer
          clickedImage={this.clickedImage}
          GeneratedImagesFinal={this.state.GeneratedImages}
        />
      </React.Fragment>
    );
  }
}

export default MainWrapper;
