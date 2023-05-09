import P from 'prop-types';
import './styles.css';

export const H2 = ({ text, textSpan }) => {
  return (
    <h2 className="heading">
      {text} <span>{textSpan}</span>
      <span className={'animate scroll'}></span>
    </h2>
  );
};

H2.propTypes = {
  text: P.node.isRequired,
  textSpan: P.node.isRequired,
};
