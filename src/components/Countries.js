import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCountryDetails } from '../redux/InfoCountry/InfoCountrySlice';
import { RightIcon } from './Icons';
import Navbar from './Navbar';

const Countries = () => {
  const { AllHolidays } = useSelector((store) => store.allHolidays);
  const dispatch = useDispatch();
  const handleDetailsFetch = (e) => {
    const { id } = e.target;
    const url = `https://date.nager.at/api/v3/publicholidays/2023/${id}`;
    dispatch(fetchCountryDetails({ url }));
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="search-container">
        <p className="search-Title">Search For Country</p>
        <input className="search-Input-Area" placeholder="e.g. Andorra" />
      </div>
      {(AllHolidays.isLoading) ? <p>Loading...</p>

        : (
          <div className="individual-countries">
            {AllHolidays.map((Holiday) => (
              <div key={Holiday.countryCode} className="one-country">
                <RightIcon />
                <div className="initials">{Holiday.countryCode}</div>
                <NavLink to="/CountryDetails" id={Holiday.countryCode} className="nav-to" onClick={handleDetailsFetch}>
                  {Holiday.name}
                  <br />
                  <span className="holidays-count">2 + Holidays</span>
                </NavLink>
                <div className="holiday-counter" />
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default Countries;
