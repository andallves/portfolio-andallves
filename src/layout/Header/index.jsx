import { Navbar } from '../Navbar';
import './styles.css';

export const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        Andre.
        <span className="animate"></span>
      </a>

      <div className={`bx bx-menu`} id="menu-icon">
        <span className="animate"></span>
      </div>

      <Navbar />
    </header>
  );
};
