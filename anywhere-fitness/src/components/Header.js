import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledHeader = styled.header`
  h1 {
    color: red;
  }
`;

export default function Header() {
  const history = useHistory();
  const routeToClasses = () => {
    history.push("./class-list");
  };
  const routeToNewClass = () => {
    history.push("./add-class");
  };
  const routeHome = () => {
      history.push('./')
  }

  return (
    <StyledHeader>
      <h1>This is the Header</h1>
      <button onClick={routeToClasses}>Class List</button>
      <button onClick={routeToNewClass}>Add Class</button>
      <button onClick={routeHome}>Home</button>
    </StyledHeader>
  );
}
