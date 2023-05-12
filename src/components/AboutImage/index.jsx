import profilePhoto from '../../assets/img/about.png';
import './styles.css';

export const AboutImage = () => {
  return (
    <div className="about-img">
      <img src={profilePhoto} alt="Profile Photo" />
      <span className="circle-spin"></span>
      <span className={`animate scroll`}></span>
    </div>
  );
};
