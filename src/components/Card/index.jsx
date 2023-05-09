import P from 'prop-types';
import './styles.css';

export const Card = ({ title, img, customClass }) => {
  return (
    <div className={'container_card'}>
      <div className={''}>
        <p className={customClass}>{img}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: P.string,
  img: P.node,
  customClass: P.string,
};
