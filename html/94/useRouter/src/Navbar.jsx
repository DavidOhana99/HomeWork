import './Navbar.css';
import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">home</NavLink></li> | <li><NavLink to="/buy">buy</NavLink></li> | <li><NavLink to="/sell">sell</NavLink></li>
      </ul>
    </nav>
  )
}
