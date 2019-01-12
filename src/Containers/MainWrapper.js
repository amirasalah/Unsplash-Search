import React, { Component } from "react";
import SearchResultsContainer from "../Containers/SearchResultsContainer";
import ImagesGenerationContainer from "../Containers/ImagesGenerationContainer";
import Header from "../Containers/Header";

class MainWrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchResultsContainer />
        {/* {ImagesGenerationContainer} */}
        {/* <ResultsContainer images={this.state.images} /> */}
      </div>
    );
  }
}

export default MainWrapper;
