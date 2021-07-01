import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../theme";
import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

function Header({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <React.Fragment>
      {/* {JSON.stringify(theme)} */}
      <Container style={theme}>
        <Title>Where in the world?</Title>
        <Button onClick={toggleTheme} style={theme}>
          {theme.name === "dark" ? (
            <Icon>
              <BiSun style={{ marginRight: "7px" }} /> Light Mode
            </Icon>
          ) : (
            <Icon>
              <BsMoon style={{ marginRight: "7px" }} /> Dark Mode
            </Icon>
          )}
        </Button>
      </Container>
    </React.Fragment>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px;
`;

const Title = styled.h3`
  margin-left: 25px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
`;
