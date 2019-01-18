import React from "react";
import styled from "styled-components";
// import UnsplashAxiosInstance from "../APIs/unsplash";
import ImageCard from "../Components/ImageCard";

class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedImage: {}
    };
  }
  clickedImageDetails = img => {
    this.props.clickedImage(img);
  };
  render() {
    const GridWrapper = styled.section`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 0 10px;
      grid-auto-rows: 13px;
    `;
    return (
      <GridWrapper>
        {this.props.GeneratedImagesFinal.map(imgDetails => {
          return <ImageCard key={imgDetails.id} Image={imgDetails}
          />;
        })}
      </GridWrapper>
    );
  }
}
export default SearchResultsContainer;
