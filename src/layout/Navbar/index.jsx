import { Link } from 'react-router-dom';
import './styles.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={'/'} className="active">
        Home
      </Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/education'}>Education</Link>
      <Link to={'/skills'}>Skills</Link>
      <Link to={'/contact'}>Contact</Link>
      <span className="active-nav"></span>
      <span className="animate"></span>
    </nav>
  );
};
