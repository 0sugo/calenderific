import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const CountryDetails = () => {
  const { country } = useSelector((store) => store.countryDetails);
  // console.log(country);
  return (
    <div>
      <NavLink to="/">{'<'}</NavLink>
      <div>
        {country.map((item) => (<div key={item.date}>{item.name}</div>))}
      </div>
    </div>
  );
};
export default CountryDetails;
