import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <nav className="navbar">
      <Link to={'/'} className="active">
        Home
      </Link>
      <Link to={'/about'} onClick={(e) => handleClick(e)}>
        About
      </Link>
      <Link to={'/education'}>Education</Link>
      <Link to={'/skills'}>Skills</Link>
      <Link to={'/contact'}>Contact</Link>
      <span className="active-nav"></span>
      <span className="animate"></span>
    </nav>
  );
};
