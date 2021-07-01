import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import useCountries from "../customHooks/useCountries";
import ThemeContext from "../theme";
import CountryCard from "./CountryCard";

function Container() {
  const theme = useContext(ThemeContext);
  const countries = useCountries();
  return (
    <Div theme={theme}>
      {countries.map((country) => (
        <CountryCard key={country.alpha2Code} country={country} />
      ))}
    </Div>
  );
}

export default Container;

const Div = styled.div`
  background: ${(props) =>
    props.theme.name === "dark" ? props.theme.bg : props.theme.bg};
  color: ${(props) =>
    props.theme.name === "dark" ? props.theme.color : props.theme.color};
  display: grid;
  @media (min-width: 300px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    gap: 20px;
  }
`;
