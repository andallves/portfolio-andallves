import P from 'prop-types';
import './styles.css';

export const InputField = ({ type, placeholder }) => {
  return (
    <div className="input-field">
      <input type={type} placeholder={placeholder} required />
      <span className="focus"></span>
    </div>
  );
};

InputField.propTypes = {
  type: P.string.isRequired,
  placeholder: P.string.isRequired,
};
