import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import globalphoto from './assets/globalphoto.png';

const CountryDetails = () => {
  const { country } = useSelector((store) => store.countryDetails);
  const { AllHolidays } = useSelector((store) => store.allHolidays);
  let filteredCountry = [];
  let mainText = '0';
  if (country && country.length > 0) {
    const id = country[0].countryCode;
    filteredCountry = AllHolidays.filter((item) => item.countryCode === id);
    mainText = filteredCountry.length.toString();
  }
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <img className="header-photo" src={globalphoto} alt="world" />
        <div className="All-holidays">
          <h3>
            <span className="before-text">{filteredCountry.length > 0 ? filteredCountry[0].name : ''}</span>
            <br />
            <span className="main-text">{mainText}</span>
            {' '}
            <span className="after-text">Holidays</span>
          </h3>
        </div>
      </div>
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
