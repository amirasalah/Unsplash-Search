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
    const spans = Math.ceil(height / 12);
    this.setState({
      spans
    });
  };

  render() {
      console.log(this.props);
    const generatedImg = this.props.generatedImages.map((img, index) => {
      return <img alt={img.description} src={img.urls.regular} key={index} />;
    });
    const { description, urls } = this.props.generatedImages;
    const GridImage = styled.img`
      max-width: 100%;
    `;
    const GridImageLink = styled.a`
      width: 100%;
      display: block;
    `;
    const GridImageContainer = styled.figure`
      margin: 20px 0;
      grid-row-end: span ${this.state.spans};
    `;
    return (
      <GridImageContainer>
        {generatedImg}
        {/* <GridImageLink href={urls.raw} target="_blank"> */}
          <GridImage ref={this.imageRef} alt={description} src={urls.regular} />
        {/* </GridImageLink> */}
        <figcaption> </figcaption>
      </GridImageContainer>
    );
  }
}

export default ImageCard;
