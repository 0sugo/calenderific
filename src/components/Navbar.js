import { NavLink } from 'react-router-dom';
import { LeftChev } from './Icons';
import globalphoto from './assets/globalphoto.png';

const Navbar = () => (
  <>
    <div className="nav-container">
      <NavLink to="/" className="back"><LeftChev /></NavLink>
      <h1 className="topper">World Holidays</h1>
    </div>
    <div>
      <img className="header-photo" src={globalphoto} alt="world" />
    </div>
  </>
);

export default Navbar;
