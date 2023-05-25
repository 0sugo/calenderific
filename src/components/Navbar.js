import { NavLink } from 'react-router-dom';
import { LeftChev } from './Icons';

const Navbar = () => (
  <>
    <div className="nav-container">
      <NavLink to="/" className="back"><LeftChev /></NavLink>
      <h1 className="topper">World Holidays</h1>
    </div>

  </>
);

export default Navbar;
