import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { fetchCountryDetails } from '../redux/InfoCountry/InfoCountrySlice';
import { RightIcon } from './Icons';
import Navbar from './Navbar';
import globalphoto from './assets/globalphoto.png';

const Countries = () => {
  const { AllHolidays } = useSelector((store) => store.allHolidays);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const handleDetailsFetch = (selectedId) => {
    if (selectedId) {
      const url = `https://date.nager.at/api/v3/publicholidays/2023/${selectedId}`;
      dispatch(fetchCountryDetails({ url }));
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredHoliday = AllHolidays.filter((item) => (
    item.name.toLowerCase().includes(search.toLowerCase())
  ));
  return (
    <div>
      <div>
        <Navbar />
        <div className="hero-section">
          <img className="header-photo" src={globalphoto} alt="world" />
          <div className="All-holidays">
            <h3>
              <span className="before-text">Sampled</span>
              <br />
              {' '}
              <span className="main-text">{AllHolidays.length}</span>
              {' '}
              <span className="after-text">Countries</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="search-container">
        <p className="search-Title">Search For Country</p>
        <input className="search-Input-Area" placeholder="e.g. Andorra" onChange={handleSearch} />
      </div>
      {(AllHolidays.isLoading) ? <p>Loading...</p>

        : (
          <div className="individual-countries">
            {filteredHoliday.map((Holiday) => (
              <NavLink key={Holiday.countryCode} className="one-country" to="/CountryDetails" id={Holiday.countryCode} onClick={() => handleDetailsFetch(Holiday.countryCode)} data-testid="filtered-holiday">
                <RightIcon />
                <div className="initials">{Holiday.countryCode}</div>
                <p className="nav-to">
                  {Holiday.name}
                  <br />
                  <span className="holidays-count">2 + Holidays</span>
                </p>
                <div className="holiday-counter" />
              </NavLink>
            ))}
          </div>
        )}
    </div>
  );
};

export default Countries;
