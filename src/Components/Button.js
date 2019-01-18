import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
`;
const Button = props => {
  return (
    <CustomButton onClick={props.buttonClicked}>
      {props.buttonText}
    </CustomButton>
  );
};
export default Button;
