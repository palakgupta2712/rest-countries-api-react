import React from "react";

function CountryCard({ country }) {
  return (
    <div>
      <p>{country.name}</p>
      <p>Population:{country.population}</p>
      <p>Region:{country.region}</p>
      <p>Capital:{country.capital}</p>
    </div>
  );
}

export default CountryCard;
