import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by Andre Alves | All Rights Reserved </p>

        <span className={`animate scroll`} style="--i:1;"></span>
      </div>

      <div className="footer-iconTop">
        <a href="#">
          <i className="bx bx-up-arrow-alt"></i>
        </a>

        <span className={`animate scroll`} style="--i:3;"></span>
      </div>
    </footer>
  );
};
