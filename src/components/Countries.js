import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Countries = () => {
  const { AllHolidays } = useSelector((store) => store.allHolidays);
  // console.log(AllHolidays[0].name);
  return (
    <div>
      <p>isLoading...</p>
      <ul>
        {AllHolidays.map((Holiday) => (
          <li key={Holiday.countryCode}>
            <NavLink to="/CountryDetails">
              {Holiday.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
