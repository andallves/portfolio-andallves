import { Navbar } from '../Navbar';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        Andre.
        <span className="animate" style={`--i:1;`}></span>
      </a>

      <div className={`bx bx-menu`} id="menu-icon">
        <span className="animate" style={`--i:2;`}></span>
      </div>
      <Navbar />
    </header>
  );
};
