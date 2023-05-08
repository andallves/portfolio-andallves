import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer show-animate">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by Andre Alves | All Rights Reserved </p>

        <span className={`animate scroll`}></span>
      </div>

      <div className="footer-iconTop">
        <a href="#">
          <i className="bx bx-up-arrow-alt"></i>
        </a>

        <span className={`animate scroll`}></span>
      </div>
    </footer>
  );
};
