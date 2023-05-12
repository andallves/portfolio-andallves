import P from 'prop-types';
import './styles.css';

export const EducationContent = ({ titleH3, paragraph }) => {
  return (
    <div className="education-content">
      <div className="content">
        <div className="year">
          <i className="bx bxs-calendar"></i>2018 - 2025
        </div>
        <h3>{titleH3}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

EducationContent.propTypes = {
  titleH3: P.string.isRequired,
  paragraph: P.string.isRequired,
};
