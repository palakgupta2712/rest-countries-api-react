import { useEffect, useState } from "react";

function useCountries() {
  const [countries, setCountries] = useState([]);
  const uri = "https://restcountries.eu/rest/v2/all";
  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((res) => setCountries(res));
  }, []);
  return countries;
}

export default useCountries;
