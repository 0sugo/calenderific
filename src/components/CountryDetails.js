import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

const CountryDetails = () => {
  const { country } = useSelector((store) => store.countryDetails);
  // console.log(country);
  return (
    <div>
      <Navbar />
      <div className="chosen-container">
        {country.map((item) => (
          <div className="chosen-holidays" key={item.date}>
            <p>{item.name}</p>
            <p className="dater">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CountryDetails;
