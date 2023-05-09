import { Link } from 'react-router-dom';
import P from 'prop-types';

import './styles.css';

export const Button = ({ to, text, customClass }) => {
  return (
    <div className={`btn-box ${customClass}`}>
      <Link className="btn" to={to}>
        {text}
      </Link>
      <span className="animate"></span>
    </div>
  );
};

Button.defaultProps = {
  customClass: '',
};

Button.propTypes = {
  to: P.string.isRequired,
  text: P.string.isRequired,
  customClass: P.string,
};
