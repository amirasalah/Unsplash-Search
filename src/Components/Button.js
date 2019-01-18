import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  background-color: #ffffff;
  width: 15vw;
  height: 50px;
  border: none;
  margin:0 15px;
`;
const Button = props => {
  return (
    <CustomButton onClick={props.buttonClicked}>
      {props.buttonText}
    </CustomButton>
  );
};
export default Button;
