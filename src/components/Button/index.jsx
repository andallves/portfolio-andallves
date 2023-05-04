import { Link } from 'react-router-dom';
import P from 'prop-types';

import './/Button.css';

export const Button = ({ to, text }) => {
  return (
    <div className="btn-box">
      <Link className="btn" to={to}>
        {text}
      </Link>
    </div>
  );
};

Button.propTypes = {
  to: P.string.isRequired,
  text: P.string.isRequired,
};
