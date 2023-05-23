import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCountryDetails } from '../redux/InfoCountry/InfoCountrySlice';

const Countries = () => {
  const { AllHolidays } = useSelector((store) => store.allHolidays);

  const dispatch = useDispatch();
  // console.log(AllHolidays[0]);
  const handleDetailsFetch = (e) => {
    const { id } = e.target;
    const url = `https://date.nager.at/api/v3/publicholidays/2023/${id}`;
    // console.log(url);
    dispatch(fetchCountryDetails({ url }));
  };
  return (
    <div>
      <p>isLoading...</p>
      <div>
        {AllHolidays.map((Holiday) => (
          <div key={Holiday.countryCode}>
            <NavLink to="/CountryDetails" id={Holiday.countryCode} onClick={handleDetailsFetch}>
              {Holiday.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
