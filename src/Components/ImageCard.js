import React, { Component } from "react";
import styled from "styled-components";
//Make the image card border the same as the color in the API
//Add Pagination
class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      spans: 0
    };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 13);
    this.setState({
      spans
    });
  };
  openImageDetails = (e, clickedImage) => {
    e.preventDefault();
    this.props.clickedImage(clickedImage);
  };
  render() {
    const GridImage = styled.img`
      max-width: 100%;
      border: 4px solid ${this.props.Image.color};
      box-shadow: 6px 5px 11px 0px rgba(0,0,0,0.38);

    `;
    const GridImageContainer = styled.figure`
      margin: 20px 0;
      grid-row-end: span ${this.state.spans};
      margin-bottom:20px;
    `;
    return (
      <React.Fragment>
        <GridImageContainer>
          <GridImage
            ref={this.imageRef}
            alt={this.props.Image.description}
            src={this.props.Image.urls.regular}
          />
        </GridImageContainer>
      </React.Fragment>
    );
  }
}

export default ImageCard;
