import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

const CountryDetails = () => {
  const { country } = useSelector((store) => store.countryDetails);
  // console.log(country);
  return (
    <div>
      <Navbar to="/" />
      <div>
        {country.map((item) => (<div key={item.date}>{item.name}</div>))}
      </div>
    </div>
  );
};
export default CountryDetails;
