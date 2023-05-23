import React from 'react';
import { useSelector } from 'react-redux';

const CountryDetails = () => {
  const { country } = useSelector((store) => store.countryDetails);
  // console.log(country);
  return (
    <div>
      {country.map((item) => (<li key={item.date}>{item.name}</li>))}
    </div>
  );
};
export default CountryDetails;
