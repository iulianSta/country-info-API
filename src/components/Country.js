// Import React from "react"
import React from "react";

// Country function
const Country = ({ results }) => {
  const lands = results.map((obj, i) => {
    console.log(obj);
    const {
      name,
      nativeName,
      flag,
      capital,
      population,
      alpha2Code,
      area,
      region,
      subregion,
    } = obj;
    return (
      <div key={i} className="country">
        <h2>
          {name}, {nativeName}({alpha2Code})
        </h2>
        <h5>Capital: {capital}</h5>
        <h5>Population: {population}</h5>
        <h5>Area: {area}</h5>
        <h5>Region: {region}</h5>
        <h5>Subregion: {subregion}</h5>
        <img src={flag} alt={name} className="flag" />
      </div>
    );
  });

  return <React.Fragment>{lands}</React.Fragment>;
};

// Export Country
export default Country;
