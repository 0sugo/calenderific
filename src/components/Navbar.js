import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LeftChev } from './Icons';
import globalphoto from './assets/globalphoto.png';

const Navbar = () => {
  const { AllHolidays } = useSelector((store) => store.allHolidays);

  return (
    <>
      <div className="nav-container">
        <NavLink to="/" className="back"><LeftChev /></NavLink>
        <h1 className="topper">World Holidays</h1>
      </div>
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
    </>
  );
};

export default Navbar;
