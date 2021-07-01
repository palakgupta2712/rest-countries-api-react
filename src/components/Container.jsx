import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../theme";

function Container() {
  const theme = useContext(ThemeContext);

  return <Div theme={theme}>Container</Div>;
}

export default Container;

const Div = styled.div`
  background: ${(props) =>
    props.theme.name === "dark" ? props.theme.bg : props.theme.bg};
  color: ${(props) =>
    props.theme.name === "dark" ? props.theme.color : props.theme.color};
  height: calc(100vh + 25px);
`;
