import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../theme";

function CountryCard({ country }) {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <Flag src={country.flag} height="100px" width="auto" />
      <Details>
        <Title>{country.name}</Title>
        <Info>
          <InfoTitle>Population: </InfoTitle>
          {country.population}
        </Info>
        <Info>
          <InfoTitle>Region: </InfoTitle>
          {country.region}
        </Info>
        <Info>
          <InfoTitle>Capital: </InfoTitle>
          {country.capital}
        </Info>
      </Details>
    </Container>
  );
}

export default CountryCard;

const Flag = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
  object-fit: cover;
  height: 10rem;
`;

const Container = styled.div`
  background: ${(props) =>
    props.theme.name === "dark"
      ? props.theme.background
      : props.theme.background};
  position: relative;
  border-radius: 0.5rem;
  transition: transform 0.2s, opacity 0.2s;
  &:hover {
    transition: transform 0.2s;
    transform: scale(1.1);
    &::after {
      opacity: 1;
    }
  }
`;

const Title = styled.p`
  font-weight: bold;
  margin: 12px 0;
  font-size: 18px;
`;

const Details = styled.div`
  padding: 10px 20px 40px 20px;
`;

const Info = styled.p`
  margin: 5px 0px;
  font-size: 14px;
`;

const InfoTitle = styled.span`
  font-weight: 600;
`;
