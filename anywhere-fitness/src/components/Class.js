import React from "react";
import styled from "styled-components";

const StyledClass = styled.div`
  
    color: red;
    border: 2px solid red;
    border-radius: 20px;
    box-shadow: 1px -1px 1px 1px rgb(0, 255, 179);
    width: 50%;
    margin: 1% auto;
`;

export default function Class(props) {
  const { details } = props;
  return (
    <StyledClass>
      <h2>{details.className}</h2>
      <p>{details.location}</p>
      <p>Attendies: {details.maxClassSize}</p>
    </StyledClass>
  );
}
