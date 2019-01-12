import React from 'react';
import styled from 'styled-components';
import ImageCard from '../Components/ImageCard';

const ResultsContainer = (props) => {
  console.log(props);
  const GridWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px , 1fr));
    grid-gap: 0 10px;
    grid-auto-rows: 12px;
`;


  const returnedImages = props.images.map((currentImage) => {
    return (
      <ImageCard key={currentImage.id} imageDetails={currentImage} />
    )
  })
  return (
    <div>
      <GridWrapper>
        {returnedImages}
      </GridWrapper>
    </div>
  );
}
export default ResultsContainer;
